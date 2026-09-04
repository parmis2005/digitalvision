"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ProductLiveFrameProps = {
  src: string;
  title: string;
};

type FrameWindowWithBridge = Window & {
  Element: typeof Element;
  HTMLAnchorElement: typeof HTMLAnchorElement;
  HTMLElement: typeof HTMLElement;
  HTMLFormElement: typeof HTMLFormElement;
  MouseEvent: typeof MouseEvent;
  frameElement: HTMLIFrameElement | null;
};

const CROSS_ORIGIN_PREVIEW_HEIGHT = "3600px";
// Every preview measures well past this once loaded. Reserving it up front
// keeps the page scrollable while the preview is still on its way, instead of
// leaving the visitor swiping at a page that has nowhere to go yet.
const INITIAL_PREVIEW_HEIGHT = 3000;
const HEIGHT_EPSILON = 8;
const MAX_CONSECUTIVE_GROWTH_STEPS = 60;
const MEASURE_THROTTLE = 250;
const RESIZE_DEBOUNCE = 200;
const TAP_MOVE_TOLERANCE = 10;
const TAP_MAX_DURATION = 700;
// The frame carries the whole site, so its own viewport is the whole document
// and native lazy loading never defers anything. Media is deferred by hand
// against THIS page's viewport instead, in viewport multiples.
const MEDIA_LOAD_MARGIN = 1.5;
const PREVIEW_ASSET_PATTERN =
  /\.(?:avif|css|gif|html?|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

const FRAME_STYLE_TEXT = `
        html,
        body {
          height: auto !important;
          min-height: 0 !important;
          overflow: hidden !important;
          scroll-behavior: auto !important;
          overscroll-behavior: auto !important;
          touch-action: auto !important;
        }

        html[class~="h-full"],
        body[class~="h-full"],
        html[class~="min-h-full"],
        body[class~="min-h-full"] {
          height: auto !important;
          min-height: 0 !important;
        }

        section#top,
        section#hero,
        section#home,
        [data-hero],
        .hero,
        .hero-stage,
        .hero-section,
        .site-hero,
        [class*="hero-stage"],
        [class*="HeroStage"],
        [class~="min-h-screen"],
        [class*="min-h-screen"],
        [class*="min-h-svh"],
        [class*="min-h-dvh"],
        [class*="min-h-[100vh]"],
        [class*="min-h-[100svh]"],
        [class*="min-h-[100dvh]"],
        [class*="min-h-["][class*="vh"],
        section[class*="hero"],
        section[class*="Hero"] {
          min-height: var(--embedded-viewport-height) !important;
        }

        section#top,
        section#hero,
        section#home,
        [class~="h-screen"],
        [class*="h-screen"],
        [class*="h-svh"],
        [class*="h-dvh"],
        [class*="h-[100vh]"],
        [class*="h-[100svh]"],
        [class*="h-[100dvh]"],
        [class*="h-["][class*="vh"] {
          height: var(--embedded-viewport-height) !important;
          min-height: var(--embedded-viewport-height) !important;
        }
      `;

const CONTAINED_STYLE_TEXT = `
        html {
          height: auto !important;
          min-height: 100% !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          scroll-behavior: auto !important;
          overscroll-behavior: auto !important;
          -webkit-overflow-scrolling: touch !important;
        }

        body {
          height: auto !important;
          min-height: 100% !important;
          overflow-x: clip !important;
          scroll-behavior: auto !important;
          overscroll-behavior: auto !important;
          touch-action: pan-y !important;
          -webkit-overflow-scrolling: touch !important;
        }

        iframe[src*="google.com/maps"],
        iframe[src*="openstreetmap.org"],
        iframe[src*="mapbox.com"],
        .leaflet-container {
          pointer-events: none !important;
          touch-action: pan-y !important;
        }

        .bg-fixed,
        [style*="background-attachment: fixed"],
        [style*="background-attachment:fixed"] {
          background-attachment: scroll !important;
        }
      `;

export function ProductLiveFrame({ src, title }: ProductLiveFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const observedDocumentRef = useRef<Document | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const measureFrameRef = useRef<number | null>(null);
  const lastMeasureRef = useRef(0);
  const viewportRef = useRef<{ width: number; height: number } | null>(null);
  const appliedHeightRef = useRef(INITIAL_PREVIEW_HEIGHT);
  const growthStepsRef = useRef(0);
  const heightLockedRef = useRef(false);
  const pendingNavigationRef = useRef(false);
  const shieldRef = useRef<HTMLDivElement>(null);
  const frameDocTopRef = useRef(0);
  const syncMediaFrameRef = useRef<number | null>(null);
  const frameLoadedRef = useRef(false);
  const containedRef = useRef(false);
  const [height, setHeight] = useState(`${INITIAL_PREVIEW_HEIGHT}px`);
  const [contained, setContained] = useState(false);

  const getFrameDocument = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return null;
    }

    try {
      const frameWindow = iframe.contentWindow;
      const frameDocument = iframe.contentDocument;

      if (!frameWindow || !frameDocument?.documentElement || !frameDocument.body) {
        return null;
      }

      return { frameWindow, frameDocument };
    } catch {
      setHeight(CROSS_ORIGIN_PREVIEW_HEIGHT);
      return null;
    }
  }, []);

  // Read-only pass. It never writes into the frame, so it can be triggered by
  // the observers without feeding itself new mutations.
  const measureFrame = useCallback(() => {
    if (contained) {
      return;
    }

    if (heightLockedRef.current) {
      return;
    }

    const frame = getFrameDocument();

    if (!frame) {
      return;
    }

    const { documentElement, body } = frame.frameDocument;
    const floor = frameLoadedRef.current
      ? (viewportRef.current?.height ?? window.innerHeight)
      : INITIAL_PREVIEW_HEIGHT;
    const nextHeight = Math.max(
      documentElement.scrollHeight,
      documentElement.offsetHeight,
      body.scrollHeight,
      body.offsetHeight,
      floor,
    );
    const appliedHeight = appliedHeightRef.current;

    if (Math.abs(nextHeight - appliedHeight) < HEIGHT_EPSILON) {
      growthStepsRef.current = 0;
      return;
    }

    // Previews with raw `vh` sizing grow whenever the iframe grows. Bail out
    // after far more steps than normal lazy loading needs, so such a preview
    // cannot pull the page into an endless resize loop.
    if (nextHeight > appliedHeight) {
      growthStepsRef.current += 1;

      if (growthStepsRef.current > MAX_CONSECUTIVE_GROWTH_STEPS) {
        heightLockedRef.current = true;
        return;
      }
    } else {
      growthStepsRef.current = 0;
    }

    appliedHeightRef.current = nextHeight;
    setHeight(`${nextHeight}px`);
  }, [getFrameDocument]);

  const scheduleMeasure = useCallback(() => {
    if (measureFrameRef.current !== null) {
      return;
    }

    // Reading scrollHeight forces a layout of a document that is thousands of
    // pixels tall, so do it a few times a second at most rather than on every
    // animation frame.
    const sinceLast = Date.now() - lastMeasureRef.current;
    const delay = Math.max(0, MEASURE_THROTTLE - sinceLast);

    measureFrameRef.current = window.setTimeout(() => {
      measureFrameRef.current = null;
      lastMeasureRef.current = Date.now();
      measureFrame();
    }, delay);
  }, [measureFrame]);


  // With the frame as tall as the whole site, everything inside it counts as
  // on screen, so the browser would fetch every image and buffer every video up
  // front. Park anything far below the visitor and bring it back as they reach
  // it, measured against THIS page's viewport.
  const syncFrameMedia = useCallback(() => {
    if (contained) {
      return;
    }

    const iframe = iframeRef.current;
    const frame = getFrameDocument();

    if (!iframe || !frame) {
      return;
    }

    const viewportHeight = window.innerHeight;
    const margin = viewportHeight * MEDIA_LOAD_MARGIN;
    const frameTop = frameDocTopRef.current - window.scrollY;

    frame.frameDocument
      .querySelectorAll<HTMLElement>("img[data-live-top], video[data-live-top]")
      .forEach((element) => {
        const offset = Number(element.dataset.liveTop ?? "0");
        const top = frameTop + offset;
        const near = top < viewportHeight + margin && top > -margin - element.offsetHeight;

        if (element instanceof HTMLVideoElement) {
          if (!near) {
            if (!element.paused) {
              element.pause();
            }

            return;
          }

          if (element.dataset.liveDeferred === "true") {
            const stashed = element.dataset.liveSrc;
            const stashedSources = element.dataset.liveSources;

            delete element.dataset.liveDeferred;
            delete element.dataset.liveSrc;
            delete element.dataset.liveSources;

            if (stashedSources) {
              const values = stashedSources.split("|");
              element.querySelectorAll("source").forEach((child, index) => {
                if (values[index]) {
                  child.setAttribute("src", values[index]);
                }
              });
            }

            if (stashed) {
              element.setAttribute("src", stashed);
            }

            element.preload = "metadata";
            element.load();
          }

          if (element.dataset.liveAutoplay === "true" && element.paused) {
            void element.play().catch(() => undefined);
          }

          return;
        }

        if (!near || element.dataset.liveDeferred !== "true") {
          return;
        }

        const stashedSrc = element.dataset.liveSrc;
        const stashedSrcset = element.dataset.liveSrcset;

        delete element.dataset.liveDeferred;
        delete element.dataset.liveSrc;
        delete element.dataset.liveSrcset;

        if (stashedSrcset) {
          element.setAttribute("srcset", stashedSrcset);
        }

        if (stashedSrc) {
          element.setAttribute("src", stashedSrc);
        }

        element.style.removeProperty("min-height");
      });
  }, [getFrameDocument]);

  const scheduleSyncMedia = useCallback(() => {
    if (syncMediaFrameRef.current !== null) {
      return;
    }

    syncMediaFrameRef.current = window.requestAnimationFrame(() => {
      syncMediaFrameRef.current = null;
      syncFrameMedia();
    });
  }, [syncFrameMedia]);

  const prepareFrame = useCallback(() => {
    const frame = getFrameDocument();

    if (!frame) {
      return;
    }

    const { frameWindow, frameDocument } = frame;
    const documentElement = frameDocument.documentElement;
    const body = frameDocument.body;
    const bridgedFrameWindow = frameWindow as FrameWindowWithBridge;
    containedRef.current = contained;

    const setInlineStyle = (element: HTMLElement, property: string, value: string) => {
      if (element.style.getPropertyValue(property) !== value) {
        element.style.setProperty(property, value);
      }
    };

    // Mobile browsers change `innerHeight` whenever the URL bar collapses. Only
    // refresh the embedded viewport height when the layout really changed,
    // otherwise every scroll gesture would resize the hero sections.
    const currentViewport = viewportRef.current;
    const nextViewport = { width: window.innerWidth, height: window.innerHeight };

    if (!currentViewport || currentViewport.width !== nextViewport.width) {
      viewportRef.current = nextViewport;
    }

    const viewportHeight = viewportRef.current?.height ?? nextViewport.height;

    setInlineStyle(documentElement, "--embedded-viewport-height", `${viewportHeight}px`);
    setInlineStyle(documentElement, "height", "auto");
    setInlineStyle(documentElement, "min-height", contained ? "100%" : "0");
    setInlineStyle(documentElement, "overflow", contained ? "auto" : "hidden");
    setInlineStyle(body, "height", "auto");
    setInlineStyle(body, "min-height", contained ? "100%" : "0");
    setInlineStyle(body, "overflow", contained ? "auto" : "hidden");
  

    const style =
      frameDocument.getElementById("product-live-frame-style") ??
      frameDocument.createElement("style");

    style.id = "product-live-frame-style";

    const styleText = contained ? CONTAINED_STYLE_TEXT : FRAME_STYLE_TEXT;

    if (style.textContent !== styleText) {
      style.textContent = styleText;
    }

    if (!style.parentElement) {
      frameDocument.head.appendChild(style);
    }

    frameDocument
      .querySelectorAll<HTMLIFrameElement>('iframe[src*="google.com/maps"]')
      .forEach((mapFrame) => {
        const mapClassName = mapFrame.getAttribute("class") ?? "";
        const mapMinHeight = "clamp(320px, 25vw, 420px)";

        setInlineStyle(mapFrame, "display", "block");
        setInlineStyle(mapFrame, "width", "100%");
        setInlineStyle(mapFrame, "min-height", "320px");
        setInlineStyle(mapFrame, "border", "0");

        if (mapClassName.includes("h-full")) {
          setInlineStyle(mapFrame, "height", "100%");
        } else if (!mapFrame.getAttribute("height")) {
          setInlineStyle(mapFrame, "height", mapMinHeight);
        }

        if (mapFrame.parentElement) {
          setInlineStyle(mapFrame.parentElement, "min-height", mapMinHeight);
        }
      });

    


    // Record where each image and video sits inside the frame once, so the
    // scroll handler never has to measure layout again, and park the ones that
    // are far below the visitor.
    const frameElementForMedia = iframeRef.current;

    if (frameElementForMedia) {
      frameDocTopRef.current =
        frameElementForMedia.getBoundingClientRect().top + window.scrollY;
    }

    const firstScreen = window.innerHeight * MEDIA_LOAD_MARGIN;

    frameDocument.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
      if (image.dataset.liveTop !== undefined) {
        return;
      }

      const rect = image.getBoundingClientRect();
      image.dataset.liveTop = String(Math.round(rect.top));

      if (rect.top <= firstScreen) {
        return;
      }

      const src = image.getAttribute("src");
      const srcset = image.getAttribute("srcset");

      if (!src && !srcset) {
        return;
      }

      if (rect.height > 0) {
        image.style.setProperty("min-height", `${Math.round(rect.height)}px`);
      }

      image.dataset.liveDeferred = "true";

      if (src) {
        image.dataset.liveSrc = src;
        image.removeAttribute("src");
      }

      if (srcset) {
        image.dataset.liveSrcset = srcset;
        image.removeAttribute("srcset");
      }
    });

    frameDocument.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
      if (video.dataset.liveTop !== undefined) {
        return;
      }

      const rect = video.getBoundingClientRect();
      video.dataset.liveTop = String(Math.round(rect.top));
      video.dataset.liveAutoplay =
        video.autoplay || video.dataset.autoplay === "true" ? "true" : "false";
      video.preload = "none";

      if (rect.top <= firstScreen) {
        return;
      }

      // These previews start their videos from their own scripts rather than an
      // autoplay attribute, so pausing is not enough - the fetch has already
      // begun. Park the source the same way images are parked.
      const source = video.getAttribute("src");

      if (source) {
        video.dataset.liveSrc = source;
        video.removeAttribute("src");
      }

      const childSources = Array.from(video.querySelectorAll("source"))
        .map((child) => child.getAttribute("src") ?? "")
        .join("|");

      if (childSources) {
        video.dataset.liveSources = childSources;
        video.querySelectorAll("source").forEach((child) => child.removeAttribute("src"));
      }

      if (source || childSources) {
        video.dataset.liveDeferred = "true";
        video.autoplay = false;
        video.pause();
        video.load();
      }
    });

    if (documentElement.dataset.productLiveFrameBridge !== "true") {
      documentElement.dataset.productLiveFrameBridge = "true";

      const scriptElement = frameDocument.querySelector<HTMLScriptElement>(
        'script[src$="/preview-passive.js"]',
      );
      const previewRoot = scriptElement
        ? new URL(scriptElement.src, frameWindow.location.href).pathname.replace(
            /\/preview-passive\.js$/,
            "",
          )
        : new URL(frameWindow.location.href).pathname
            .replace(/\/index\.html$/, "")
            .replace(/\/[^/]+\.html$/, "");

      const normalizePreviewUrl = (rawUrl: string) => {
        let url: URL;

        try {
          url = new URL(rawUrl, frameWindow.location.href);
        } catch {
          return null;
        }

        if (
          url.protocol === "mailto:" ||
          url.protocol === "tel:" ||
          url.origin !== frameWindow.location.origin
        ) {
          return null;
        }

        const doubledPreviewRoot = `${previewRoot}${previewRoot}`;

        if (
          url.pathname === doubledPreviewRoot ||
          url.pathname.startsWith(`${doubledPreviewRoot}/`)
        ) {
          url.pathname = url.pathname.slice(previewRoot.length);
        }

        if (url.pathname === "/") {
          url.pathname = `${previewRoot}/index.html`;
        } else if (
          url.pathname === previewRoot ||
          url.pathname === `${previewRoot}/`
        ) {
          url.pathname = `${previewRoot}/index.html`;
        } else if (url.pathname.startsWith(`${previewRoot}/`)) {
          if (
            previewRoot === "/velora-fashion-preview/site" &&
            /^\/velora-fashion-preview\/site\/produkte\/[^/]+$/.test(url.pathname)
          ) {
            url.pathname = `${previewRoot}/produkte.html`;
          } else if (!PREVIEW_ASSET_PATTERN.test(url.pathname)) {
            url.pathname = `${url.pathname.replace(/\/$/, "")}.html`;
          }
        } else if (!PREVIEW_ASSET_PATTERN.test(url.pathname)) {
          url.pathname = `${previewRoot}${url.pathname}`;

          if (url.pathname === `${previewRoot}/`) {
            url.pathname = `${previewRoot}/index.html`;
          } else if (!url.pathname.endsWith(".html")) {
            url.pathname = `${url.pathname.replace(/\/$/, "")}.html`;
          }
        } else {
          return null;
        }

        return url;
      };

      const getCurrentPreviewUrl = () =>
        normalizePreviewUrl(frameWindow.location.href) ??
        new URL(frameWindow.location.href);

      const scrollParentToFrameTarget = (hash: string) => {
        const frameElement = bridgedFrameWindow.frameElement;

        let target: HTMLElement | null = null;

        if (hash && hash !== "#") {
          const targetId = decodeURIComponent(hash.slice(1));
          target =
            frameDocument.getElementById(targetId) ??
            (frameDocument.querySelector(`[name="${CSS.escape(targetId)}"]`) as HTMLElement | null);
        }

        if (containedRef.current) {
          if (target) {
            target.scrollIntoView({ behavior: "auto", block: "start" });
          } else {
            frameWindow.scrollTo({ top: 0, behavior: "auto" });
          }

          return true;
        }

        if (!frameElement) {
          return false;
        }

        const frameTop =
          window.scrollY +
          frameElement.getBoundingClientRect().top +
          (target ? target.getBoundingClientRect().top : 0) -
          24;

        window.scrollTo({ top: Math.max(0, frameTop), behavior: "auto" });

        return true;
      };

      const handleFrameClick = (event: MouseEvent) => {
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }

        const target = event.target;

        if (!(target instanceof bridgedFrameWindow.Element)) {
          return;
        }

        const link = target.closest("a[href]");

        if (
          !(link instanceof bridgedFrameWindow.HTMLAnchorElement) ||
          link.target === "_blank" ||
          link.hasAttribute("download")
        ) {
          return;
        }

        const rawHref = link.getAttribute("href");

        if (!rawHref || rawHref === "#") {
          return;
        }

        const previewUrl = normalizePreviewUrl(rawHref);

        if (!previewUrl) {
          return;
        }

        event.preventDefault();

        const currentUrl = getCurrentPreviewUrl();
        const isSamePage =
          previewUrl.pathname === currentUrl.pathname &&
          previewUrl.search === currentUrl.search;

        if (previewUrl.hash && isSamePage) {
          frameWindow.history.pushState(null, "", previewUrl.hash);
          scrollParentToFrameTarget(previewUrl.hash);
          return;
        }

        pendingNavigationRef.current = true;
        frameWindow.location.href = previewUrl.href;
      };

      const handleFrameSubmit = (event: SubmitEvent) => {
        const form = event.target;

        if (!(form instanceof bridgedFrameWindow.HTMLFormElement)) {
          return;
        }

        const previewUrl = normalizePreviewUrl(
          form.getAttribute("action") || frameWindow.location.href,
        );

        if (!previewUrl) {
          return;
        }

        event.preventDefault();

        const currentUrl = getCurrentPreviewUrl();
        const isSamePage =
          previewUrl.pathname === currentUrl.pathname &&
          previewUrl.search === currentUrl.search;

        if (previewUrl.hash && isSamePage) {
          scrollParentToFrameTarget(previewUrl.hash);
          return;
        }

        pendingNavigationRef.current = true;
        frameWindow.location.href = previewUrl.href;
      };

      frameDocument.addEventListener("click", handleFrameClick, true);
      frameDocument.addEventListener("submit", handleFrameSubmit, true);

    }

    if (contained) {
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = frameDocument;
      return;
    }

    if (observedDocumentRef.current !== frameDocument) {
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();

      resizeObserverRef.current = new ResizeObserver(scheduleMeasure);
      resizeObserverRef.current.observe(body);

      mutationObserverRef.current = new MutationObserver(scheduleMeasure);
      mutationObserverRef.current.observe(body, {
        childList: true,
        subtree: true,
      });

      observedDocumentRef.current = frameDocument;
    }

    measureFrame();
    syncFrameMedia();
  }, [contained, getFrameDocument, measureFrame, scheduleMeasure, syncFrameMedia]);

  useEffect(() => {
    const iframe = iframeRef.current;
    const root = document.documentElement;
    const body = document.body;
    const previousRootScrollBehavior = root.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;
    const delayedPrepareTimers: number[] = [];

    const clearDelayedPrepares = () => {
      delayedPrepareTimers.forEach((timer) => window.clearTimeout(timer));
      delayedPrepareTimers.length = 0;
    };

    const schedulePrepare = (delay: number) => {
      delayedPrepareTimers.push(window.setTimeout(prepareFrame, delay));
    };

    root.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    if (!iframe) {
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
      return;
    }

    const coarsePointerQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const applyContainment = () => {
      const nextContained = coarsePointerQuery.matches;
      containedRef.current = nextContained;
      setContained(nextContained);
    };

    applyContainment();

    const mediaQueryListener = { handleEvent: applyContainment };
    const legacyCoarsePointerQuery = coarsePointerQuery as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    if (coarsePointerQuery.addEventListener) {
      coarsePointerQuery.addEventListener("change", mediaQueryListener);
    } else {
      legacyCoarsePointerQuery.addListener?.(applyContainment);
    }

    const handleLoad = () => {
      clearDelayedPrepares();
      observedDocumentRef.current = null;
      frameLoadedRef.current = true;
      appliedHeightRef.current = 0;
      growthStepsRef.current = 0;
      heightLockedRef.current = false;

      if (pendingNavigationRef.current) {
        pendingNavigationRef.current = false;

        if (!contained) {
          window.scrollTo({
            top: Math.max(0, window.scrollY + iframe.getBoundingClientRect().top - 24),
            behavior: "auto",
          });
        }
      }

      prepareFrame();

      if (!contained) {
        schedulePrepare(350);
        schedulePrepare(1200);
      }
    
    };

    // Mobile browsers fire resize whenever the URL bar slides away, i.e. during
    // scrolling. Re-running the full prepare pass there walks the whole preview
    // document and forces a layout mid-gesture, which is what makes scrolling
    // stutter on a phone. Only a real width change needs that work.
    let lastWidth = window.innerWidth;
    let resizeTimer: number | null = null;

    const handleResize = () => {
      if (window.innerWidth === lastWidth) {
        return;
      }

      lastWidth = window.innerWidth;

      if (resizeTimer !== null) {
        window.clearTimeout(resizeTimer);
      }

      resizeTimer = window.setTimeout(() => {
        resizeTimer = null;
        heightLockedRef.current = false;
        growthStepsRef.current = 0;
        prepareFrame();
      }, RESIZE_DEBOUNCE);
    };

    iframe.addEventListener("load", handleLoad);
    if (!contained) {
      window.addEventListener("scroll", scheduleSyncMedia, { passive: true });
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    prepareFrame();
    const initialFrame = window.requestAnimationFrame(prepareFrame);

    if (!contained) {
      schedulePrepare(120);
      schedulePrepare(3000);
    }
  

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", scheduleSyncMedia);
      window.removeEventListener("resize", handleResize);

      if (syncMediaFrameRef.current !== null) {
        window.cancelAnimationFrame(syncMediaFrameRef.current);
        syncMediaFrameRef.current = null;
      }
      window.removeEventListener("orientationchange", handleResize);
      window.cancelAnimationFrame(initialFrame);

      if (measureFrameRef.current !== null) {
        window.clearTimeout(measureFrameRef.current);
        measureFrameRef.current = null;
      }

      clearDelayedPrepares();

      if (coarsePointerQuery.removeEventListener) {
        coarsePointerQuery.removeEventListener("change", mediaQueryListener);
      } else {
        legacyCoarsePointerQuery.removeListener?.(applyContainment);
      }

      if (resizeTimer !== null) {
        window.clearTimeout(resizeTimer);
      }

      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = null;
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    };
  }, [contained, prepareFrame, scheduleMeasure, scheduleSyncMedia]);

  // iOS Safari keeps a scroll gesture that starts over an iframe inside that
  // frame, so the embedding page never moves. The shield is a plain element of
  // THIS document covering the frame, so a swipe is an ordinary page scroll
  // with native momentum. Taps are forwarded into the frame by hand.
  useEffect(() => {
    const shield = shieldRef.current;

    if (!shield) {
      return;
    }

    let touchStart: { x: number; y: number; time: number } | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStart = null;
        return;
      }

      const touch = event.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const start = touchStart;
      touchStart = null;

      if (!start || event.changedTouches.length !== 1) {
        return;
      }

      const touch = event.changedTouches[0];

      if (
        Math.abs(touch.clientX - start.x) > TAP_MOVE_TOLERANCE ||
        Math.abs(touch.clientY - start.y) > TAP_MOVE_TOLERANCE ||
        Date.now() - start.time > TAP_MAX_DURATION
      ) {
        return;
      }

      const iframe = iframeRef.current;
      const frame = getFrameDocument();

      if (!iframe || !frame) {
        return;
      }

      const rect = iframe.getBoundingClientRect();
      const bridgedFrameWindow = frame.frameWindow as FrameWindowWithBridge;
      const frameX = touch.clientX - rect.left;
      const frameY = touch.clientY - rect.top;
      const target = frame.frameDocument.elementFromPoint(frameX, frameY);

      if (!(target instanceof bridgedFrameWindow.HTMLElement)) {
        return;
      }

      target.dispatchEvent(
        new bridgedFrameWindow.MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: bridgedFrameWindow,
          clientX: frameX,
          clientY: frameY,
        }),
      );
    };

    shield.addEventListener("touchstart", handleTouchStart, { passive: true });
    shield.addEventListener("touchend", handleTouchEnd, { passive: true });
    shield.addEventListener("touchcancel", handleTouchStart, { passive: true });

    return () => {
      shield.removeEventListener("touchstart", handleTouchStart);
      shield.removeEventListener("touchend", handleTouchEnd);
      shield.removeEventListener("touchcancel", handleTouchStart);
    };
  }, [getFrameDocument]);

  return (
    <div className="product-live-frame-wrap">
      <iframe
        ref={iframeRef}
        className="product-live-iframe"
        src={src}
        title={title}
        style={{ height: contained ? "100%" : height }}
      />
      <div className="product-live-touch-shield" ref={shieldRef} aria-hidden="true" />
    </div>
  );
}
