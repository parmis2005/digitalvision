"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Prozess" },
  { href: "#preise", label: "Pakete" },
  { href: "/blog", label: "Blog" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <>
      {open && <div className="mobile-nav-backdrop" onClick={() => setOpen(false)} />}
      <div
        id="mobile-nav-panel"
        className={open ? "mobile-nav-panel open" : "mobile-nav-panel"}
        aria-hidden={!open}
      >
        <nav aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="mobile-nav-label">{link.label}</span>
            </a>
          ))}
        </nav>
        <a className="mobile-nav-cta" href="#kontakt" onClick={() => setOpen(false)}>
          Projekt starten
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
      {mounted ? createPortal(panel, document.body) : null}
    </>
  );
}
