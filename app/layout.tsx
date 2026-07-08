import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigitalVision | Webseiten, die verkaufen",
  description:
    "Visionäre Webdesign-Agentur für moderne Homepages, SEO und Verwaltungssysteme.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
