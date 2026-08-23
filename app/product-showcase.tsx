"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { products, repeatedProducts } from "./products-data";
import { ProductPreview } from "./product-preview";

export function ProductShowcase() {
  const railRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const pausedRef = useRef(false);
  const railVisibleRef = useRef(false);
  const railAutoReadyRef = useRef(false);
  const autoStartTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const showcaseProducts = repeatedProducts;

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const alignHashTarget = () => {
      const targetId = window.location.hash.startsWith("#webseite-")
        ? window.location.hash.slice(1)
        : "";
      const target = targetId ? document.getElementById(targetId) : null;

      if (!(target instanceof HTMLElement) || !rail.contains(target)) {
        return false;
      }

      const section = document.getElementById("webseiten");
      if (section) {
        const targetTop = window.scrollY + section.getBoundingClientRect().top - 24;
        document.documentElement.scrollTop = Math.max(0, targetTop);
        document.body.scrollTop = Math.max(0, targetTop);
      }

      const railRect = rail.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const nextLeft =
        rail.scrollLeft +
        targetRect.left -
        railRect.left -
        (rail.clientWidth - targetRect.width) / 2;

      rail.scrollTo({
        left: Math.max(0, nextLeft),
        behavior: "auto",
      });

      scrollPositionRef.current = rail.scrollLeft;
      pausedRef.current = true;
      scheduleResume(2600);

      return true;
    };

    const alignFrame = window.requestAnimationFrame(alignHashTarget);
    const alignTimer = window.setTimeout(alignHashTarget, 120);
    let visibilityObserver: IntersectionObserver | null = null;

    if (!alignHashTarget()) {
      rail.scrollLeft = 0;
      scrollPositionRef.current = 0;
    }

    if ("IntersectionObserver" in window) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.12;
          railVisibleRef.current = isVisible;
          scrollPositionRef.current = rail.scrollLeft;

          if (isVisible && !railAutoReadyRef.current && autoStartTimerRef.current === null) {
            const hasWebsiteHash = window.location.hash.startsWith("#webseite-");

            if (!hasWebsiteHash) {
              rail.scrollLeft = 0;
              scrollPositionRef.current = 0;
            }

            autoStartTimerRef.current = window.setTimeout(() => {
              scrollPositionRef.current = rail.scrollLeft;
              railAutoReadyRef.current = true;
              autoStartTimerRef.current = null;
            }, 1800);
          }

          if (!isVisible && !railAutoReadyRef.current && autoStartTimerRef.current !== null) {
            window.clearTimeout(autoStartTimerRef.current);
            autoStartTimerRef.current = null;
          }
        },
        {
          root: null,
          threshold: [0, 0.12, 0.32],
        },
      );
      visibilityObserver.observe(rail);
    } else {
      railVisibleRef.current = true;
      railAutoReadyRef.current = true;
    }

    let frame = 0;

    const syncScrollPosition = () => {
      if (pausedRef.current) {
        scrollPositionRef.current = rail.scrollLeft;
        // Native momentum scrolling can keep firing after touchend. If a
        // resume is already scheduled, push it back so we don't fight the
        // browser's inertial scroll with our own scrollLeft writes.
        if (resumeTimerRef.current !== null) {
          scheduleResume(150);
        }
      }
    };

    const step = () => {
      if (railVisibleRef.current && railAutoReadyRef.current && !pausedRef.current) {
        const loopPoint = rail.scrollWidth / 2;

        if (loopPoint > rail.clientWidth) {
          const nextPosition = scrollPositionRef.current + 0.45;
          scrollPositionRef.current = nextPosition >= loopPoint ? 0 : nextPosition;
          rail.scrollLeft = scrollPositionRef.current;
        }
      }
      frame = window.requestAnimationFrame(step);
    };

    rail.addEventListener("scroll", syncScrollPosition, { passive: true });
    window.addEventListener("hashchange", alignHashTarget);
    frame = window.requestAnimationFrame(step);

    return () => {
      rail.removeEventListener("scroll", syncScrollPosition);
      window.removeEventListener("hashchange", alignHashTarget);
      window.cancelAnimationFrame(alignFrame);
      window.clearTimeout(alignTimer);
      window.cancelAnimationFrame(frame);
      visibilityObserver?.disconnect();
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
      if (autoStartTimerRef.current !== null) {
        window.clearTimeout(autoStartTimerRef.current);
      }
    };
  }, []);

  const syncToRail = () => {
    const rail = railRef.current;
    if (rail) {
      scrollPositionRef.current = rail.scrollLeft;
    }
  };

  const pause = () => {
    pausedRef.current = true;
    syncToRail();
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const resume = () => {
    syncToRail();
    pausedRef.current = false;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const scheduleResume = (delay: number) => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      syncToRail();
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  };

  const move = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const card = rail.querySelector<HTMLElement>(".showcase-card");
    const cardWidth = card?.offsetWidth ?? 350;
    const gap = 18;
    const distance = Math.max(rail.clientWidth * 0.7, cardWidth + gap);
    const nextLeft = rail.scrollLeft + (direction === "left" ? -distance : distance);

    pause();

    rail.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: "smooth",
    });

    scheduleResume(1200);
  };

  return (
    <section id="webseiten" className="product-showcase" aria-label="Beispiele für digitale Produkte">
      <div className="showcase-header">
        <div>
          <p className="showcase-label">Beispiele</p>
          <h2 className="showcase-title">Webseiten im passenden Look.</h2>
        </div>
        <div className="showcase-controls" aria-label="Produkte verschieben">
          <button type="button" onClick={() => move("left")} aria-label="Nach links">
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move("right")} aria-label="Nach rechts">
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="showcase-rail"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={() => scheduleResume(150)}
        onTouchCancel={() => scheduleResume(150)}
      >
        <div className="showcase-track">
          {showcaseProducts.map((product, index) => (
            <Link
              className={`showcase-card ${product.variant}`}
              href={`/produkte/${product.slug}`}
              id={index < products.length ? `webseite-${product.slug}` : undefined}
              key={`${product.title}-${index}`}
            >
              <div className="showcase-preview">
                <ProductPreview product={product} />
              </div>
              <div className="showcase-meta">
                <strong>{product.title}</strong>
                <span>{product.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
