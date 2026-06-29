import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "../../products-data";
import { ProductPreview } from "../../product-preview";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page">
      <header className="product-page-header">
        <Link className="product-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Zur Startseite
        </Link>
        <span className="product-page-brand">DigitalVision</span>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-intro">{product.intro}</p>
          <div className="product-hero-actions">
            <a className="primary-button" href="/#kontakt">
              Projekt anfragen
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        {product.previewUrl ? (
          <div className={`product-preview-large ${product.variant}`}>
            <div className="product-preview-shell product-preview-shell-embed">
              <div className="product-preview-viewport">
                <iframe
                  className="product-preview-iframe"
                  src={product.previewUrl}
                  title={`${product.title} Vorschau`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={`product-preview-large ${product.variant}`} aria-hidden="true">
            <div className="product-preview-shell">
              <ProductPreview product={product} size="page" />
            </div>
          </div>
        )}
      </section>

      {product.slug === "beauty-haus" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Beauty-Auftritt mit echter Website-Anmutung statt Platzhalter.
            </h2>
            <p>
              Diese Produktseite zeigt bewusst den Stil des echten Kosmetik-Projekts:
              elegante Farbwelt, hochwertige Ruhe, klare Behandlungsführung und ein
              Look, der für Premium-Kosmetik sofort Vertrauen aufbaut.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "bean-bark" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Coffee-Shop-Auftritt mit warmer Markenwirkung und echter Menüführung.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Coffee-Shop-Projekts:
              warme Farbwelt, starke Markenatmosphäre, klare Menüstruktur und ein
              Aufbau, der Genuss, Aufenthaltsgefühl und Reservierungen verbindet.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "serenity-studio" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Wellness-Auftritt mit Buchungskalender und ruhiger Premium-Atmosphäre.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Wellnessstudio-Projekts:
              großzügige Bildflächen, klare Buchungslogik, Recovery-Fokus und ein
              hochwertiges Erscheinungsbild für Spa- und Wellness-Angebote.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "velora-fashion" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Femininer Fashion-Shop mit editorialer Bildsprache und klarer Produktführung.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Damenmode-Shops:
              ruhige Farbwelt, starke Produktbilder, klare Kategorien und eine
              Shop-Struktur für Neuheiten, Bestseller und Sale.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "autohaus-nordglanz" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Autohaus-Auftritt mit echter Bestands- und Suchlogik.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Autohaus-Projekts:
              starke Fahrzeugbilder, klare Suchführung, vertrauensbildende Struktur
              und ein Aufbau, der Fahrzeuge und Anfragen sauber zusammenführt.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "arztpraxis-weber" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Praxis-Auftritt mit klarer Patientenführung und vertrauensvoller Wirkung.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Arztpraxis-Projekts:
              ruhige medizinische Farbwelt, klare Navigation, Leistungen, Team,
              Kontakt und ein Aufbau, der Patienten schnell zur richtigen Information führt.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "cleanpro-reinigung" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Reinigungsfirma-Auftritt mit starkem Angebotsfokus und klarer Leistungsstruktur.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Reinigungsfirma-Projekts:
              klare Service-Bereiche, vertrauensbildende Kennzahlen, regionale Standorte
              und ein Aufbau, der Interessenten schnell zur Anfrage führt.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : product.slug === "alphaschutz-versicherung" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Versicherungsauftritt mit seriöser Markenwirkung und klarem Beratungsfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Versicherungs-Projekts:
              hochwertiger Hero-Bereich, klare Leistungsstruktur, Prozess, Bewertungen
              und ein Aufbau, der Vertrauen und Beratungsanfragen sauber zusammenführt.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Vorbereitet für dein Produkt</p>
            <h2>Diese Seite ist dein Vorbau für spätere echte Inhalte.</h2>
            <p>
              Hier können später dein finaler Text, deine echten Screenshots,
              Funktionen, Preisstruktur und dein individueller Verkaufsaufbau rein.
            </p>
          </div>
          <div className="product-detail-card">
            <p className="eyebrow">Highlights</p>
            <div className="product-highlights">
              {product.highlights.map((highlight) => (
                <div className="product-highlight" key={highlight}>
                  <Check size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
