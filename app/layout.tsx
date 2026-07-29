import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://www.digitalvision.site";
const siteTitle = "DigitalVision | Webseiten, die verkaufen";
const siteDescription =
  "Visionäre Webdesign-Agentur für moderne Homepages, SEO und Verwaltungssysteme.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: "%s | DigitalVision",
  },
  description: siteDescription,
  keywords: [
    "Webdesign Agentur",
    "SEO Agentur",
    "Webseite erstellen lassen",
    "Verwaltungssystem",
    "Google Ranking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: "DigitalVision",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "G80-7ruT7B78Yh4k4-bjmNiG1loSi3RICf2Z760M9q4",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DigitalVision",
  url: baseUrl,
  description: siteDescription,
  telephone: "+491788324883",
  email: "info@digitalvision.site",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Erfurter Straße 16",
    postalCode: "41069",
    addressLocality: "Mönchengladbach",
    addressCountry: "DE",
  },
  areaServed: "DE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
