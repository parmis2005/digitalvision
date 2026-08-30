"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ProductLiveFrameProps = {
  src: string;
  title: string;
};

type FrameWindowWithBridge = Window & {
  Element: typeof Element;
  HTMLAnchorElement: typeof HTMLAnchorElement;
  HTMLFormElement: typeof HTMLFormElement;
  frameElement: HTMLIFrameElement | null;
};

const CROSS_ORIGIN_PREVIEW_HEIGHT = "3600px";
const MOBILE_PREVIEW_QUERY = "(max-width: 760px)";
const PREVIEW_ASSET_PATTERN =
  /\.(?:avif|css|gif|html?|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

export function ProductLiveFrame({ src, title }: ProductLiveFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const observedDocumentRef = useRef<Document | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const usesContainedMobileFrameRef = useRef(false);
  const [usesContainedMobileFrame, setUsesContainedMobileFrame] = useState(false);
  const [height, setHeight] = useState("100dvh");

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_PREVIEW_QUERY);

    const syncMobileFrameMode = () => {
      usesContainedMobileFrameRef.current = mediaQuery.matches;
      setUsesContainedMobileFrame(mediaQuery.matches);
    };

    syncMobileFrameMode();
    mediaQuery.addEventListener("change", syncMobileFrameMode);

    return () => {
      mediaQuery.removeEventListener("change", syncMobileFrameMode);
    };
  }, []);

  const prepareFrame = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    let frameWindow: Window | null = null;
    let frameDocument: Document | null = null;

    try {
      frameWindow = iframe.contentWindow;
      frameDocument = iframe.contentDocument;
    } catch {
      setHeight(CROSS_ORIGIN_PREVIEW_HEIGHT);
      return;
    }

    const documentElement = frameDocument?.documentElement;
    const body = frameDocument?.body;

    if (!frameWindow || !frameDocument || !documentElement || !body) {
      return;
    }

    const bridgedFrameWindow = frameWindow as FrameWindowWithBridge;
    const viewportHeight = window.innerHeight;
    const shouldContainMobileFrame = window.matchMedia(MOBILE_PREVIEW_QUERY).matches;

    usesContainedMobileFrameRef.current = shouldContainMobileFrame;
    if (shouldContainMobileFrame !== usesContainedMobileFrame) {
      setUsesContainedMobileFrame(shouldContainMobileFrame);
    }

    documentElement.style.setProperty("--embedded-viewport-height", `${viewportHeight}px`);

    if (shouldContainMobileFrame) {
      documentElement.style.height = "auto";
      documentElement.style.minHeight = "100%";
      documentElement.style.overflowX = "hidden";
      documentElement.style.overflowY = "auto";
      body.style.height = "auto";
      body.style.minHeight = "100%";
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";
    } else {
      documentElement.style.height = "auto";
      documentElement.style.minHeight = "0";
      documentElement.style.overflow = "hidden";
      body.style.height = "auto";
      body.style.minHeight = "0";
      body.style.overflow = "hidden";
    }

    const style =
      frameDocument.getElementById("product-live-frame-style") ??
      frameDocument.createElement("style");

    style.id = "product-live-frame-style";
    style.textContent = shouldContainMobileFrame
      ? `
        html,
        body {
          height: auto !important;
          min-height: 100% !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          scroll-behavior: auto !important;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
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
      `
      : `
        html,
        body {
          height: auto !important;
          min-height: 0 !important;
          overflow: hidden !important;
          scroll-behavior: auto !important;
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

    if (!style.parentElement) {
      frameDocument.head.appendChild(style);
    }

    const setInlineStyle = (element: HTMLElement, property: string, value: string) => {
      if (element.style.getPropertyValue(property) !== value) {
        element.style.setProperty(property, value);
      }
    };

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

      const getParentDocument = () => bridgedFrameWindow.parent.document;

      const getParentScroller = () => {
        const parentDocument = getParentDocument();
        return parentDocument.scrollingElement ?? parentDocument.documentElement;
      };

      const setParentScroll = (top: number, left?: number) => {
        const scroller = getParentScroller();
        const parentDocument = getParentDocument();
        scroller.scrollTop = Math.max(0, top);

        if (typeof left === "number") {
          scroller.scrollLeft = Math.max(0, left);
        }

        parentDocument.body.scrollTop = scroller.scrollTop;
        parentDocument.body.scrollLeft = scroller.scrollLeft;
      };

      const moveParentScroll = (deltaX: number, deltaY: number) => {
        const scroller = getParentScroller();
        setParentScroll(scroller.scrollTop + deltaY, scroller.scrollLeft + deltaX);
      };

      const moveFrameScroll = (deltaX: number, deltaY: number) => {
        const frameScrollElement = frameDocument.scrollingElement ?? documentElement;
        const maxFrameScrollTop = Math.max(
          0,
          frameScrollElement.scrollHeight - frameWindow.innerHeight,
        );
        const currentFrameScrollTop = frameWindow.scrollY;
        const nextFrameScrollTop = Math.min(
          maxFrameScrollTop,
          Math.max(0, currentFrameScrollTop + deltaY),
        );
        const usedDeltaY = nextFrameScrollTop - currentFrameScrollTop;
        const remainingDeltaY = deltaY - usedDeltaY;

        frameScrollElement.scrollTop = nextFrameScrollTop;
        documentElement.scrollTop = nextFrameScrollTop;
        body.scrollTop = nextFrameScrollTop;
        frameWindow.scrollTo({
          left: Math.max(0, frameWindow.scrollX + deltaX),
          top: nextFrameScrollTop,
          behavior: "auto",
        });

        if (Math.abs(remainingDeltaY) > 0.5) {
          moveParentScroll(0, remainingDeltaY);
        }
      };

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

        const targetTop = Math.max(0, frameTop);
        setParentScroll(targetTop);

        return true;
      };

      const scrollFrameToTarget = (hash: string) => {
        if (!hash || hash === "#") {
          frameWindow.scrollTo({ top: 0, behavior: "auto" });
          return true;
        }

        const targetId = decodeURIComponent(hash.slice(1));
        const target =
          frameDocument.getElementById(targetId) ??
          (frameDocument.querySelector(`[name="${CSS.escape(targetId)}"]`) as HTMLElement | null);

        if (!target) {
          return false;
        }

        const targetTop = Math.max(0, frameWindow.scrollY + target.getBoundingClientRect().top - 20);
        frameWindow.scrollTo({ top: targetTop, behavior: "auto" });

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

        if (!rawHref) {
          return;
        }

        const previewUrl = normalizePreviewUrl(rawHref);

        if (!previewUrl) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const currentUrl = getCurrentPreviewUrl();
        const isSamePage =
          previewUrl.pathname === currentUrl.pathname &&
          previewUrl.search === currentUrl.search;

        if (previewUrl.hash && isSamePage) {
          frameWindow.history.pushState(null, "", previewUrl.hash);
          if (usesContainedMobileFrameRef.current) {
            scrollFrameToTarget(previewUrl.hash);
          } else {
            scrollParentToFrameTarget(previewUrl.hash);
          }
          return;
        }

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
        event.stopPropagation();
        event.stopImmediatePropagation();

        const currentUrl = getCurrentPreviewUrl();
        const isSamePage =
          previewUrl.pathname === currentUrl.pathname &&
          previewUrl.search === currentUrl.search;

        if (previewUrl.hash && isSamePage) {
          if (usesContainedMobileFrameRef.current) {
            scrollFrameToTarget(previewUrl.hash);
          } else {
            scrollParentToFrameTarget(previewUrl.hash);
          }
          return;
        }

        frameWindow.location.href = previewUrl.href;
      };

      const handleFrameWheel = (event: WheelEvent) => {
        if (event.ctrlKey) {
          return;
        }

        if (usesContainedMobileFrameRef.current) {
          moveFrameScroll(event.deltaX, event.deltaY);
          event.preventDefault();
          return;
        }

        moveParentScroll(event.deltaX, event.deltaY);
        event.preventDefault();
      };

      let lastTouchY: number | null = null;

      const handleTouchStart = (event: TouchEvent) => {
        lastTouchY = event.touches.length === 1 ? event.touches[0].clientY : null;
      };

      const handleTouchMove = (event: TouchEvent) => {
        if (lastTouchY === null || event.touches.length !== 1) {
          return;
        }

        const nextTouchY = event.touches[0].clientY;
        const deltaY = lastTouchY - nextTouchY;

        if (usesContainedMobileFrameRef.current) {
          moveFrameScroll(0, deltaY);
        } else {
          moveParentScroll(0, deltaY);
        }

        lastTouchY = nextTouchY;
        event.preventDefault();
      };

      const resetTouch = () => {
        lastTouchY = null;
      };

      frameDocument.addEventListener("click", handleFrameClick, true);
      frameDocument.addEventListener("submit", handleFrameSubmit, true);
      frameWindow.addEventListener("wheel", handleFrameWheel, { passive: false });
      frameWindow.addEventListener("touchstart", handleTouchStart, { passive: true });
      frameWindow.addEventListener("touchmove", handleTouchMove, { passive: false });
      frameWindow.addEventListener("touchend", resetTouch, { passive: true });
      frameWindow.addEventListener("touchcancel", resetTouch, { passive: true });

    }

    if (shouldContainMobileFrame) {
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = null;
      setHeight(`${Math.max(560, viewportHeight)}px`);
      return;
    }

    if (observedDocumentRef.current !== frameDocument) {
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();

      const scheduleMeasure = () => {
        window.requestAnimationFrame(prepareFrame);
      };

      resizeObserverRef.current = new ResizeObserver(scheduleMeasure);
      resizeObserverRef.current.observe(documentElement);
      resizeObserverRef.current.observe(body);

      mutationObserverRef.current = new MutationObserver(scheduleMeasure);
      mutationObserverRef.current.observe(body, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      observedDocumentRef.current = frameDocument;
    }

    const nextHeight = Math.max(
      documentElement.scrollHeight,
      documentElement.offsetHeight,
      body.scrollHeight,
      body.offsetHeight,
      viewportHeight,
    );

    setHeight((currentHeight) => {
      const heightValue = `${nextHeight}px`;
      return currentHeight === heightValue ? currentHeight : heightValue;
    });
  }, [usesContainedMobileFrame]);

  useEffect(() => {
    const iframe = iframeRef.current;
    const root = document.documentElement;
    const body = document.body;
    const previousRootScrollBehavior = root.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    if (!iframe) {
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
      return;
    }

    const handleLoad = () => {
      prepareFrame();
      window.setTimeout(prepareFrame, 350);
      window.setTimeout(prepareFrame, 1200);
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("resize", prepareFrame);

    prepareFrame();
    const initialFrame = window.requestAnimationFrame(prepareFrame);
    const initialTimer = window.setTimeout(prepareFrame, 120);
    const interval = window.setInterval(prepareFrame, 1800);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", prepareFrame);
      window.cancelAnimationFrame(initialFrame);
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = null;
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    };
  }, [prepareFrame]);

  return (
    <iframe
      ref={iframeRef}
      className={`product-live-iframe${
        usesContainedMobileFrame ? " product-live-iframe-contained" : ""
      }`}
      src={src}
      title={title}
      scrolling={usesContainedMobileFrame ? "auto" : "no"}
      style={{ height }}
    />
  );
}
