"use client";

import { ChevronUp } from "lucide-react";

export function FloatingBackToTop() {
  return (
    <button
      type="button"
      className="floating-back-to-top"
      aria-label="Nach oben scrollen"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp size={18} aria-hidden="true" />
    </button>
  );
}
