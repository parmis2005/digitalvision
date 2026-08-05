import type { Metadata } from "next";
import { InfoBackLink } from "../info-back-link";

const title = "SEO & Google-Ranking";
const description =
  "SEO-Infoseite mit Grundlagen, Ranking-Faktoren, Optimierung, Prozess und Tools.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/seo-info",
  },
  openGraph: {
    title,
    description,
    url: "/seo-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function SeoInfoPage() {
  return (
    <main className="seo-info-page">
      <InfoBackLink />
      <iframe
        className="seo-info-frame"
        src="/seo-info-preview/index.html"
        title="SEO & Google-Ranking Info"
      />
    </main>
  );
}
