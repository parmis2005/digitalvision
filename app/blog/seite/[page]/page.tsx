import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPageCount,
  getBlogPageNumbers,
  getBlogPagePath,
  isValidBlogPage,
} from "../../../blog-pagination";
import { BlogPageContent } from "../../blog-page-content";

type PageProps = {
  params: Promise<{
    page: string;
  }>;
};

const title = "Blog: Websites, Systeme & digitale Auftritte";
const description =
  "DigitalVision Blog mit praxisnahen Artikeln zu Websites, Online-Shops, Branchenauftritten, digitalen Abläufen und Systemen.";

function parsePage(value: string) {
  const page = Number(value);
  return Number.isInteger(page) ? page : null;
}

export function generateStaticParams() {
  return getBlogPageNumbers()
    .filter((page) => page > 1)
    .map((page) => ({
      page: String(page),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  const currentPage = parsePage(page);

  if (!currentPage || currentPage < 2 || !isValidBlogPage(currentPage)) {
    return {};
  }

  const pageTitle = `${title} - Seite ${currentPage}`;
  const url = getBlogPagePath(currentPage);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}

export default async function BlogPaginatedPage({ params }: PageProps) {
  const { page } = await params;
  const currentPage = parsePage(page);
  const pageCount = getBlogPageCount();

  if (!currentPage || currentPage < 2 || currentPage > pageCount) {
    notFound();
  }

  return <BlogPageContent currentPage={currentPage} />;
}
