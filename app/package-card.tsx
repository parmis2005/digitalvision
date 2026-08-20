"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type PackageCardProps = {
  featured?: boolean;
  delay?: number;
  children: ReactNode;
};

export function PackageCard({ featured = false, delay = 0, children }: PackageCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["package-card", "reveal", featured ? "featured" : "", visible ? "is-visible" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </article>
  );
}
