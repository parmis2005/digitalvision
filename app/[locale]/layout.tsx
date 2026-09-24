import type { Metadata } from "next";
import { FloatingBackToTop } from "../floating-back-to-top";
import { LanguageSwitch } from "../language-switch";
import "../globals.css";
import { TabTitleNudge } from "../tab-title-nudge";
import {
  getDictionary,
  htmlLang,
  isLocale,
  localePath,
  locales,
  openGraphLocale,
  pageAlternates,
  resolveLocale,
} from "../../lib/i18n";

const baseUrl = "https://www.digitalvision.site";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale;
  const t = getDictionary(locale).meta;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.siteTitle,
      template: "%s | Digital Vision",
    },
    description: t.siteDescription,
    keywords: t.keywords,
    alternates: pageAlternates(locale, "/"),
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale],
      url: localePath(locale, "/"),
      siteName: "Digital Vision",
      title: t.siteTitle,
      description: t.siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: t.siteTitle,
      description: t.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "G80-7ruT7B78Yh4k4-bjmNiG1loSi3RICf2Z760M9q4",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Digital Vision",
    url: baseUrl,
    description: t.meta.siteDescription,
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

  return (
    <html lang={htmlLang[locale]}>
      <body>
        {children}
        <LanguageSwitch
          locale={locale}
          label={t.common.languageSwitchLabel}
          name={t.common.languageSwitchName}
        />
        <FloatingBackToTop label={t.common.backToTopAria} />
        <TabTitleNudge awayTitle={t.meta.tabAwayTitle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
