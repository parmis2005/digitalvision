"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { repeatedProducts } from "./products-data";

export function ProductShowcase() {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    let frame = 0;

    const step = () => {
      if (!pausedRef.current) {
        rail.scrollLeft += 0.4;
        if (rail.scrollLeft >= rail.scrollWidth / 2) {
          rail.scrollLeft = 0;
        }
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const move = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="product-showcase" aria-label="Beispiele für digitale Produkte">
      <div className="showcase-header">
        <div>
          <p className="showcase-label">Beispiele</p>
          <h2 className="showcase-title">Webseiten, SEO und Systeme im passenden Look.</h2>
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
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div className="showcase-track">
          {repeatedProducts.map((product, index) => (
            <Link
              className={`showcase-card ${product.variant}`}
              href={`/produkte/${product.slug}`}
              key={`${product.title}-${index}`}
            >
              <div className="showcase-preview">
                <div className="preview-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-content">
                  <div className="preview-copy">
                    <p>{product.type}</p>
                    <h3>{product.title}</h3>
                  </div>
                  <div className="preview-art" />
                </div>
                <div className="preview-footer">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="showcase-meta">
                <strong>{product.title}</strong>
                <span>{product.detail}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
