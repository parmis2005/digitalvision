import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  CalendarDays,
  Check,
  DatabaseZap,
  FileCheck2,
  Files,
  House,
  LayoutDashboard,
  Layers,
  Lock,
  Plus,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";
import { getDictionary, localePath, pageAlternates, resolveLocale } from "../../../lib/i18n";
import { SiteHeader } from "../../site-header";
import styles from "./verwaltungssystem-info.module.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale).infoSystem;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, "/verwaltungssystem-info"),
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localePath(locale, "/verwaltungssystem-info"),
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

const FACTOR_ICONS = [DatabaseZap, Workflow, Lock];
const BASIC_ICONS = [LayoutDashboard, Zap, Target, TrendingUp];
const OFFER_ICONS = [ShieldCheck, Layers, Workflow, BarChart2];
const MODULE_ICONS = [UsersRound, Files, CalendarDays, FileCheck2, BarChart2];
const MODULE_NODES = ["node-a", "node-b", "node-c", "node-d", "node-e"];

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

export default async function VerwaltungssystemInfoPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const shared = dictionary.infoShared;
  const t = dictionary.infoSystem;
  const contactHref = localePath(locale, "/#kontakt");

  return (
    <main className="verwaltungssystem-info-page">
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

          <div className={styles["hero-system-panel"]} aria-label={t.panelAria}>
            <div className={styles["system-panel-head"]}>
              <span><LayoutDashboard size={17} /></span>
              <div>
                <strong>{t.panelTitle}</strong>
                <small>{t.panelText}</small>
              </div>
            </div>
            <div className={styles["system-panel-grid"]}>
              {t.panelTiles.map(([value, label]) => (
                <div className={styles["system-panel-tile"]} key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
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
          <div className={cx("signal-stage", "admin-stage")}>
            <div className={styles["admin-orbit"]}>
              <div className={cx("orbit-ring", "orbit-ring-one")} />
              <div className={cx("orbit-ring", "orbit-ring-two")} />
              <svg className={styles["hub-links"]} viewBox="0 0 640 500" role="presentation" focusable="false">
                <path d="M320 250L320 72" />
                <path d="M320 250L542 174" />
                <path d="M320 250L522 354" />
                <path d="M320 250L120 356" />
                <path d="M320 250L96 168" />
              </svg>

              <div className={styles["hub-core"]}>
                <span><LayoutDashboard size={30} /></span>
                <strong>{t.hubTitle}</strong>
                <small>{t.hubText}</small>
              </div>

              {t.modules.map(({ title, detail }, index) => {
                const Icon = MODULE_ICONS[index] ?? UsersRound;
                return (
                  <div className={cx("module-node", MODULE_NODES[index] ?? "node-a")} key={title}>
                    <Icon size={20} />
                    <div>
                      <strong>{title}</strong>
                      <span>{detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles["document-stack"]}>
              <span>{t.stackLabel}</span>
              <strong>{t.stackValue}</strong>
              <div />
              <div />
              <div />
            </div>

            <div className={styles["permissions-panel"]}>
              <Lock size={17} />
              <div>
                <strong>{t.permissionsTitle}</strong>
                <span>{t.permissionsText}</span>
              </div>
            </div>

            <div className={styles["workflow-ribbon"]}>
              {t.ribbon.map((step, index) => (
                <div className={styles["ribbon-step"]} key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
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
            const Icon = BASIC_ICONS[index] ?? LayoutDashboard;
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

      <section id="faktoren" className={cx("section", "center-heading-section")}>
        <SectionHeading eyebrow={t.factorsEyebrow} title={t.factorsTitle} text={t.factorsText} />
        <div className={styles["service-grid"]}>
          {t.factors.map(({ title, text }, index) => {
            const Icon = FACTOR_ICONS[index] ?? DatabaseZap;
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
