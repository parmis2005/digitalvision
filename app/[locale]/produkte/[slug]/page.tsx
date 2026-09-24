import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, House } from "lucide-react";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../../lib/i18n";
import { productCharacterFallback, productCharacters } from "../../../product-characters";
import { getProducts, products } from "../../../products-data";
import { ProductLiveFrame } from "../../../product-live-frame";
import { ProductPreview } from "../../../product-preview";

const baseUrl = "https://www.digitalvision.site";

const categoryInfoHref: Record<string, string> = {
  Webseiten: "/webseite-info",
  SEO: "/seo-info",
  Verwaltungssysteme: "/verwaltungssystem-info",
};

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const product = getProducts(locale).find((entry) => entry.slug === slug);

  if (!product) {
    return {};
  }

  const title = `${product.title} – ${product.type}`;
  const description = product.intro;
  const path = `/produkte/${product.slug}`;

  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title,
      description,
      url: localePath(locale, path),
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
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale);
  const product = getProducts(locale).find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  const productPath = `/produkte/${product.slug}`;
  const categoryLabel = t.categories[product.category] ?? product.category;
  const character = productCharacters[locale][product.slug];
  const fallback = productCharacterFallback[locale];

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
    url: `${baseUrl}${localePath(locale, productPath)}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.common.breadcrumbHome,
        item: `${baseUrl}${localePath(locale, "/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.title,
        item: `${baseUrl}${localePath(locale, productPath)}`,
      },
    ],
  };
  const livePreviewUrl =
    product.category === "Webseiten" ? product.previewUrl : undefined;
  const backHref = localePath(
    locale,
    product.category === "Webseiten" ? `/#webseite-${product.slug}` : "/#webseiten",
  );

  const livePageStyle = livePreviewUrl
    ? ({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        padding: 0,
        background: "#0f0d0b",
      } as const)
    : undefined;
  const liveSiteStyle = livePreviewUrl
    ? ({
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        minHeight: 0,
        margin: 0,
        borderTop: 0,
        background: "#0f0d0b",
        overflowAnchor: "none",
        touchAction: "pan-y",
      } as const)
    : undefined;
  return (
    <main
      className={`product-page${livePreviewUrl ? " product-live-page" : ""}`}
      style={livePageStyle}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link className="product-home-button" href={backHref} aria-label={t.product.homeAria}>
        <House size={18} aria-hidden="true" />
      </Link>

      {livePreviewUrl ? (
        <section
          className="product-live-site"
          aria-label={`${product.title} ${t.product.websiteSuffix}`}
          style={liveSiteStyle}
        >
          <ProductLiveFrame
            src={livePreviewUrl}
            title={`${product.title} ${t.product.websiteSuffix}`}
          />
        </section>
      ) : (
        <>
          <section className="product-hero">
            <div className="product-hero-copy">
              <p className="eyebrow">{categoryLabel}</p>
              <h1>{product.title}</h1>
              <p className="product-intro">{product.intro}</p>
              <div className="product-hero-actions">
                <a className="primary-button light-cta" href={localePath(locale, "/#kontakt")}>
                  {t.product.requestProject}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                {categoryInfoHref[product.category] ? (
                  <Link
                    className="secondary-button"
                    href={localePath(locale, categoryInfoHref[product.category])}
                  >
                    {t.product.moreAbout} {categoryLabel}
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
                      title={`${product.title} ${t.product.previewSuffix}`}
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

          <section className="product-details">
            <div className="product-detail-card">
              {character ? (
                <>
                  <p className="eyebrow">{t.product.characterEyebrow}</p>
                  <h2 className="product-detail-title-small">{character.title}</h2>
                  <p>{character.text}</p>
                </>
              ) : (
                <>
                  <p className="eyebrow">{fallback.eyebrow}</p>
                  <h2>{fallback.title}</h2>
                  <p>{fallback.text}</p>
                </>
              )}
            </div>
            <div className="product-detail-card">
              <p className="eyebrow">{t.product.highlights}</p>
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
        </>
      )}
    </main>
  );
}
