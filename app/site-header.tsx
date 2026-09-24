import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDictionary, localePath, type Locale } from "../lib/i18n";
import { DigitalVisionLogo } from "./digitalvision-logo";
import { MobileNav } from "./mobile-nav";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = getDictionary(locale);
  const links = t.nav.links.map((link) => ({
    href: localePath(locale, link.href),
    label: link.label,
  }));

  return (
    <header className="site-header">
      <Link className="brand" href={localePath(locale, "/#top")} aria-label={t.nav.brandAria}>
        <DigitalVisionLogo size="sm" showTagline={false} />
      </Link>
      <nav className="desktop-nav" aria-label={t.nav.mainAria}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href={localePath(locale, "/#kontakt")}>
        {t.common.startProject}
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
      <MobileNav
        links={links}
        ctaHref={localePath(locale, "/#kontakt")}
        ctaLabel={t.common.startProject}
        navAria={t.nav.mainAria}
        openLabel={t.nav.menuOpen}
        closeLabel={t.nav.menuClose}
      />
    </header>
  );
}
