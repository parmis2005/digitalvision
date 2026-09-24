import type { Metadata } from "next";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";
import { BlogPageContent } from "./blog-page-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).blog;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/blog"),
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localePath(locale, "/blog"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  return <BlogPageContent locale={locale} currentPage={1} />;
}
