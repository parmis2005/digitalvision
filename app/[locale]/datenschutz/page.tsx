import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).legal.datenschutz;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/datenschutz"),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DatenschutzPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const legal = getDictionary(locale).legal;
  const t = legal.datenschutz;

  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <p className="eyebrow">{legal.eyebrow}</p>
        <h1>{t.title}</h1>
        {legal.translationNote ? <p>{legal.translationNote}</p> : null}

        {t.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.blocks.map((block, index) => {
              if (block.lines) {
                return (
                  <p key={index}>
                    {block.lines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                );
              }

              return (
                <p key={index}>
                  {block.strong ? (
                    <>
                      <strong>{block.strong}</strong>{" "}
                    </>
                  ) : null}
                  {block.text}
                </p>
              );
            })}
          </section>
        ))}

        <Link className="legal-back-link" href={localePath(locale, "/")}>
          {legal.backToHome}
        </Link>
      </div>
    </main>
  );
}
