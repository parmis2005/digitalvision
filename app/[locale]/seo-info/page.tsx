import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Check,
  Coins,
  House,
  Layers,
  Link2,
  PenLine,
  Plus,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";
import { SiteHeader } from "../../site-header";
import styles from "./seo-info.module.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).infoSeo;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/seo-info"),
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localePath(locale, "/seo-info"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}

function cx(...names: string[]) {
  return names.map((name) => styles[name]).join(" ");
}

const FACTOR_ICONS = [Link2, PenLine, Zap];
const BASIC_ICONS = [TrendingUp, Target, Trophy, Coins];
const OFFER_ICONS = [ShieldCheck, Layers, PenLine, BarChart2];

function Eyebrow({ children }: { children: string }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? cx("section-heading", "compact") : styles["section-heading"]}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default async function SeoInfoPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const shared = dictionary.infoShared;
  const t = dictionary.infoSeo;
  const contactHref = localePath(locale, "/#kontakt");

  return (
    <main className="seo-info-page">
      <SiteHeader locale={locale} />
      <div className={styles.page}>
      <div className={styles.content}>
      <div className={styles["ambient-grid"]} aria-hidden="true" />

      <section id="top" className={styles.hero}>
        <div className={styles["hero-copy"]}>
          <div className={styles["hero-statement"]}>
            <Link
              className="digital-vision-info-back-link"
              href={localePath(locale, "/#leistungen")}
              aria-label={shared.backAria}
            >
              <House size={18} aria-hidden="true" />
            </Link>
            <h1>
              <span>{t.heroTitle}</span>
            </h1>
          </div>

          <div className={styles["hero-focus-panel"]} aria-label={t.focusAria}>
            <div className={styles["focus-topbar"]}>
              <span />
              <span />
              <span />
              <strong>{t.focusTitle}</strong>
              <em>{t.focusSubtitle}</em>
            </div>

            {t.focusRows.map(({ step, title, text }) => (
              <div className={styles["focus-row"]} key={step}>
                <span>{step}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["hero-actions"]}>
            <a className={styles["primary-button"]} href="#angebot">
              {shared.viewOffer}
              <ArrowRight size={18} />
            </a>
            <a className={`${styles["secondary-button"]} digital-vision-light-cta`} href={contactHref}>
              {shared.contactRequest}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <p className={styles["hero-note"]}>{t.heroNote}</p>
        </div>

        <div className={styles["hero-visual"]} aria-hidden="true">
          <div className={styles["signal-stage"]}>
            <div className={styles["seo-console"]}>
              <div className={styles["console-topbar"]}>
                <span />
                <span />
                <span />
                <strong>{t.consoleTitle}</strong>
              </div>

              <div className={styles["search-card"]}>
                <div className={styles["search-pill"]}>
                  <Search size={16} />
                  <span>{t.searchQuery}</span>
                </div>
                <div className={styles["search-score"]}>
                  <span>{t.scoreLabel}</span>
                  <strong>94</strong>
                </div>
              </div>

              <div className={styles["serp-list"]}>
                {t.serpRows.map((row, index) => (
                  <div
                    className={index === 0 ? cx("serp-row", "active") : styles["serp-row"]}
                    key={row.title}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{row.title}</strong>
                      <small>{row.text}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles["growth-panel"]}>
                <div>
                  <span>{t.growthLabel}</span>
                  <strong>+48%</strong>
                </div>
                <svg viewBox="0 0 220 88" role="presentation" focusable="false">
                  <path className={styles["growth-grid-line"]} d="M0 64H220" />
                  <path className={styles["growth-grid-line"]} d="M0 34H220" />
                  <path className={styles["growth-area"]} d="M4 74 C42 72 52 54 86 56 C124 58 130 28 164 30 C190 31 198 18 216 14 V88 H4 Z" />
                  <path className={styles["growth-line"]} d="M4 74 C42 72 52 54 86 56 C124 58 130 28 164 30 C190 31 198 18 216 14" />
                </svg>
              </div>
            </div>

            <div className={cx("floating-kpi", "kpi-one")}>
              <span>{t.kpiKeywords}</span>
              <strong>+37</strong>
            </div>
            <div className={cx("floating-kpi", "kpi-two")}>
              <span>{t.kpiRequests}</span>
              <strong>+31%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["metric-strip"]} aria-label={t.metricsAria}>
        {t.metrics.map(([value, label]) => (
          <div className={styles.metric} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="angebot" className={cx("section", "dark-band", "left-heading-section", "offer-section")}>
        <SectionHeading eyebrow={shared.offerEyebrow} title={t.offerTitle} text={t.offerText} />
        <div className={cx("service-grid", "four")}>
          {t.offer.map(({ title, text }, index) => {
            const Icon = OFFER_ICONS[index] ?? ShieldCheck;
            return (
              <article className={cx("service-card", "compact-card")} key={title}>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="grundlagen" className={cx("section", "split-section")}>
        <div className={styles["split-copy"]}>
          <Eyebrow>{t.basicsEyebrow}</Eyebrow>
          <h2>{t.basicsTitle}</h2>
          <p>{t.basicsText}</p>
        </div>
        <div className={styles["feature-list"]}>
          {t.basics.map(({ title, text }, index) => {
            const Icon = BASIC_ICONS[index] ?? TrendingUp;
            return (
              <article className={styles["feature-item"]} key={title}>
                <Icon size={20} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="faktoren" className={cx("section", "left-heading-section", "center-heading-section")}>
        <SectionHeading eyebrow={t.factorsEyebrow} title={t.factorsTitle} text={t.factorsText} />
        <div className={styles["service-grid"]}>
          {t.factors.map(({ title, text }, index) => {
            const Icon = FACTOR_ICONS[index] ?? Link2;
            return (
              <article className={styles["service-card"]} key={title}>
                <Icon size={27} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="prozess" className={cx("section", "process-section")}>
        <SectionHeading eyebrow={shared.processEyebrow} title={t.processTitle} compact />
        <div className={styles["process-grid"]}>
          {t.process.map((step) => (
            <article className={styles["process-step"]} key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={cx("section", "faq-section")}>
        <SectionHeading eyebrow={shared.faqEyebrow} title={t.faqTitle} compact />
        <div className={styles["faq-list"]}>
          {t.faq.slice(0, 4).map((item) => (
            <details className={styles["faq-item"]} key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className={styles["faq-plus"]}><Plus size={15} /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className={styles["contact-section"]}>
        <div>
          <Eyebrow>{shared.contactEyebrow}</Eyebrow>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className={styles["contact-card"]}>
          {t.contactChoices.map((item) => (
            <div className={styles["contact-choice"]} key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className={styles["secondary-button"]} href={contactHref}>
            {shared.contactRequest}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      </div>
      </div>
    </main>
  );
}
