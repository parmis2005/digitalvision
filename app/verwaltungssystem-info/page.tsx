import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const title = "Verwaltungssysteme";
const description =
  "Infoseite zu Verwaltungssystemen mit Prozessanalyse, Systemstruktur, Modulen, Umsetzung und Betreuung.";

const highlights = [
  "Eine Datenbasis statt verstreuter Listen",
  "Klare Zustände: Status, Verantwortung, nächster Schritt",
  "Weniger Handarbeit durch Standardisierung",
  "Messbare Abläufe über Kennzahlen",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/verwaltungssystem-info",
  },
  openGraph: {
    title,
    description,
    url: "/verwaltungssystem-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function VerwaltungssystemInfoPage() {
  return (
    <main className="verwaltungssystem-info-page">
      <header className="product-page-header">
        <Link className="product-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Zur Startseite
        </Link>
        <span className="product-page-brand">DigitalVision</span>
      </header>

      <div className="info-page-intro">
        <p className="eyebrow">Verwaltungssysteme</p>
        <h1>Verwaltungssysteme</h1>
        <p className="product-intro">
          Verstreute Listen, E-Mails und Tabellen kosten Zeit und sorgen für
          Fehler. Ein individuelles Verwaltungssystem bündelt Kontakte,
          Dokumente, Termine und Freigaben in einer zentralen Datenbasis —
          mit klaren Zuständen, weniger Handarbeit und messbaren Abläufen für
          jeden Vorgang.
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
          <Link className="secondary-button" href="/produkte/kundenportal">
            Beispielprojekt ansehen
          </Link>
        </div>
        <nav className="info-page-related" aria-label="Weitere Leistungen">
          <Link href="/seo-info">Mehr zu SEO & Google-Ranking</Link>
          <Link href="/webseite-info">Mehr zu Webseiten-Erstellung</Link>
        </nav>
      </div>

      <iframe
        className="verwaltungssystem-info-frame"
        src="/verwaltungssystem-info-preview/index.html"
        title="Verwaltungssysteme Info"
      />
    </main>
  );
}
