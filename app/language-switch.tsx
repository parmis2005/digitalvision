"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { localePath, stripLocale, type Locale } from "../lib/i18n/config";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
  name: string;
};

function UnitedKingdomFlag() {
  return (
    <svg viewBox="0 0 60 30" role="presentation" focusable="false" aria-hidden="true">
      <clipPath id="language-switch-uk-clip">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#language-switch-uk-clip)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function GermanyFlag() {
  return (
    <svg viewBox="0 0 5 3" role="presentation" focusable="false" aria-hidden="true">
      <rect width="5" height="3" fill="#000" />
      <rect width="5" height="2" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export function LanguageSwitch({ locale, label, name }: LanguageSwitchProps) {
  const pathname = usePathname() ?? "/";
  const { pathname: sitePath } = stripLocale(pathname);
  const targetLocale: Locale = locale === "de" ? "en" : "de";
  const href = localePath(targetLocale, sitePath);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    // Full navigation on purpose: the whole page (including metadata and
    // <html lang>) changes, and we want to keep the current section hash.
    window.location.assign(`${href}${window.location.search}${window.location.hash}`);
  };

  return (
    <a
      className="floating-language-switch"
      href={href}
      hrefLang={targetLocale}
      lang={targetLocale}
      aria-label={label}
      title={name}
      onClick={handleClick}
    >
      <span className="floating-language-flag">
        {targetLocale === "en" ? <UnitedKingdomFlag /> : <GermanyFlag />}
      </span>
      <span className="floating-language-code">{targetLocale.toUpperCase()}</span>
    </a>
  );
}
