import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DigitalVisionLogo } from "./digitalvision-logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Digital Vision Startseite">
        <DigitalVisionLogo size="sm" showTagline={false} />
      </Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        <Link href="/#leistungen">Leistungen</Link>
        <Link href="/#prozess">Prozess</Link>
        <Link href="/#preise">Pakete</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#kontakt">Kontakt</Link>
      </nav>
      <Link className="header-cta" href="/#kontakt">
        Projekt starten
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
      <MobileNav />
    </header>
  );
}
