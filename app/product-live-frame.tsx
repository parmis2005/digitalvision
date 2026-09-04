"use client";

import { useCallback, useEffect, useRef } from "react";

type ProductLiveFrameProps = {
  src: string;
  title: string;
};

type FrameWindowWithBridge = Window & {
  Element: typeof Element;
  HTMLAnchorElement: typeof HTMLAnchorElement;
  HTMLElement: typeof HTMLElement;
  HTMLFormElement: typeof HTMLFormElement;
  frameElement: HTMLIFrameElement | null;
};

const RESIZE_DEBOUNCE = 200;
const PREVIEW_ASSET_PATTERN =
  /\.(?:avif|css|gif|html?|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

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
  const pendingNavigationRef = useRef(false);
  const containedRef = useRef(false);

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
      return null;
    }
  }, []);

  const prepareFrame = useCallback(() => {
    const frame = getFrameDocument();

    if (!frame) {
      return;
    }

    const { frameWindow, frameDocument } = frame;
    const documentElement = frameDocument.documentElement;
    const body = frameDocument.body;
    const bridgedFrameWindow = frameWindow as FrameWindowWithBridge;
    containedRef.current = true;

    const setInlineStyle = (element: HTMLElement, property: string, value: string) => {
      if (element.style.getPropertyValue(property) !== value) {
        element.style.setProperty(property, value);
      }
    };

    const viewportHeight = iframeRef.current?.clientHeight ?? window.innerHeight;

    setInlineStyle(documentElement, "--embedded-viewport-height", `${viewportHeight}px`);
    setInlineStyle(documentElement, "height", "auto");
    setInlineStyle(documentElement, "min-height", "100%");
    setInlineStyle(documentElement, "overflow", "auto");
    setInlineStyle(body, "height", "auto");
    setInlineStyle(body, "min-height", "100%");
    setInlineStyle(body, "overflow", "auto");

    const style =
      frameDocument.getElementById("product-live-frame-style") ??
      frameDocument.createElement("style");

    style.id = "product-live-frame-style";

    const styleText = CONTAINED_STYLE_TEXT;

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

  }, [getFrameDocument]);

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

    containedRef.current = true;

    const handleLoad = () => {
      clearDelayedPrepares();

      if (pendingNavigationRef.current) {
        pendingNavigationRef.current = false;

        iframe.scrollIntoView({ behavior: "auto", block: "start" });
      }

      prepareFrame();
      schedulePrepare(350);
      schedulePrepare(1200);
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
        prepareFrame();
      }, RESIZE_DEBOUNCE);
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    prepareFrame();
    const initialFrame = window.requestAnimationFrame(prepareFrame);
    schedulePrepare(120);
    schedulePrepare(3000);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);

      window.removeEventListener("orientationchange", handleResize);
      window.cancelAnimationFrame(initialFrame);

      clearDelayedPrepares();

      if (resizeTimer !== null) {
        window.clearTimeout(resizeTimer);
      }

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
      />
    </div>
  );
}
