import Link from "next/link";
import { headers } from "next/headers";
import { getDictionary, localePath, resolveLocale } from "../../lib/i18n";

export default async function LocaleNotFound() {
  const requestHeaders = await headers();
  const locale = resolveLocale(requestHeaders.get("x-locale") ?? undefined);
  const t = getDictionary(locale);

  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <p className="eyebrow">{t.notFound.eyebrow}</p>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <Link className="legal-back-link" href={localePath(locale, "/")}>
          {t.common.backToHome}
        </Link>
      </div>
    </main>
  );
}
