import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, House, PenLine } from "lucide-react";
import { getDictionary, localePath, type Locale } from "../../../lib/i18n";
import { AmbientScene } from "../../ambient-scene";
import { blogSerif } from "../../blog-font";
import { SiteHeader } from "../../site-header";
import {
  BLOG_POSTS_PER_PAGE,
  getBlogPageCount,
  getBlogPageNumbers,
  getBlogPagePath,
  getBlogPagePosts,
} from "../../blog-pagination";

const baseUrl = "https://www.digitalvision.site";

type BlogPageContentProps = {
  locale: Locale;
  currentPage: number;
};

export function BlogPageContent({ locale, currentPage }: BlogPageContentProps) {
  const t = getDictionary(locale).blog;
  const pagePosts = getBlogPagePosts(currentPage, locale);
  const pageCount = getBlogPageCount(locale);
  const pageNumbers = getBlogPageNumbers(locale);
  const itemOffset = (currentPage - 1) * BLOG_POSTS_PER_PAGE;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.listName,
    itemListElement: pagePosts.map((post, index) => ({
      "@type": "ListItem",
      position: itemOffset + index + 1,
      url: `${baseUrl}${localePath(locale, `/blog/${post.slug}`)}`,
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
      <SiteHeader locale={locale} />

      <section className="blog-hero">
        <div className="blog-hero-copy">
          <Link
            className="digital-vision-info-back-link"
            href={localePath(locale, "/")}
            aria-label={t.backHome}
          >
            <House size={18} aria-hidden="true" />
          </Link>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="blog-hero-actions">
            <Link className="primary-button" href={localePath(locale, "/#kontakt")}>
              {t.freeRequest}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" href={localePath(locale, "/#leistungen")}>
              {t.viewServices}
            </Link>
          </div>
        </div>
        <div className="blog-seo-visual" aria-hidden="true">
          <span className="blog-cosmic-halo" />
          <span className="blog-nebula blog-nebula-one" />
          <span className="blog-nebula blog-nebula-two" />
          <span className="blog-starfield" />
          <span className="blog-cosmic-dust" />
          <span className="blog-constellation" />
          <span className="blog-orbit blog-orbit-one" />
          <span className="blog-orbit blog-orbit-two" />
          <span className="blog-orbit blog-orbit-three" />
          <span className="blog-comet" />
          <span className="blog-comet blog-comet-secondary" />
          <span className="blog-planet" />
          <span className="blog-moon" />
          <span className="blog-star blog-star-one" />
          <span className="blog-star blog-star-two" />
          <span className="blog-star blog-star-three" />
          <span className="blog-star blog-star-four" />
          <span className="blog-star blog-star-five" />
          <span className="blog-spark blog-spark-one" />
          <span className="blog-spark blog-spark-two" />
          <span className="blog-spark blog-spark-three" />
          <div className="blog-laptop">
            <div className="blog-laptop-screen">
              <div className="blog-window-bar">
                <span />
                <span />
                <span />
                <strong>{t.magazineTitle}</strong>
              </div>
              <div className="blog-magazine-viewport">
                <div className="blog-magazine-track">
                  {[...t.magazineCards, t.magazineCards[0]].map((card, index) => (
                    <article className="blog-magazine-card" key={`${card.tag}-${index}`}>
                      <span>{card.tag}</span>
                      <strong>{card.title}</strong>
                      <em>{card.sub}</em>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="blog-laptop-base">
              <span />
            </div>
          </div>
          <div className="blog-visual-note">
            <strong>{t.visualNoteTitle}</strong>
            <span>{t.visualNoteText}</span>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-heading">
          <p className="eyebrow">{t.listEyebrow}</p>
        </div>
        <div className="blog-list">
          {pagePosts.map((post) => (
            <Link
              className="blog-list-card"
              href={localePath(locale, `/blog/${post.slug}`)}
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
                    {t.author}
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
                  {t.readArticle}
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>

        {pageCount > 1 ? (
          <nav className="blog-pagination" aria-label={t.paginationAria}>
            {currentPage > 1 ? (
              <Link
                className="blog-pagination-control"
                href={localePath(locale, getBlogPagePath(currentPage - 1))}
              >
                <ArrowLeft size={15} aria-hidden="true" />
                {t.previous}
              </Link>
            ) : null}
            <span className="blog-pagination-pages">
              {pageNumbers.map((page) => (
                <Link
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`blog-pagination-number${page === currentPage ? " is-active" : ""}`}
                  href={localePath(locale, getBlogPagePath(page))}
                  key={page}
                >
                  {page}
                </Link>
              ))}
            </span>
            {currentPage < pageCount ? (
              <Link
                className="blog-pagination-control"
                href={localePath(locale, getBlogPagePath(currentPage + 1))}
              >
                {t.next}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        ) : null}
      </section>

      <section className="blog-footer-cta">
        <p className="eyebrow">{t.footerEyebrow}</p>
        <h2>{t.footerTitle}</h2>
        <p>{t.footerText}</p>
        <Link className="primary-button light-cta" href={localePath(locale, "/#kontakt")}>
          {t.footerCta}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
