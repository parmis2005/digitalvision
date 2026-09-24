export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const localePrefix: Record<Locale, string> = {
  de: "",
  en: "/en",
};

export const htmlLang: Record<Locale, string> = {
  de: "de",
  en: "en",
};

export const intlLocale: Record<Locale, string> = {
  de: "de-DE",
  en: "en-GB",
};

export const openGraphLocale: Record<Locale, string> = {
  de: "de_DE",
  en: "en_GB",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

/**
 * Prefixes a site-relative path with the locale segment.
 * German (default) paths stay unchanged, English paths get "/en".
 *
 *   localePath("en", "/")            -> "/en"
 *   localePath("en", "/#kontakt")    -> "/en#kontakt"
 *   localePath("en", "/blog")        -> "/en/blog"
 *   localePath("de", "/blog")        -> "/blog"
 */
export function localePath(locale: Locale, path: string) {
  const prefix = localePrefix[locale];

  if (!prefix) {
    return path;
  }

  if (path === "/") {
    return prefix;
  }

  if (path.startsWith("/#") || path.startsWith("/?")) {
    return `${prefix}${path.slice(1)}`;
  }

  return `${prefix}${path}`;
}

/** Removes a leading locale segment ("/de/..." or "/en/...") from a pathname. */
export function stripLocale(pathname: string): { locale: Locale; pathname: string } {
  for (const locale of locales) {
    const prefix = `/${locale}`;

    if (pathname === prefix || pathname === `${prefix}/`) {
      return { locale, pathname: "/" };
    }

    if (pathname.startsWith(`${prefix}/`)) {
      return { locale, pathname: pathname.slice(prefix.length) };
    }
  }

  return { locale: defaultLocale, pathname };
}

/** hreflang alternates for a site-relative path. */
export function localeAlternates(path: string) {
  return {
    de: localePath("de", path),
    en: localePath("en", path),
    "x-default": localePath("de", path),
  };
}

/** `alternates` metadata block (canonical + hreflang) for a site-relative path. */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: localeAlternates(path),
  };
}
