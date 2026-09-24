import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).legal.impressum;

  return {
    title: {
      absolute: t.metaTitle,
    },
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/impressum"),
    robots: {
      index: true,
      follow: true,
    },
  };
}

function Lines({ lines }: { lines: string[] }) {
  return (
    <p>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  );
}

export default async function ImpressumPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const legal = getDictionary(locale).legal;
  const t = legal.impressum;

  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <p className="eyebrow">{legal.eyebrow}</p>
        <h1>{t.title}</h1>
        {legal.translationNote ? <p>{legal.translationNote}</p> : null}

        <section>
          <h2>{t.providerTitle}</h2>
          <Lines lines={t.providerLines} />
        </section>

        <section>
          <h2>{t.contactTitle}</h2>
          <Lines lines={t.contactLines} />
        </section>

        <section>
          <h2>{t.vatTitle}</h2>
          <p>{t.vatText}</p>
        </section>

        <section>
          <h2>{t.responsibleTitle}</h2>
          <Lines lines={t.responsibleLines} />
        </section>

        <section>
          <h2>{t.disputeTitle}</h2>
          <p>
            {t.disputeBefore}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            {t.disputeAfter}
          </p>
        </section>

        <Link className="legal-back-link" href={localePath(locale, "/")}>
          {legal.backToHome}
        </Link>
      </div>
    </main>
  );
}
