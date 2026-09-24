import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Check,
  Coins,
  Globe,
  House,
  Layers,
  PenLine,
  Plus,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";
import { SiteHeader } from "../../site-header";
import styles from "./webseite-info.module.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).infoWeb;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/webseite-info"),
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localePath(locale, "/webseite-info"),
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

const FACTOR_ICONS = [PenLine, Layers, Zap];
const BASIC_ICONS = [Globe, ShieldCheck, Target, Coins];
const OFFER_ICONS = [ShieldCheck, Layers, PenLine, BarChart2];
const PROOF_ICONS = [ShieldCheck, Smartphone, Target];
const PREVIEW_TILE_ICONS = [Layers, Star, PenLine];

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

export default async function WebseiteInfoPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const shared = dictionary.infoShared;
  const t = dictionary.infoWeb;
  const contactHref = localePath(locale, "/#kontakt");

  return (
    <main className="webseite-info-page">
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
            <p>
              {t.heroTextLine1}
              <br />
              {t.heroTextLine2}
            </p>
          </div>

          <div className={styles["hero-proof-grid"]} aria-label={t.heroProofAria}>
            {t.heroProofs.map((proof, index) => {
              const Icon = PROOF_ICONS[index] ?? ShieldCheck;
              return (
                <div className={styles["hero-proof"]} key={proof.title}>
                  <Icon size={18} />
                  <strong>{proof.title}</strong>
                  <span>{proof.text}</span>
                </div>
              );
            })}
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
          <div className={styles["design-stage"]}>
            <div className={styles["browser-preview"]}>
              <div className={styles["browser-bar"]}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{t.previewDomain}</strong>
              </div>

              <div className={styles["site-preview"]}>
                <div className={styles["preview-hero"]}>
                  <span className={styles["preview-label"]}>{t.previewLabel}</span>
                  <div className={styles["preview-headline"]}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles["preview-copy"]}>
                    <span />
                    <span />
                  </div>
                  <div className={styles["preview-actions"]}>
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles["preview-content-grid"]}>
                  {t.previewTiles.map((tile, index) => {
                    const Icon = PREVIEW_TILE_ICONS[index] ?? Layers;
                    return (
                      <div
                        className={index === 0 ? cx("preview-tile", "wide") : styles["preview-tile"]}
                        key={tile}
                      >
                        <Icon size={20} />
                        <span>{tile}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles["phone-preview"]}>
              <div className={styles["phone-speaker"]} />
              <div className={styles["phone-screen"]}>
                <span className={styles["phone-pill"]} />
                <div className={styles["phone-lines"]}>
                  <span />
                  <span />
                </div>
                <div className={styles["phone-photo"]} />
                <div className={styles["phone-buttons"]}>
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className={styles["style-board"]}>
              <span>{t.styleBoard}</span>
              <div className={styles.swatches}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles["type-lines"]}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles["launch-card"]}>
              <Globe size={18} />
              <div>
                <strong>{t.launchTitle}</strong>
                <span>{t.launchText}</span>
              </div>
            </div>

            <div className={styles["content-map"]}>
              {t.contentMap.map(([left, right]) => (
                <div className={styles["map-row"]} key={left}>
                  <span>{left}</span>
                  <i />
                  <span>{right}</span>
                </div>
              ))}
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
            const Icon = BASIC_ICONS[index] ?? Globe;
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

      <section id="bausteine" className={cx("section", "left-heading-section", "center-heading-section")}>
        <SectionHeading eyebrow={t.factorsEyebrow} title={t.factorsTitle} text={t.factorsText} />
        <div className={styles["service-grid"]}>
          {t.factors.map(({ title, text }, index) => {
            const Icon = FACTOR_ICONS[index] ?? PenLine;
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
