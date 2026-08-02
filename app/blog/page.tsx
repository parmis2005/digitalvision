import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, PenLine } from "lucide-react";
import { AmbientScene } from "../ambient-scene";
import { blogSerif } from "../blog-font";
import { DigitalVisionLogo } from "../digitalvision-logo";
import { blogPosts } from "../blog-data";

const baseUrl = "https://www.digitalvision.site";
const title = "Blog: Webdesign, SEO & digitale Systeme";
const description =
  "DigitalVision Blog mit praxisnahen Tipps zu Webdesign, SEO, Google-Ranking, Website-Erstellung und Verwaltungssystemen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DigitalVision Blog",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <main className={`blog-page ${blogSerif.variable}`}>
      <AmbientScene />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <header className="blog-header">
        <Link className="brand" href="/" aria-label="DigitalVision Startseite">
          <DigitalVisionLogo size="sm" showTagline={false} />
        </Link>
        <nav className="blog-header-nav" aria-label="Blog Navigation">
          <Link href="/#leistungen">Leistungen</Link>
          <Link href="/#prozess">Prozess</Link>
          <Link href="/#preise">Pakete</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <Link className="header-cta" href="/#kontakt">
          Projekt starten
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </header>

      <section className="blog-hero">
        <div className="blog-hero-copy">
          <Link className="blog-home-link" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Zurück zu DigitalVision
          </Link>
          <p className="eyebrow">DigitalVision Blog</p>
          <h1>Wissen für Websites, SEO und digitale Systeme.</h1>
          <p>
            Praxisnahe Artikel für Unternehmen, die online klarer auftreten,
            besser gefunden werden und ihre digitalen Prozesse sauberer
            organisieren wollen.
          </p>
          <div className="blog-hero-actions">
            <Link className="primary-button" href="/#kontakt">
              Kostenlose Anfrage
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" href="/seo-info">
              SEO ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="blog-topic-strip" aria-label="Blog Themen">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <p className="eyebrow">Alle Artikel</p>
          <h2>Blogbeiträge für bessere Sichtbarkeit.</h2>
        </div>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <Link
              className="blog-list-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <span className="blog-list-visual" aria-hidden="true">
                <span className="blog-list-visual-glow" />
                <span className="blog-list-visual-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="blog-list-visual-label">{post.category}</span>
                <span className="blog-list-visual-lines">
                  <span />
                  <span />
                  <span />
                </span>
              </span>
              <span className="blog-list-content">
                <span className="blog-card-meta">
                  <span>
                    <PenLine size={15} aria-hidden="true" />
                    DigitalVision
                  </span>
                  <span>
                    <Clock size={15} aria-hidden="true" />
                    {post.readingTime}
                  </span>
                  <span>{post.category}</span>
                </span>
                <span className="blog-list-title">{post.title}</span>
                <span className="blog-list-excerpt">{post.excerpt}</span>
                <span className="blog-card-link">
                  Artikel lesen
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-footer-cta">
        <p className="eyebrow">Nächster Schritt</p>
        <h2>Du willst mit deiner Website besser gefunden werden?</h2>
        <p>
          DigitalVision prüft, welche Seiten, Inhalte und technischen Punkte
          für dein Projekt zuerst wichtig sind.
        </p>
        <Link className="primary-button" href="/#kontakt">
          Projekt anfragen
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
