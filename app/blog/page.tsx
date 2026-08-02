import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { AmbientScene } from "../ambient-scene";
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
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
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
    <main className="blog-page">
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
      </section>

      <section className="blog-topic-strip" aria-label="Blog Themen">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <p className="eyebrow">Empfohlen</p>
          <h2>Startpunkte für bessere Sichtbarkeit.</h2>
        </div>
        <div className="blog-featured-grid">
          {featuredPosts.map((post) => (
            <Link className="blog-card blog-card-featured" href={`/blog/${post.slug}`} key={post.slug}>
              <span className="blog-card-icon" aria-hidden="true">
                <Search size={20} />
              </span>
              <span className="blog-card-meta">
                {post.category} · {post.readingTime}
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-card-link">
                Artikel lesen
                <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <p className="eyebrow">Alle Artikel</p>
          <h2>SEO-Themen für deinen digitalen Auftritt.</h2>
        </div>
        <div className="blog-grid">
          {regularPosts.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <span className="blog-card-icon" aria-hidden="true">
                <BookOpen size={19} />
              </span>
              <span className="blog-card-meta">
                {post.category} · {post.readingTime}
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-card-link">
                Mehr erfahren
                <ArrowRight size={17} aria-hidden="true" />
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
