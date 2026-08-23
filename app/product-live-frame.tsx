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
    documentElement.style.height = "auto";
    documentElement.style.minHeight = "0";
    documentElement.style.overflow = "hidden";
    body.style.height = "auto";
    body.style.minHeight = "0";
    body.style.overflow = "hidden";

    if (!frameDocument.getElementById("product-live-frame-style")) {
      const style = frameDocument.createElement("style");
      style.id = "product-live-frame-style";
      style.textContent = `
        html,
        body {
          height: auto !important;
          min-height: 0 !important;
          overflow: hidden !important;
        }

        html[class~="h-full"],
        body[class~="h-full"],
        html[class~="min-h-full"],
        body[class~="min-h-full"],
        [class~="h-full"],
        [class~="min-h-full"] {
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
