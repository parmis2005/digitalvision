import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webseiten-Erstellung | DigitalVision",
  description:
    "Infoseite zu Webseiten-Erstellung mit Konzept, Design, Struktur, Launch und Betreuung.",
};

export default function WebseiteInfoPage() {
  return (
    <main className="webseite-info-page">
      <iframe
        className="webseite-info-frame"
        src="/webseite-info-preview/index.html"
        title="Webseiten-Erstellung Info"
      />
    </main>
  );
}
