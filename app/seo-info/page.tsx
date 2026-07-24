import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Google-Ranking | DigitalVision",
  description:
    "SEO-Infoseite mit Grundlagen, Ranking-Faktoren, Optimierung, Prozess und Tools.",
};

export default function SeoInfoPage() {
  return (
    <main className="seo-info-page">
      <iframe
        className="seo-info-frame"
        src="/seo-info-preview/index.html"
        title="SEO & Google-Ranking Info"
      />
    </main>
  );
}
