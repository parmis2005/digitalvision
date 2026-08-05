import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { AmbientScene } from "../../ambient-scene";
import { blogSerif } from "../../blog-font";
import { DigitalVisionLogo } from "../../digitalvision-logo";
import {
  type BlogPost,
  blogPosts,
  getBlogPost,
  getRelatedPosts,
} from "../../blog-data";

const baseUrl = "https://www.digitalvision.site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function getSectionId(index: number) {
  return `abschnitt-${index + 1}`;
}

function getBlogTitleLines(post: BlogPost) {
  const separatorIndex = post.title.indexOf(":");

  if (separatorIndex === -1) {
    return {
      firstLine: `${post.category}:`,
      secondLine: post.title,
    };
  }

  return {
    firstLine: post.title.slice(0, separatorIndex + 1),
    secondLine: post.title.slice(separatorIndex + 1).trim(),
  };
}

function getBlogTitleClassName(firstLine: string) {
  return `blog-article-title${firstLine.length > 30 ? " is-long-main" : ""}`;
}

function getSectionHeadingClassName(heading: string) {
  return heading.length > 34 ? "is-long-section-heading" : undefined;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const titleLines = getBlogTitleLines(post);
  const titleClassName = getBlogTitleClassName(titleLines.firstLine);
  const articleBody = post.sections
    .flatMap((section) => [section.heading, ...section.body, ...(section.bullets ?? [])])
    .join(" ");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Organization",
      name: "Digital Vision",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Digital Vision",
      url: baseUrl,
    },
    image: `${baseUrl}${post.image}`,
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    keywords: post.focusKeyword,
    articleSection: post.category,
    articleBody,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };

  return (
    <main className={`blog-page blog-article-page ${blogSerif.variable}`}>
      <AmbientScene />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="blog-header">
        <Link className="brand" href="/" aria-label="Digital Vision Startseite">
          <DigitalVisionLogo size="sm" showTagline={false} />
        </Link>
        <nav className="blog-header-nav" aria-label="Blog Navigation">
          <Link href="/blog">Blog</Link>
          <Link href="/#leistungen">Leistungen</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <Link className="header-cta" href="/#kontakt">
          Projekt starten
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </header>

      <article className="blog-article-shell">
        <Link className="blog-back-link" href="/blog">
          <ArrowLeft size={16} aria-hidden="true" />
          Zurück zum Blog
        </Link>

        <header className="blog-article-hero">
          <p className="eyebrow">{post.category}</p>
          <h1 className={titleClassName}>
            <span className="blog-article-title-main">{titleLines.firstLine}</span>
            <span className="blog-article-title-sub">{titleLines.secondLine}</span>
          </h1>
          <p>{post.description}</p>
          <div className="blog-article-meta">
            <span>{dateFormatter.format(new Date(post.date))}</span>
            <span>
              <Clock size={15} aria-hidden="true" />
              {post.readingTime}
            </span>
            <span>Thema: {post.focusKeyword}</span>
          </div>
        </header>

        <figure className="blog-article-cover">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1120}
            height={630}
            sizes="(max-width: 760px) calc(100vw - 32px), 1040px"
            priority
          />
        </figure>

        <div className="blog-article-layout">
          <aside className="blog-article-sidebar" aria-label="Artikelübersicht">
            <div className="blog-sidebar-card">
              <span className="blog-sidebar-label">In diesem Artikel</span>
              <nav>
                {post.sections.map((section, index) => (
                  <a href={`#${getSectionId(index)}`} key={section.heading}>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
            <div className="blog-sidebar-card blog-sidebar-cta">
              <span className="blog-sidebar-label">Digital Vision</span>
              <strong>Website oder System geplant?</strong>
              <p>Wir sortieren Struktur, Inhalte und Funktionen vor der Umsetzung.</p>
              <Link className="light-cta" href="/#kontakt">
                Projekt anfragen
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <div className="blog-article-main">
            <section className="blog-takeaways" aria-label="Das Wichtigste">
              <h2>Das Wichtigste kurz gesagt</h2>
              <div className="blog-takeaway-grid">
                {post.takeaways.map((takeaway) => (
                  <div className="blog-takeaway" key={takeaway}>
                    <Check size={18} aria-hidden="true" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="blog-article-content">
              {post.sections.map((section, index) => (
                <section
                  className="blog-content-section"
                  id={getSectionId(index)}
                  key={section.heading}
                >
                  <h2 className={getSectionHeadingClassName(section.heading)}>
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="blog-faq-section">
              <p className="eyebrow">FAQ</p>
              <h2>Häufige Fragen</h2>
              <div className="blog-faq-list">
                {post.faq.map((entry) => (
                  <div className="blog-faq-item" key={entry.question}>
                    <h3>{entry.question}</h3>
                    <p>{entry.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      <section className="blog-section blog-related-section">
        <div className="section-heading">
          <p className="eyebrow">Weiterlesen</p>
          <h2>Passende Artikel für dein Projekt.</h2>
        </div>
        <div className="blog-related-list">
          {relatedPosts.map((relatedPost) => (
            <Link
              className="blog-list-card blog-related-card"
              href={`/blog/${relatedPost.slug}`}
              key={relatedPost.slug}
            >
              <span className="blog-list-visual">
                <Image
                  className="blog-list-image"
                  src={relatedPost.image}
                  alt={relatedPost.imageAlt}
                  width={480}
                  height={270}
                  sizes="(max-width: 760px) calc(100vw - 32px), 230px"
                />
                <span className="blog-list-visual-label">{relatedPost.category}</span>
              </span>
              <span className="blog-list-content">
                <span className="blog-card-meta">
                  <span>{relatedPost.category}</span>
                  <span>
                    <Clock size={15} aria-hidden="true" />
                    {relatedPost.readingTime}
                  </span>
                </span>
                <span className="blog-list-title">{relatedPost.title}</span>
                <span className="blog-list-excerpt">{relatedPost.excerpt}</span>
                <span className="blog-card-link">
                  Artikel lesen
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
