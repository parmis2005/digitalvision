import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "../../products-data";

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
        <div className={`product-preview-large ${product.variant}`} aria-hidden="true">
          <div className="product-preview-shell">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <div className="preview-copy">
                <p>{product.type}</p>
                <h3>{product.title}</h3>
              </div>
              <div className="preview-art" />
            </div>
            <div className="preview-footer">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
