import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { AmbientScene } from "../../ambient-scene";
import { DigitalVisionLogo } from "../../digitalvision-logo";
import { blogPosts, getBlogPost, getRelatedPosts } from "../../blog-data";

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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
      name: "DigitalVision",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DigitalVision",
      url: baseUrl,
    },
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
    <main className="blog-page blog-article-page">
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
        <Link className="brand" href="/" aria-label="DigitalVision Startseite">
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
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="blog-article-meta">
            <span>{dateFormatter.format(new Date(post.date))}</span>
            <span>
              <Clock size={15} aria-hidden="true" />
              {post.readingTime}
            </span>
            <span>Fokus: {post.focusKeyword}</span>
          </div>
        </header>

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
          {post.sections.map((section) => (
            <section className="blog-content-section" key={section.heading}>
              <h2>{section.heading}</h2>
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
      </article>

      <section className="blog-section blog-related-section">
        <div className="section-heading">
          <p className="eyebrow">Weiterlesen</p>
          <h2>Passende Artikel für dein Projekt.</h2>
        </div>
        <div className="blog-grid">
          {relatedPosts.map((relatedPost) => (
            <Link className="blog-card" href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
              <span className="blog-card-meta">
                {relatedPost.category} · {relatedPost.readingTime}
              </span>
              <h2>{relatedPost.title}</h2>
              <p>{relatedPost.excerpt}</p>
              <span className="blog-card-link">
                Artikel lesen
                <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
