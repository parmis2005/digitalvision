"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  infoHref: string;
  delay?: number;
};

export function ServiceCard({ icon, title, text, infoHref, delay = 0 }: ServiceCardProps) {
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

  return (
    <article
      ref={ref}
      className={`service-card reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="service-info-button" href={infoHref}>
        Info
      </a>
    </article>
  );
}
