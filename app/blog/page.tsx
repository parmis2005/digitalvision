import type { Metadata } from "next";
import { BlogPageContent } from "./blog-page-content";

const title = "Blog: Websites, Systeme & digitale Auftritte";
const description =
  "Digital Vision Blog mit praxisnahen Artikeln zu Websites, Online-Shops, Branchenauftritten, digitalen Abläufen und Systemen.";

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
  return <BlogPageContent currentPage={1} />;
}
