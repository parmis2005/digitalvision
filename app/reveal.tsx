"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: "div" | "article";
  className?: string;
  delay?: number;
  children: ReactNode;
};

export function Reveal({ as = "div", className = "", delay = 0, children }: RevealProps) {
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

  const classes = `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`;
  const style = { transitionDelay: `${delay}ms` };

  if (as === "article") {
    return (
      <article ref={ref} className={classes} style={style}>
        {children}
      </article>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  );
}
