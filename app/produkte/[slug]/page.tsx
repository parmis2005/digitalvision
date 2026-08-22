import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "../../products-data";
import { ProductPreview } from "../../product-preview";

const baseUrl = "https://www.digitalvision.site";

const categoryInfoHref: Record<string, string> = {
  Webseiten: "/webseite-info",
  SEO: "/seo-info",
  Verwaltungssysteme: "/verwaltungssystem-info",
};

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    return {};
  }

  const title = `${product.title} – ${product.type}`;
  const description = product.intro;
  const url = `/produkte/${product.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.title,
    serviceType: product.type,
    description: product.intro,
    provider: {
      "@type": "Organization",
      name: "Digital Vision",
      url: baseUrl,
    },
    url: `${baseUrl}/produkte/${product.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.title,
        item: `${baseUrl}/produkte/${product.slug}`,
      },
    ],
  };

  return (
    <main className="product-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="product-page-header">
        <Link className="product-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Zur Startseite
        </Link>
        <span className="product-page-brand">Digital Vision</span>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-intro">{product.intro}</p>
          <div className="product-hero-actions">
            <a className="primary-button light-cta" href="/#kontakt">
              Projekt anfragen
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            {categoryInfoHref[product.category] ? (
              <Link
                className="secondary-button"
                href={categoryInfoHref[product.category]}
              >
                Mehr zu {product.category}
              </Link>
            ) : null}
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
      ) : product.slug === "luna-nails" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Nagelstudio-Auftritt mit eleganter Beauty-Wirkung und direktem Terminfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten HappyNails-Projekts:
              ruhige Beauty-Farbwelt, Hero-Video, klare Leistungen, Galerie,
              Bewertungen und ein Aufbau, der Besucher schnell zur Anfrage führt.
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
      ) : product.slug === "vulkaneifeltherme" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Thermen-Auftritt mit Video-Hero, Wellness-Wirkung und direktem Ticketfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Thermen-Projekts:
              atmosphärischer Video-Einstieg, warme Naturfarben, klare Bereiche
              für Thermalbad, Sauna, Wellness, Gastronomie, Preise, Öffnungszeiten
              und ein Aufbau, der Besucher schnell zur Buchung führt.
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
      ) : product.slug === "st-elisabeth-klinikum" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Krankenhaus-Auftritt mit klarer Patientenführung und 24/7-Notfallfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Krankenhaus-Projekts:
              Notfall-Hinweis, Fachbereiche, Ärzteteam, Terminlogik,
              Patientenstimmen und ein Aufbau, der Patientinnen und Patienten
              schnell zur richtigen Information führt.
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
      ) : product.slug === "haarwerk-studio" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Friseur-Auftritt mit Video-Hero, Salon-Atmosphäre und direktem Terminfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Friseur-Projekts:
              emotionaler Video-Einstieg, hochwertige Salonbilder, transparente
              Leistungen, Portfolio, Bewertungen und ein Aufbau, der Besucher
              schnell zur Terminbuchung führt.
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
      ) : product.slug === "salzgrotte-aura" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Salzgrotte-Auftritt mit ruhiger Wellness-Wirkung und direktem Terminfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Salzgrotte-Projekts:
              warme Naturfarben, atmosphärische Bildflächen, klare Anwendungen,
              Preise, Öffnungszeiten, Kontakt und ein Aufbau, der Besucher
              schnell zur Terminbuchung führt.
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
      ) : product.slug === "fussoase-eppendorf" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Fußpflege-Auftritt mit ruhiger Beauty-Wirkung und direkter Terminbuchung.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Fußpflege-Projekts:
              sanfte Farbwelt, Video-Hero, klare Behandlungen, Preise, Galerie,
              Bewertungen und ein Aufbau, der Besucher schnell zur Terminbuchung führt.
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
      ) : product.slug === "autohaus-falkenstein" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Premium-Autohaus-Auftritt mit Video-Hero und direktem Probefahrtfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Autohaus-Projekts:
              dunkler Premium-Look, starke Fahrzeugbilder, Fahrzeugbestand,
              Detailseiten, Service- und Finanzierungsbereiche sowie ein Aufbau,
              der Interessenten schnell zur Probefahrt oder Anfrage führt.
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
      ) : product.slug === "nagelstudio-sinja" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Nagelstudio-Auftritt mit kreativer Nailart-Wirkung und direktem Kontaktfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Nagelstudio-Projekts:
              expressive Hero-Fläche, starke Nailart-Bilder, klare Leistungen,
              Preise, Reels, Galerie und ein Aufbau, der Besucher schnell zur
              Anfrage führt.
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
      ) : product.slug === "maison-lumiere" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Restaurant-Auftritt mit starker Atmosphäre und direktem Reservierungsfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Restaurant-Projekts:
              hochwertiger Video-Hero, warme Fine-Dining-Farbwelt, Speisekarte,
              Galerie, Bewertungen, Standort und ein Aufbau, der Gäste schnell
              zur Reservierung führt.
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
      ) : product.slug === "aurum-grand-hotel" ? (
        <section className="product-details">
          <div className="product-detail-card">
            <p className="eyebrow">Projektcharakter</p>
            <h2 className="product-detail-title-small">
              Luxushotel-Auftritt mit hochwertiger Atmosphäre und direktem Reservierungsfokus.
            </h2>
            <p>
              Diese Produktseite zeigt den Stil des echten Hotel-Projekts:
              Video-Hero, elegante Premium-Farbwelt, Zimmer und Suiten,
              Restaurant, Spa, Galerie, Kontakt und ein Aufbau, der Gäste schnell
              zur Reservierungsanfrage führt.
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
