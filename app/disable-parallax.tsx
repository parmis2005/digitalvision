"use client";

import { useEffect } from "react";

export function DisableParallax() {
  useEffect(() => {
    const isProductLivePage = document.body.querySelector(".product-live-page");
    if (!isProductLivePage) return;

    const root = document.documentElement;
    root.style.setProperty("--parallax-shift", "0px");
    root.style.setProperty("--parallax-shift-soft", "0px");

    const disableScroll = (e: Event) => {
      e.stopImmediatePropagation();
    };

    window.addEventListener("scroll", disableScroll, { capture: true });

    return () => {
      window.removeEventListener("scroll", disableScroll, { capture: true });
    };
  }, []);

  return null;
}
