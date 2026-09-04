"use client";

import { useEffect } from "react";

type AmbientSceneProps = {
  density?: "default" | "home";
};

const homeParticles = Array.from({ length: 22 }, (_, index) => index + 9);

export function AmbientScene({ density = "default" }: AmbientSceneProps) {
  useEffect(() => {
    // Disable parallax effects entirely on product live pages to prevent scroll blocking
    if (document.body.classList.contains("product-live-page")) {
      const root = document.documentElement;
      root.style.setProperty("--parallax-shift", "0px");
      root.style.setProperty("--parallax-shift-soft", "0px");
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const scrollY = window.scrollY;
      root.style.setProperty("--parallax-shift", `${Math.min(scrollY * 0.08, 120)}px`);
      root.style.setProperty("--parallax-shift-soft", `${Math.min(scrollY * 0.04, 64)}px`);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="ambient-particles" aria-hidden="true">
      <span className="ambient-particle ambient-particle-one" />
      <span className="ambient-particle ambient-particle-two" />
      <span className="ambient-particle ambient-particle-three" />
      <span className="ambient-particle ambient-particle-four" />
      <span className="ambient-particle ambient-particle-five" />
      <span className="ambient-particle ambient-particle-six" />
      <span className="ambient-particle ambient-particle-seven" />
      <span className="ambient-particle ambient-particle-eight" />
      {density === "home"
        ? homeParticles.map((particle) => (
            <span
              className={`ambient-particle ambient-particle-home ambient-particle-${particle}`}
              key={particle}
            />
          ))
        : null}
    </div>
  );
}
