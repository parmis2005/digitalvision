import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Check,
  Coins,
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
import { SiteHeader } from "../site-header";
import styles from "./seo-info.module.css";

const title = "SEO & Google-Ranking";
const description =
  "Kurze Infoseite zu SEO, Ranking-Faktoren, Prozess und Sichtbarkeit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/seo-info",
  },
  openGraph: {
    title,
    description,
    url: "/seo-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

function cx(...names: string[]) {
  return names.map((name) => styles[name]).join(" ");
}

const FACTORS = [
  {
    Icon: Link2,
    title: "Backlinks",
    text: "Backlinks wirken wie Empfehlungen von außen. Entscheidend sind Relevanz, Qualität und ein natürliches Linkprofil statt möglichst vieler schwacher Verweise.",
  },
  {
    Icon: PenLine,
    title: "Content-Qualität",
    text: "Gute Inhalte treffen die Suchintention, nutzen klare Begriffe und beantworten die Fragen, die vor einer Anfrage wirklich wichtig sind.",
  },
  {
    Icon: Zap,
    title: "Technische Basis",
    text: "Indexierung, Crawling, Core Web Vitals, Weiterleitungen und strukturierte Daten sorgen dafür, dass Suchmaschinen deine Seiten sauber erfassen.",
  },
];

const BASICS = [
  { Icon: TrendingUp, title: "Nachhaltiger Traffic", text: "Sichtbarkeit wächst langfristig, ohne dass jeder Klick bezahlt werden muss." },
  { Icon: Target, title: "Suchintention treffen", text: "Gute SEO beantwortet exakt die Frage, mit der Nutzer auf Google starten." },
  { Icon: Trophy, title: "Autorität stärken", text: "Expertise, lokale Signale und saubere Quellenlogik machen Rankings belastbarer." },
  { Icon: Coins, title: "Besserer ROI", text: "Organischer Traffic kann über Monate und Jahre wirtschaftlich arbeiten." },
];

const OFFER = [
  {
    Icon: ShieldCheck,
    title: "SEO-Audit",
    text: "Wir prüfen Technik, Inhalte, Wettbewerb und vorhandene Rankings. Daraus entsteht eine klare Prioritätenliste statt unübersichtlicher Einzelmaßnahmen.",
  },
  {
    Icon: Layers,
    title: "Informationsarchitektur",
    text: "Wir ordnen Themen, interne Links und Landingpages so, dass Google klare Zusammenhänge erkennt.",
  },
  {
    Icon: PenLine,
    title: "Content-Optimierung",
    text: "Wir entwickeln Inhalte, Meta-Daten und Landingpages so weiter, dass sie Suchintention, Vertrauen und Anfragefokus verbinden.",
  },
  {
    Icon: BarChart2,
    title: "Ranking-Reporting",
    text: "Wir messen Klicks, Impressionen, Positionen und technische Signale, damit nächste Schritte auf Daten basieren.",
  },
];

const PROCESS = [
  { n: "01", title: "Keyword-Cluster", text: "Wir bündeln Suchbegriffe nach Absicht, Region und wirtschaftlicher Relevanz." },
  { n: "02", title: "Indexierung", text: "Wir prüfen, ob wichtige Seiten erreichbar, schnell und technisch sauber auslieferbar sind." },
  { n: "03", title: "Landingpages", text: "Wir schärfen Inhalte, Meta-Daten und interne Links für konkrete Suchanfragen." },
  { n: "04", title: "Auswertung", text: "Wir vergleichen Sichtbarkeit, Klicks und Anfragen und leiten daraus neue Prioritäten ab." },
];

const FAQ = [
  { q: "Wie lange dauert es, bis SEO wirkt?", a: "Erste Signale sind oft nach 3 bis 6 Monaten sichtbar. Spürbare Verbesserungen hängen von Wettbewerb, Technik, Content und Domain-Stärke ab." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO baut organische Sichtbarkeit auf. SEA sind bezahlte Anzeigen, die sofort sichtbar sein können, aber pro Klick Budget verbrauchen." },
  { q: "Welche Bereiche gehören zu SEO?", a: "SEO besteht vor allem aus Technik, Content und Autorität. Dazu kommen lokale Signale, Nutzererfahrung, interne Verlinkung, Reporting und heute auch die Auffindbarkeit in KI-Suchen." },
  { q: "Sind Backlinks wirklich wichtig?", a: "Für wettbewerbsstarke Begriffe ja. Entscheidend ist aber Qualität: thematisch passende Empfehlungen sind wertvoller als viele schwache oder künstliche Links." },
  { q: "Wie oft sollte man Inhalte aktualisieren?", a: "Wichtige Seiten sollten regelmäßig geprüft werden, besonders wenn sich Angebote, Wettbewerb oder Suchintention verändern. Aktualität hilft, Inhalte relevant zu halten." },
  { q: "Wie wichtig sind KI-Suchen für SEO?", a: "KI-Suchen nutzen klare, gut strukturierte und vertrauenswürdige Inhalte. Wer Themen verständlich erklärt, Quellenlogik berücksichtigt und technische Hürden reduziert, verbessert auch dort seine Chancen." },
  { q: "Was kostet SEO?", a: "Die Kosten hängen von Wettbewerb, Website-Größe, technischem Zustand, Content-Bedarf und Ziel ab. Kleine Projekte brauchen weniger Aufwand, stark umkämpfte Märkte benötigen meist laufende Optimierung." },
  { q: "Was ist wichtiger: Technik, Content oder Links?", a: "Die Reihenfolge ist pragmatisch: erst technische Basis und Crawlbarkeit, dann hilfreiche Inhalte, danach Autorität durch Links, Erwähnungen, Bewertungen und Vertrauen." },
];

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

export default function SeoInfoPage() {
  return (
    <main className="seo-info-page">
      <SiteHeader />
      <div className={styles.page}>
      <div className={styles.content}>
      <div className={styles["ambient-grid"]} aria-hidden="true" />

      <section id="top" className={styles.hero}>
        <div className={styles["hero-copy"]}>
          <div className={styles["hero-statement"]}>
            <Link
              className="digital-vision-info-back-link"
              href="/#leistungen"
              aria-label="Zurück zu Digital Vision"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </Link>
            <h1>
              <span>SEO klar verstehen.</span>
            </h1>
          </div>

          <div className={styles["hero-focus-panel"]} aria-label="SEO Fokus">
            <div className={styles["focus-topbar"]}>
              <span />
              <span />
              <span />
              <strong>SEO Leitfaden</strong>
              <em>Keywords · Indexierung · Reporting</em>
            </div>

            {[
              ["01", "Keyword-Check", "Suchbegriffe nach Priorität ordnen"],
              ["02", "Indexierung", "Technische Hürden sichtbar machen"],
              ["03", "Reporting", "Sichtbarkeit und Klicks auswerten"],
            ].map(([step, title, text]) => (
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
              Angebot ansehen
              <ArrowRight size={18} />
            </a>
            <a className={`${styles["secondary-button"]} digital-vision-light-cta`} href="/#kontakt">
              Kontakt Anfrage
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <p className={styles["hero-note"]}>Keyword-Cluster. Indexierung. Landingpages. Reporting.</p>
        </div>

        <div className={styles["hero-visual"]} aria-hidden="true">
          <div className={styles["signal-stage"]}>
            <div className={styles["seo-console"]}>
              <div className={styles["console-topbar"]}>
                <span />
                <span />
                <span />
                <strong>SEO Fahrplan</strong>
              </div>

              <div className={styles["search-card"]}>
                <div className={styles["search-pill"]}>
                  <Search size={16} />
                  <span>bessere google rankings lokal</span>
                </div>
                <div className={styles["search-score"]}>
                  <span>SEO Score</span>
                  <strong>94</strong>
                </div>
              </div>

              <div className={styles["serp-list"]}>
                <div className={cx("serp-row", "active")}>
                  <span>01</span>
                  <div>
                    <strong>Nutzerfrage verstehen</strong>
                    <small>Inhalte passend zur Suche ausrichten</small>
                  </div>
                </div>
                <div className={styles["serp-row"]}>
                  <span>02</span>
                  <div>
                    <strong>Seitenstruktur verbessern</strong>
                    <small>Wichtige Inhalte sinnvoll verbinden</small>
                  </div>
                </div>
                <div className={styles["serp-row"]}>
                  <span>03</span>
                  <div>
                    <strong>Website schneller machen</strong>
                    <small>Mobil, stabil und technisch sauber</small>
                  </div>
                </div>
              </div>

              <div className={styles["growth-panel"]}>
                <div>
                  <span>Sichtbarkeit</span>
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
              <span>Keywords</span>
              <strong>+37</strong>
            </div>
            <div className={cx("floating-kpi", "kpi-two")}>
              <span>Anfragen</span>
              <strong>+31%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["metric-strip"]} aria-label="SEO Kennzahlen">
        {[
          ["Über 5 Milliarden", "Google-Suchanfragen werden täglich gestellt"],
          ["Erste Seite", "Die besten Positionen erhalten die wichtigsten Klicks"],
          ["Organische Sichtbarkeit", "SEO wirkt langfristig ohne laufende Klickkosten"],
          ["Lokale Suche", "Regionale Rankings machen Anfragen messbar"],
        ].map(([value, label]) => (
          <div className={styles.metric} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="angebot" className={cx("section", "dark-band", "left-heading-section", "offer-section")}>
        <SectionHeading
          eyebrow="Unser Angebot"
          title="Wir machen Suchanfragen, Rankings und nächste SEO-Schritte sichtbar."
          text="Wir prüfen Suchbegriffe, Indexierung, Inhalte und Rankings und setzen zuerst die Maßnahmen um, die deine Auffindbarkeit messbar verbessern."
        />
        <div className={cx("service-grid", "four")}>
          {OFFER.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="grundlagen" className={cx("section", "split-section")}>
        <div className={styles["split-copy"]}>
          <Eyebrow>Was ist SEO?</Eyebrow>
          <h2>Organisch sichtbar werden, ohne jeden Klick zu bezahlen.</h2>
          <p>
            SEO macht deine Seiten für konkrete Suchanfragen auffindbar. Entscheidend ist, welche Themen gesucht werden und welche Seite darauf die beste Antwort gibt.
          </p>
        </div>
        <div className={styles["feature-list"]}>
          {BASICS.map(({ Icon, title, text }) => (
            <article className={styles["feature-item"]} key={title}>
              <Icon size={20} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faktoren" className={cx("section", "left-heading-section", "center-heading-section")}>
        <SectionHeading
          eyebrow="Ranking-Signale"
          title="Die Faktoren hinter guten Google-Positionen."
          text="Wichtig sind Suchintention, Indexierbarkeit, thematische Tiefe und externe Signale. Daraus entsteht eine klare SEO-Priorität."
        />
        <div className={styles["service-grid"]}>
          {FACTORS.map(({ Icon, title, text }) => (
            <article className={styles["service-card"]} key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prozess" className={cx("section", "process-section")}>
        <SectionHeading eyebrow="Prozess" title="Vom Suchbegriff zur optimierten Landingpage." compact />
        <div className={styles["process-grid"]}>
          {PROCESS.map((step) => (
            <article className={styles["process-step"]} key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={cx("section", "faq-section")}>
        <SectionHeading eyebrow="FAQ" title="Antworten zu Rankings, Sichtbarkeit und SEO-Aufwand." compact />
        <div className={styles["faq-list"]}>
          {FAQ.slice(0, 4).map((item) => (
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
          <Eyebrow>Projekt anfragen</Eyebrow>
          <h2>Bereit für mehr Sichtbarkeit und klare SEO-Prioritäten?</h2>
          <p>
            Wenn du wissen willst, welche Suchbegriffe realistisch sind, starten wir mit Keyword-Cluster, Technikcheck und Prioritätenliste.
          </p>
        </div>
        <div className={styles["contact-card"]}>
          {["SEO-Audit", "Content-Struktur", "Lokale Sichtbarkeit"].map((item) => (
            <div className={styles["contact-choice"]} key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className={styles["secondary-button"]} href="/#kontakt">
            Kontakt Anfrage
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      </div>
      </div>
    </main>
  );
}
