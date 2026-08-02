import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, PenLine } from "lucide-react";
import { AmbientScene } from "../ambient-scene";
import { blogSerif } from "../blog-font";
import { DigitalVisionLogo } from "../digitalvision-logo";
import {
  BLOG_POSTS_PER_PAGE,
  getBlogPageCount,
  getBlogPageNumbers,
  getBlogPagePath,
  getBlogPagePosts,
} from "../blog-pagination";

const baseUrl = "https://www.digitalvision.site";

type BlogPageContentProps = {
  currentPage: number;
};

export function BlogPageContent({ currentPage }: BlogPageContentProps) {
  const pagePosts = getBlogPagePosts(currentPage);
  const pageCount = getBlogPageCount();
  const pageNumbers = getBlogPageNumbers();
  const itemOffset = (currentPage - 1) * BLOG_POSTS_PER_PAGE;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DigitalVision Blog",
    itemListElement: pagePosts.map((post, index) => ({
      "@type": "ListItem",
      position: itemOffset + index + 1,
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
          <h1>Impulse für digitale Projekte.</h1>
          <p>Praxisnahe Artikel für klare Websites und digitale Abläufe.</p>
          <div className="blog-hero-actions">
            <Link className="primary-button" href="/#kontakt">
              Kostenlose Anfrage
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" href="/#leistungen">
              Leistungen ansehen
            </Link>
          </div>
        </div>
        <div className="blog-seo-visual" aria-hidden="true">
          <span className="blog-cosmic-halo" />
          <span className="blog-nebula blog-nebula-one" />
          <span className="blog-nebula blog-nebula-two" />
          <span className="blog-starfield" />
          <span className="blog-orbit blog-orbit-one" />
          <span className="blog-orbit blog-orbit-two" />
          <span className="blog-orbit blog-orbit-three" />
          <span className="blog-comet" />
          <span className="blog-comet blog-comet-secondary" />
          <span className="blog-star blog-star-one" />
          <span className="blog-star blog-star-two" />
          <span className="blog-star blog-star-three" />
          <span className="blog-star blog-star-four" />
          <span className="blog-star blog-star-five" />
          <div className="blog-laptop">
            <div className="blog-laptop-screen">
              <div className="blog-window-bar">
                <span />
                <span />
                <span />
                <strong>DigitalVision Magazin</strong>
              </div>
              <div className="blog-magazine-viewport">
                <div className="blog-magazine-track">
                  <article className="blog-magazine-card">
                    <span>01 Websites</span>
                    <strong>Klare Struktur vor dem Design</strong>
                    <em>Planung, Inhalte, Kontaktwege</em>
                  </article>
                  <article className="blog-magazine-card">
                    <span>02 Prozesse</span>
                    <strong>Anfragen sauber organisieren</strong>
                    <em>Formulare, Status, Überblick</em>
                  </article>
                  <article className="blog-magazine-card">
                    <span>03 Systeme</span>
                    <strong>Digitale Abläufe sichtbar machen</strong>
                    <em>Dashboards, Verwaltung, Routine</em>
                  </article>
                  <article className="blog-magazine-card">
                    <span>01 Websites</span>
                    <strong>Klare Struktur vor dem Design</strong>
                    <em>Planung, Inhalte, Kontaktwege</em>
                  </article>
                </div>
              </div>
            </div>
            <div className="blog-laptop-base">
              <span />
            </div>
          </div>
          <div className="blog-visual-note">
            <strong>Fokus</strong>
            <span>Idee / Aufbau / Ergebnis</span>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <p className="eyebrow">Alle Artikel für bessere digitale Auftritte.</p>
        </div>
        <div className="blog-list">
          {pagePosts.map((post) => (
            <Link
              className="blog-list-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <span className="blog-list-visual">
                <Image
                  className="blog-list-image"
                  src={post.image}
                  alt={post.imageAlt}
                  width={480}
                  height={270}
                  sizes="(max-width: 760px) calc(100vw - 32px), 230px"
                />
                <span className="blog-list-visual-label">{post.category}</span>
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

        {pageCount > 1 ? (
          <nav className="blog-pagination" aria-label="Blog Seiten">
            {currentPage > 1 ? (
              <Link
                className="blog-pagination-control"
                href={getBlogPagePath(currentPage - 1)}
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Zurück
              </Link>
            ) : null}
            <span className="blog-pagination-pages">
              {pageNumbers.map((page) => (
                <Link
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`blog-pagination-number${page === currentPage ? " is-active" : ""}`}
                  href={getBlogPagePath(page)}
                  key={page}
                >
                  {page}
                </Link>
              ))}
            </span>
            {currentPage < pageCount ? (
              <Link
                className="blog-pagination-control"
                href={getBlogPagePath(currentPage + 1)}
              >
                Weiter
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        ) : null}
      </section>

      <section className="blog-footer-cta">
        <p className="eyebrow">Nächster Schritt</p>
        <h2>Website klarer aufstellen?</h2>
        <p>
          Wir klären Struktur, Inhalte und Funktionen für dein Projekt.
        </p>
        <Link className="primary-button" href="/#kontakt">
          Projekt anfragen
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
