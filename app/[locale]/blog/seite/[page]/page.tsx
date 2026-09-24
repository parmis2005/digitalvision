import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../../../lib/i18n";
import {
  getBlogPageCount,
  getBlogPageNumbers,
  getBlogPagePath,
  isValidBlogPage,
} from "../../../../blog-pagination";
import { BlogPageContent } from "../../blog-page-content";

type PageProps = {
  params: Promise<{
    locale: string;
    page: string;
  }>;
};

function parsePage(value: string) {
  const page = Number(value);
  return Number.isInteger(page) ? page : null;
}

export function generateStaticParams() {
  return getBlogPageNumbers("de")
    .filter((page) => page > 1)
    .map((page) => ({
      page: String(page),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, page } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).blog;
  const currentPage = parsePage(page);

  if (!currentPage || currentPage < 2 || !isValidBlogPage(currentPage, locale)) {
    return {};
  }

  const pageTitle = `${t.metaTitle} - ${t.pageSuffix} ${currentPage}`;
  const path = getBlogPagePath(currentPage);

  return {
    title: pageTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: pageTitle,
      description: t.metaDescription,
      url: localePath(locale, path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: t.metaDescription,
    },
  };
}

export default async function BlogPaginatedPage({ params }: PageProps) {
  const { locale: rawLocale, page } = await params;
  const locale = resolveLocale(rawLocale);
  const currentPage = parsePage(page);
  const pageCount = getBlogPageCount(locale);

  if (!currentPage || currentPage < 2 || currentPage > pageCount) {
    notFound();
  }

  return <BlogPageContent locale={locale} currentPage={currentPage} />;
}
