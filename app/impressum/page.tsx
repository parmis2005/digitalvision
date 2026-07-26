import type { Metadata } from "next";
import Link from "next/link";

const title = "Impressum";
const description = "Impressum und Anbieterkennzeichnung von DigitalVision.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <p className="eyebrow">Rechtliches</p>
        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Sebastian Ziemianski
            <br />
            DigitalVision
            <br />
            Gromansfeld 24
            <br />
            47647 Kerken
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: 01727410221
            <br />
            E-Mail: info@digitalvision.site
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer</h2>
          <p>
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
          </p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Sebastian Ziemianski
            <br />
            Gromansfeld 24
            <br />
            47647 Kerken
          </p>
        </section>

        <section>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <Link className="legal-back-link" href="/">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
