import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const title = "SEO & Google-Ranking";
const description =
  "SEO-Infoseite mit Grundlagen, Ranking-Faktoren, Optimierung, Prozess und Tools.";

const highlights = [
  "SEO-Audit: Technik, Inhalte und Wettbewerb im Überblick",
  "Seitenstruktur: wichtige Inhalte sinnvoll verbunden",
  "Performance: schnelle, mobile und technisch saubere Websites",
  "Lokale Suche: regionale Rankings für mehr Anfragen",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/seo-info",
  },
  openGraph: {
    title,
    description,
    url: "/seo-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function SeoInfoPage() {
  return (
    <main className="seo-info-page">
      <header className="product-page-header">
        <Link className="product-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Zur Startseite
        </Link>
        <span className="product-page-brand">DigitalVision</span>
      </header>

      <div className="info-page-intro">
        <p className="eyebrow">SEO & Google-Ranking</p>
        <h1>SEO & Google-Ranking</h1>
        <p className="product-intro">
          Technische SEO, schnelle Ladezeiten, eine klare Seitenstruktur und
          Inhalte, die zur Suchintention passen, entscheiden darüber, ob deine
          Website bei Google gefunden wird. Wir analysieren Technik, Content
          und Wettbewerb, priorisieren die wichtigsten Maßnahmen und sorgen
          für messbare Verbesserungen bei Sichtbarkeit, Rankings und Anfragen
          — inklusive lokaler Suche.
        </p>
        <div className="product-highlights">
          {highlights.map((highlight) => (
            <div className="product-highlight" key={highlight}>
              <Check size={18} aria-hidden="true" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="info-page-actions">
          <a className="primary-button" href="/#kontakt">
            Projekt anfragen
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <Link className="secondary-button" href="/produkte/service-hub">
            Beispielprojekt ansehen
          </Link>
        </div>
        <nav className="info-page-related" aria-label="Weitere Leistungen">
          <Link href="/webseite-info">Mehr zu Webseiten-Erstellung</Link>
          <Link href="/verwaltungssystem-info">Mehr zu Verwaltungssystemen</Link>
        </nav>
      </div>

      <iframe
        className="seo-info-frame"
        src="/seo-info-preview/index.html"
        title="SEO & Google-Ranking Info"
      />
    </main>
  );
}
