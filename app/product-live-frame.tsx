"use client";

import { useCallback, useEffect, useRef } from "react";

type ProductLiveFrameProps = { src: string; title: string };

type FrameWindowWithBridge = Window & {
  Element: typeof Element;
  HTMLAnchorElement: typeof HTMLAnchorElement;
  HTMLFormElement: typeof HTMLFormElement;
};

const PREVIEW_ASSET_PATTERN =
  /\.(?:avif|css|gif|html?|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

const FRAME_STYLE_TEXT = `
  html { height: auto !important; overflow-y: scroll !important; }
  body { height: auto !important; overflow-y: visible !important; }
  .bg-fixed { background-attachment: scroll !important; }
`;

export function ProductLiveFrame({ src, title }: ProductLiveFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingNavigationRef = useRef(false);

  const prepareFrame = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    let frameWindow: Window;
    let frameDocument: Document;

    try {
      if (!iframe.contentWindow || !iframe.contentDocument?.body) return;
      frameWindow = iframe.contentWindow;
      frameDocument = iframe.contentDocument;
    } catch {
      return;
    }

    const documentElement = frameDocument.documentElement;
    const body = frameDocument.body;
    const bridgedFrameWindow = frameWindow as FrameWindowWithBridge;

    documentElement.style.height = "auto";
    documentElement.style.overflowY = "scroll";
    body.style.height = "auto";
    body.style.overflowY = "visible";

    const style =
      frameDocument.getElementById("product-live-frame-style") ??
      frameDocument.createElement("style");
    style.id = "product-live-frame-style";
    style.textContent = FRAME_STYLE_TEXT;
    if (!style.parentElement) frameDocument.head.appendChild(style);

    frameDocument.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
      video.autoplay = false;
      video.preload = "metadata";
      video.pause();
    });

    if (documentElement.dataset.productLiveFrameBridge === "true") return;
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
      ) return null;

      const doubledPreviewRoot = `${previewRoot}${previewRoot}`;
      if (
        url.pathname === doubledPreviewRoot ||
        url.pathname.startsWith(`${doubledPreviewRoot}/`)
      ) url.pathname = url.pathname.slice(previewRoot.length);

      if (url.pathname === "/") {
        url.pathname = `${previewRoot}/index.html`;
      } else if (url.pathname === previewRoot || url.pathname === `${previewRoot}/`) {
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

    const scrollToFrameTarget = (hash: string) => {
      if (!hash || hash === "#") {
        frameWindow.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const targetId = decodeURIComponent(hash.slice(1));
      const target =
        frameDocument.getElementById(targetId) ??
        (frameDocument.querySelector(`[name="${CSS.escape(targetId)}"]`) as HTMLElement | null);
      target?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const handleFrameClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey || event.button !== 0
      ) return;

      const target = event.target;
      if (!(target instanceof bridgedFrameWindow.Element)) return;
      const link = target.closest("a[href]");
      if (
        !(link instanceof bridgedFrameWindow.HTMLAnchorElement) ||
        link.target === "_blank" || link.hasAttribute("download")
      ) return;

      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref === "#") return;
      const previewUrl = normalizePreviewUrl(rawHref);
      if (!previewUrl) return;

      event.preventDefault();
      const currentUrl = normalizePreviewUrl(frameWindow.location.href);
      const isSamePage =
        previewUrl.pathname === currentUrl?.pathname &&
        previewUrl.search === currentUrl.search;

      if (previewUrl.hash && isSamePage) {
        frameWindow.history.pushState(null, "", previewUrl.hash);
        scrollToFrameTarget(previewUrl.hash);
        return;
      }

      pendingNavigationRef.current = true;
      frameWindow.location.href = previewUrl.href;
    };

    const handleFrameSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof bridgedFrameWindow.HTMLFormElement)) return;
      const previewUrl = normalizePreviewUrl(
        form.getAttribute("action") || frameWindow.location.href,
      );
      if (!previewUrl) return;

      event.preventDefault();
      pendingNavigationRef.current = true;
      frameWindow.location.href = previewUrl.href;
    };

    frameDocument.addEventListener("click", handleFrameClick, true);
    frameDocument.addEventListener("submit", handleFrameSubmit, true);
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      prepareFrame();
      if (pendingNavigationRef.current) {
        pendingNavigationRef.current = false;
        iframe.scrollIntoView({ behavior: "auto", block: "start" });
      }
    };

    iframe.addEventListener("load", handleLoad);
    try {
      if (
        iframe.contentDocument?.readyState === "complete" &&
        iframe.contentWindow?.location.href !== "about:blank"
      ) handleLoad();
    } catch {
      // Cross-origin previews remain usable with native iframe scrolling.
    }

    return () => iframe.removeEventListener("load", handleLoad);
  }, [prepareFrame]);

  return (
    <div className="product-live-frame-wrap">
      <iframe
        ref={iframeRef}
        className="product-live-iframe"
        src={src}
        title={title}
        loading="eager"
        sandbox="allow-same-origin allow-scripts"
        scrolling="yes"
        style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      />
    </div>
  );
}
