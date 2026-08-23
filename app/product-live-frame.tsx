"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ProductLiveFrameProps = {
  src: string;
  title: string;
};

export function ProductLiveFrame({ src, title }: ProductLiveFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState("100dvh");

  const prepareFrame = useCallback(() => {
    const iframe = iframeRef.current;
    const frameWindow = iframe?.contentWindow;
    const frameDocument = iframe?.contentDocument;
    const documentElement = frameDocument?.documentElement;
    const body = frameDocument?.body;

    if (!iframe || !frameWindow || !frameDocument || !documentElement || !body) {
      return;
    }

    const viewportHeight = window.innerHeight;
    documentElement.style.setProperty("--embedded-viewport-height", `${viewportHeight}px`);
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (!frameDocument.getElementById("product-live-frame-style")) {
      const style = frameDocument.createElement("style");
      style.id = "product-live-frame-style";
      style.textContent = `
        html,
        body {
          overflow: hidden !important;
        }

        #top {
          height: var(--embedded-viewport-height) !important;
          min-height: min(640px, var(--embedded-viewport-height)) !important;
        }
      `;
      frameDocument.head.appendChild(style);
    }

    const nextHeight = Math.max(
      documentElement.scrollHeight,
      documentElement.offsetHeight,
      body.scrollHeight,
      body.offsetHeight,
      viewportHeight,
    );

    setHeight(`${nextHeight}px`);
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    const handleLoad = () => {
      prepareFrame();
      window.setTimeout(prepareFrame, 350);
      window.setTimeout(prepareFrame, 1200);
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("resize", prepareFrame);

    const interval = window.setInterval(prepareFrame, 1800);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", prepareFrame);
      window.clearInterval(interval);
    };
  }, [prepareFrame]);

  return (
    <iframe
      ref={iframeRef}
      className="product-live-iframe"
      src={src}
      title={title}
      scrolling="no"
      style={{ height }}
    />
  );
}
