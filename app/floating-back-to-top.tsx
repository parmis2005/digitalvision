"use client";

import { ChevronUp } from "lucide-react";

type FloatingBackToTopProps = {
  label: string;
};

export function FloatingBackToTop({ label }: FloatingBackToTopProps) {
  return (
    <button
      type="button"
      className="floating-back-to-top"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp size={18} aria-hidden="true" />
    </button>
  );
}
