import type { Metadata } from "next";
import { InfoPreviewFrame } from "../info-preview-frame";

const title = "Webseiten-Erstellung";
const description =
  "Infoseite zu Webseiten-Erstellung mit Konzept, Design, Struktur, Launch und Betreuung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/webseite-info",
  },
  openGraph: {
    title,
    description,
    url: "/webseite-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WebseiteInfoPage() {
  return (
    <main className="webseite-info-page">
      <InfoPreviewFrame
        className="webseite-info-frame"
        hideHeroEyebrow
        src="/webseite-info-preview/index.html"
        title="Webseiten-Erstellung Info"
      />
    </main>
  );
}
