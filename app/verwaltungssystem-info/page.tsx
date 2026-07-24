import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verwaltungssysteme | DigitalVision",
  description:
    "Infoseite zu Verwaltungssystemen mit Prozessanalyse, Systemstruktur, Modulen, Umsetzung und Betreuung.",
};

export default function VerwaltungssystemInfoPage() {
  return (
    <main className="verwaltungssystem-info-page">
      <iframe
        className="verwaltungssystem-info-frame"
        src="/verwaltungssystem-info-preview/index.html"
        title="Verwaltungssysteme Info"
      />
    </main>
  );
}
