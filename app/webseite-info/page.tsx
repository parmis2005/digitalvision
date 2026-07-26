import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const title = "Webseiten-Erstellung";
const description =
  "Infoseite zu Webseiten-Erstellung mit Konzept, Design, Struktur, Launch und Betreuung.";

const highlights = [
  "Konzept & Design: seriöser erster Eindruck",
  "Mobile First: sauber auf jedem Gerät",
  "Klare Wege zum Kontakt: mehr Anfragen",
  "Launchbereit: Design, Inhalte und Technik abgestimmt",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/webseite-info",
  },
  openGraph: {
    title,
    description,
    url: "/webseite-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WebseiteInfoPage() {
  return (
    <main className="webseite-info-page">
      <header className="product-page-header">
        <Link className="product-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Zur Startseite
        </Link>
        <span className="product-page-brand">DigitalVision</span>
      </header>

      <div className="info-page-intro">
        <p className="eyebrow">Webseiten-Erstellung</p>
        <h1>Webseiten-Erstellung</h1>
        <p className="product-intro">
          Ein professioneller Webauftritt zeigt sofort, wer du bist, was du
          anbietest und warum Besucher den nächsten Schritt mit dir gehen
          sollten. Von Konzept über Design bis Launch entwickeln wir
          Webseiten, die auf jedem Gerät sauber funktionieren, Vertrauen
          aufbauen und den Weg zur Kontaktaufnahme so einfach wie möglich
          machen.
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
          <Link className="secondary-button" href="/produkte/beauty-haus">
            Beispielprojekt ansehen
          </Link>
        </div>
        <nav className="info-page-related" aria-label="Weitere Leistungen">
          <Link href="/seo-info">Mehr zu SEO & Google-Ranking</Link>
          <Link href="/verwaltungssystem-info">Mehr zu Verwaltungssystemen</Link>
        </nav>
      </div>

      <iframe
        className="webseite-info-frame"
        src="/webseite-info-preview/index.html"
        title="Webseiten-Erstellung Info"
      />
    </main>
  );
}
