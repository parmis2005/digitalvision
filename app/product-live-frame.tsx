"use client";

import {
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

const INITIAL_PREVIEW_HEIGHT = 9000;
const CROSS_ORIGIN_PREVIEW_HEIGHT = 9000;
const MIN_PREVIEW_HEIGHT = 720;
const HEIGHT_EPSILON = 8;
const MEASURE_THROTTLE = 180;
const RESIZE_DEBOUNCE = 200;
const PREPARE_DELAYS = [120, 350, 1200, 3000] as const;
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
  const pendingNavigationRef = useRef(false);
  const [height, setHeight] = useState(`${INITIAL_PREVIEW_HEIGHT}px`);

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
      if (appliedHeightRef.current !== CROSS_ORIGIN_PREVIEW_HEIGHT) {
        appliedHeightRef.current = CROSS_ORIGIN_PREVIEW_HEIGHT;
        setHeight(`${CROSS_ORIGIN_PREVIEW_HEIGHT}px`);
      }

      return null;
    }
  }, []);

  const getStableViewportHeight = useCallback(() => {
    const nextViewport = { width: window.innerWidth, height: window.innerHeight };
    const currentViewport = viewportRef.current;

    if (!currentViewport || currentViewport.width !== nextViewport.width) {
      viewportRef.current = nextViewport;
    }

    return viewportRef.current?.height ?? nextViewport.height;
  }, []);

  const measureFrame = useCallback(() => {
    const frame = getFrameDocument();

    if (!frame) {
      return;
    }

    const { documentElement, body } = frame.frameDocument;
    const nextHeight = Math.ceil(
      Math.max(
        documentElement.scrollHeight,
        documentElement.offsetHeight,
        body.scrollHeight,
        body.offsetHeight,
        getStableViewportHeight(),
        MIN_PREVIEW_HEIGHT,
      ),
    );

    if (Math.abs(nextHeight - appliedHeightRef.current) < HEIGHT_EPSILON) {
      return;
    }

    appliedHeightRef.current = nextHeight;
    setHeight(`${nextHeight}px`);
  }, [getFrameDocument, getStableViewportHeight]);

  const scheduleMeasure = useCallback(() => {
    if (measureFrameRef.current !== null) {
      return;
    }

    const sinceLast = Date.now() - lastMeasureRef.current;
    const delay = Math.max(0, MEASURE_THROTTLE - sinceLast);

    measureFrameRef.current = window.setTimeout(() => {
      measureFrameRef.current = null;
      lastMeasureRef.current = Date.now();
      measureFrame();
    }, delay);
  }, [measureFrame]);

  const prepareFrame = useCallback(() => {
    const frame = getFrameDocument();

    if (!frame) {
      return;
    }

    const { frameWindow, frameDocument } = frame;
    const documentElement = frameDocument.documentElement;
    const body = frameDocument.body;
    const bridgedFrameWindow = frameWindow as FrameWindowWithBridge;

    const setInlineStyle = (element: HTMLElement, property: string, value: string) => {
      if (element.style.getPropertyValue(property) !== value) {
        element.style.setProperty(property, value);
      }
    };

    setInlineStyle(
      documentElement,
      "--embedded-viewport-height",
      `${getStableViewportHeight()}px`,
    );
    setInlineStyle(documentElement, "height", "auto");
    setInlineStyle(documentElement, "min-height", "0");
    setInlineStyle(documentElement, "overflow", "hidden");
    setInlineStyle(body, "height", "auto");
    setInlineStyle(body, "min-height", "0");
    setInlineStyle(body, "overflow", "hidden");

    const style =
      frameDocument.getElementById("product-live-frame-style") ??
      frameDocument.createElement("style");

    style.id = "product-live-frame-style";

    if (style.textContent !== FRAME_STYLE_TEXT) {
      style.textContent = FRAME_STYLE_TEXT;
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

        if (!frameElement) {
          return false;
        }

        let target: HTMLElement | null = null;

        if (hash && hash !== "#") {
          const targetId = decodeURIComponent(hash.slice(1));
          target =
            frameDocument.getElementById(targetId) ??
            (frameDocument.querySelector(`[name="${CSS.escape(targetId)}"]`) as HTMLElement | null);
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

    if (observedDocumentRef.current !== frameDocument) {
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();

      resizeObserverRef.current = new ResizeObserver(scheduleMeasure);
      resizeObserverRef.current.observe(body);
      resizeObserverRef.current.observe(documentElement);

      mutationObserverRef.current = new MutationObserver(scheduleMeasure);
      mutationObserverRef.current.observe(body, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      observedDocumentRef.current = frameDocument;

      frameDocument.fonts?.ready.then(scheduleMeasure).catch(() => undefined);
    }

    measureFrame();
  }, [getFrameDocument, getStableViewportHeight, measureFrame, scheduleMeasure]);

  const forwardClickToFrame = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      const iframe = iframeRef.current;
      const frame = getFrameDocument();

      if (!iframe || !frame) {
        return;
      }

      const rect = iframe.getBoundingClientRect();
      const frameX = event.clientX - rect.left;
      const frameY = event.clientY - rect.top;

      if (frameX < 0 || frameY < 0 || frameX > rect.width || frameY > rect.height) {
        return;
      }

      const bridgedFrameWindow = frame.frameWindow as FrameWindowWithBridge;
      const target = frame.frameDocument.elementFromPoint(frameX, frameY);

      if (!(target instanceof bridgedFrameWindow.HTMLElement)) {
        return;
      }

      event.preventDefault();

      target.dispatchEvent(
        new bridgedFrameWindow.MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: bridgedFrameWindow,
          clientX: frameX,
          clientY: frameY,
        }),
      );
    },
    [getFrameDocument],
  );

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

    const handleLoad = () => {
      clearDelayedPrepares();
      observedDocumentRef.current = null;
      prepareFrame();

      if (pendingNavigationRef.current) {
        pendingNavigationRef.current = false;
        iframe.scrollIntoView({ behavior: "auto", block: "start" });
      }

      PREPARE_DELAYS.forEach(schedulePrepare);
    };

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
        viewportRef.current = null;
        prepareFrame();
      }, RESIZE_DEBOUNCE);
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    prepareFrame();
    const initialFrame = window.requestAnimationFrame(prepareFrame);
    PREPARE_DELAYS.forEach(schedulePrepare);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.cancelAnimationFrame(initialFrame);

      if (measureFrameRef.current !== null) {
        window.clearTimeout(measureFrameRef.current);
        measureFrameRef.current = null;
      }

      clearDelayedPrepares();

      if (resizeTimer !== null) {
        window.clearTimeout(resizeTimer);
      }

      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = null;
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    };
  }, [prepareFrame]);

  return (
    <div className="product-live-frame-wrap">
      <iframe
        ref={iframeRef}
        className="product-live-iframe"
        src={src}
        title={title}
        style={{ height }}
      />
      <div
        className="product-live-scroll-shield"
        aria-hidden="true"
        onClick={forwardClickToFrame}
      />
    </div>
  );
}
