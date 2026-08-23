"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ProductLiveFrameProps = {
  src: string;
  title: string;
};

const CROSS_ORIGIN_PREVIEW_HEIGHT = "3600px";

export function ProductLiveFrame({ src, title }: ProductLiveFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const observedDocumentRef = useRef<Document | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState("100dvh");

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

        section#top,
        section#hero,
        section#home,
        [data-hero],
        .hero,
        .hero-section,
        .site-hero,
        section[class*="hero"],
        section[class*="Hero"] {
          min-height: var(--embedded-viewport-height) !important;
        }

        section#top,
        section#hero,
        section#home,
        section[class*="h-screen"],
        section[class*="h-svh"],
        section[class*="h-dvh"],
        section[class*="h-[100vh]"],
        section[class*="h-[100svh]"],
        section[class*="h-[100dvh]"],
        section[class*="min-h-screen"],
        section[class*="min-h-svh"],
        section[class*="min-h-dvh"],
        section[class*="min-h-[640px]"] {
          height: var(--embedded-viewport-height) !important;
          min-height: var(--embedded-viewport-height) !important;
        }
      `;
      frameDocument.head.appendChild(style);
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
      resizeObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
      observedDocumentRef.current = null;
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
