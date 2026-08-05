import type { Metadata } from "next";
import { InfoBackLink } from "../info-back-link";

const title = "Verwaltungssysteme";
const description =
  "Infoseite zu Verwaltungssystemen mit Prozessanalyse, Systemstruktur, Modulen, Umsetzung und Betreuung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/verwaltungssystem-info",
  },
  openGraph: {
    title,
    description,
    url: "/verwaltungssystem-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function VerwaltungssystemInfoPage() {
  return (
    <main className="verwaltungssystem-info-page">
      <InfoBackLink />
      <iframe
        className="verwaltungssystem-info-frame"
        src="/verwaltungssystem-info-preview/index.html"
        title="Verwaltungssysteme Info"
      />
    </main>
  );
}
