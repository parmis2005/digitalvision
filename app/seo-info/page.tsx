import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Check,
  Clock,
  Coins,
  Globe,
  Layers,
  Link2,
  Lock,
  Megaphone,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { SiteHeader } from "../site-header";
import styles from "./seo-info.module.css";

const title = "SEO & Google-Ranking";
const description =
  "SEO-Infoseite mit Grundlagen, Ranking-Faktoren, Optimierung, Prozess und Tools.";

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
    text: "Gute Inhalte beantworten echte Fragen, erklären ein Thema vollständig und sind klar gegliedert. So verstehen Nutzer, Suchmaschinen und KI-Systeme den Mehrwert schneller.",
  },
  {
    Icon: Zap,
    title: "Technische Basis",
    text: "Ladezeit, mobile Darstellung, Sicherheit, Crawlbarkeit und saubere Statuscodes bilden das Fundament. Technische Fehler bremsen Rankings oft, bevor Content wirken kann.",
  },
];

const BASICS = [
  { Icon: TrendingUp, title: "Nachhaltiger Traffic", text: "Sichtbarkeit wächst langfristig, ohne dass jeder Klick bezahlt werden muss." },
  { Icon: Target, title: "Suchintention treffen", text: "Gute SEO beantwortet exakt die Frage, mit der Nutzer auf Google starten." },
  { Icon: Trophy, title: "Vertrauen aufbauen", text: "Klare Inhalte, Technik und Signale machen aus Rankings echte Autorität." },
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
    title: "Website-Struktur",
    text: "Wir ordnen Seiten, interne Links und Inhalte so, dass Nutzer schneller zum Ziel kommen und Suchmaschinen die Relevanz besser verstehen.",
  },
  {
    Icon: PenLine,
    title: "Content-Optimierung",
    text: "Wir entwickeln Inhalte, Meta-Daten und Landingpages so weiter, dass sie Suchintention, Vertrauen und Anfragefokus verbinden.",
  },
  {
    Icon: BarChart2,
    title: "Messung & Betreuung",
    text: "Wir machen Fortschritte über Rankings, Klicks, technische Signale und Anfragen sichtbar und leiten daraus die nächsten Schritte ab.",
  },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Mobile-First" },
  { Icon: Lock, label: "HTTPS & Sicherheit" },
  { Icon: Target, label: "Suchintention" },
  { Icon: Clock, label: "UX & Verweildauer" },
  { Icon: Layers, label: "Saubere Seitenstruktur" },
  { Icon: RefreshCw, label: "Regelmäßige Updates" },
];

const ONPAGE = [
  { n: "01", title: "Title Tag", text: "50 bis 60 Zeichen, klares Hauptthema und ein Nutzenversprechen." },
  { n: "02", title: "Meta-Description", text: "120 bis 160 Zeichen, verständlicher Mehrwert und ein konkreter Klickanreiz." },
  { n: "03", title: "Überschriften", text: "Eine klare H1, logisch gegliederte H2/H3 und natürliche Begriffe rund um das Thema." },
  { n: "04", title: "Interne Links", text: "Wichtige Seiten werden logisch verbunden, damit Nutzer und Crawler schnell zum nächsten relevanten Inhalt finden." },
  { n: "05", title: "Bilder & Medien", text: "Komprimierte Medien, sprechende Dateinamen und beschreibende Alternativtexte verbessern Geschwindigkeit und Verständlichkeit." },
];

const OFFPAGE = [
  { Icon: Trophy, title: "Linkaufbau", text: "Relevante Backlinks zeigen Suchmaschinen, dass andere Quellen deine Inhalte als vertrauenswürdig einstufen." },
  { Icon: Megaphone, title: "Markenerwähnungen", text: "Auch Erwähnungen ohne direkten Link können Autorität stärken, wenn sie thematisch passend und glaubwürdig sind." },
  { Icon: Star, title: "Lokale Signale", text: "Bewertungen, ein gepflegtes Google Business Profile, Öffnungszeiten und Standortinformationen sind für lokale Rankings zentral." },
];

const PRACTICE = [
  { Icon: ShieldCheck, title: "SEO-Audit", text: "Ein Audit prüft Technik, Inhalte, Struktur, Wettbewerb und schnelle Hebel. Daraus entsteht eine klare Reihenfolge der nächsten Maßnahmen." },
  { Icon: Globe, title: "Local SEO", text: "Für regionale Anbieter zählen lokale Suchbegriffe, Karten-Ergebnisse, Bewertungen und konsistente Standortdaten besonders stark." },
  { Icon: Search, title: "Google + KI-Suchen", text: "Moderne Inhalte sollten nicht nur ranken, sondern auch von KI-Systemen verstanden, zusammengefasst und als Quelle erkannt werden können." },
  { Icon: BarChart2, title: "Reporting & KPIs", text: "Klicks, Impressionen, Rankings, technische Fehler und Anfragen müssen regelmäßig sichtbar sein, damit SEO steuerbar bleibt." },
];

const ERRORS = [
  { Icon: Search, title: "Suchintention ignorieren", text: "Ein Keyword reicht nicht, wenn die Seite die eigentliche Nutzerfrage verfehlt." },
  { Icon: PenLine, title: "Zu wenig Tiefe", text: "Oberflächliche Texte verlieren gegen Seiten, die ein Thema vollständig erklären." },
  { Icon: Globe, title: "Technik unterschätzen", text: "Langsame Seiten, fehlerhafte Weiterleitungen oder blockierte Inhalte verhindern, dass Suchmaschinen deine Seite sauber erfassen." },
  { Icon: BarChart2, title: "Black-Box-SEO akzeptieren", text: "Ohne transparente Daten, klare Aufgaben und regelmäßige Auswertung bleiben Fortschritte unsichtbar und Prioritäten geraten durcheinander." },
];

const PROCESS = [
  { n: "01", title: "Analyse", text: "Wir bewerten Keywords, Wettbewerb, Technik, bestehende Inhalte und lokale Chancen, bevor Maßnahmen priorisiert werden." },
  { n: "02", title: "Technik & Struktur", text: "Wir verbessern Crawlbarkeit, Ladezeit, interne Links und Seitenarchitektur als Grundlage für bessere Auffindbarkeit." },
  { n: "03", title: "Content", text: "Wir bauen Texte, Landingpages und Ratgeber so auf, dass sie Nutzerfragen beantworten und semantisch klar sind." },
  { n: "04", title: "Autorität & Messung", text: "Wir prüfen Backlinks, Erwähnungen, Bewertungen und KPIs, damit Fortschritte sichtbar und nächste Schritte ableitbar werden." },
];

const TOOLS = [
  {
    Icon: Search,
    name: "Google Search Console",
    tag: "Kostenlos",
    text: "Direkte Daten zu Klicks, Impressionen, Rankings und technischen Problemen.",
    detail: "Zeigt, über welche Suchanfragen Nutzer auf die Website kommen und welche Seiten bereits Sichtbarkeit aufbauen.",
  },
  {
    Icon: BarChart2,
    name: "SEO-Crawler",
    tag: "Audit",
    text: "Crawls zeigen defekte Links, Weiterleitungen, Statuscodes, Meta-Daten und technische Muster auf größeren Websites.",
    detail: "Findet technische Fehler, doppelte Inhalte, Weiterleitungen und fehlende SEO-Basics auf der Website.",
  },
  {
    Icon: Globe,
    name: "PageSpeed Insights",
    tag: "Performance",
    text: "Core Web Vitals und konkrete Ladezeitprobleme werden sichtbar, damit Technik gezielt verbessert werden kann.",
    detail: "Bewertet Ladezeit, Stabilität und mobile Nutzbarkeit, damit technische Schwächen gezielt verbessert werden können.",
  },
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
            <Link className="digital-vision-info-back-link" href="/">
              <ArrowLeft size={18} aria-hidden="true" />
              Zurück zu Digital Vision
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
              <em>Analyse · Umsetzung · Betreuung</em>
            </div>

            {[
              ["01", "Audit", "Potenziale und Probleme sichtbar machen"],
              ["02", "Umsetzung", "Technik und Inhalte gezielt verbessern"],
              ["03", "Betreuung", "Fortschritt messen und weiterentwickeln"],
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
            <a className={styles["secondary-button"]} href="#kontakt">Projekt anfragen</a>
          </div>

          <p className={styles["hero-note"]}>SEO-Audit. Struktur. Content. Messbare Betreuung.</p>
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
          title="Wir machen SEO verständlich, planbar und umsetzbar."
          text="Die Informationen auf dieser Seite zeigen die wichtigsten SEO-Bereiche. Genau daraus entsteht unser Angebot: Wir analysieren, priorisieren, optimieren und messen, was deiner Website mehr Sichtbarkeit und qualifizierte Anfragen bringen kann."
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
            Suchmaschinenoptimierung verbindet technische Basis, klare Inhalte und Vertrauen.
            Diese Basis setzen wir so ein, dass Sichtbarkeit nicht nur Besucher erreicht, sondern auch passende Anfragen vorbereitet.
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

      <section id="faktoren" className={cx("section", "left-heading-section")}>
        <SectionHeading
          eyebrow="Ranking-Signale"
          title="Die Faktoren hinter guten Google-Positionen."
          text="Google bewertet technische Qualität, hilfreiche Inhalte, Nutzererfahrung und Vertrauen. Wir ordnen diese Signale nach Wirkung, damit nicht beliebig optimiert wird, sondern dort, wo Sichtbarkeit und Anfragen realistisch wachsen können."
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
        <div className={styles["signal-list"]}>
          {SECONDARY_FACTORS.map(({ Icon, label }) => (
            <div className={styles["signal-item"]} key={label}>
              <Icon size={17} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="optimierung" className={cx("section", "split-section", "optimization-section", "left-heading-section")}>
        <div className={cx("split-copy", "sticky-copy")}>
          <Eyebrow>On-Page SEO</Eyebrow>
          <h2>Was wir direkt auf deiner Website optimieren.</h2>
          <p>
            On-Page SEO ordnet Texte, Meta-Daten, interne Links und Medien so, dass Nutzer
            und Suchmaschinen schnell verstehen, warum deine Seite relevant ist. Diese Bereiche lassen sich konkret planen, umsetzen und kontrollieren.
          </p>
        </div>
        <div className={styles["timeline-list"]}>
          {ONPAGE.map((item) => (
            <article className={styles["timeline-item"]} key={item.n}>
              <span>{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "dark-band", "left-heading-section")}>
        <SectionHeading
          eyebrow="Off-Page SEO"
          title="Autorität, die außerhalb deiner Website entsteht."
          text="Vertrauen entsteht nicht nur auf deiner eigenen Website. Wir berücksichtigen Empfehlungen, Erwähnungen, Bewertungen und lokale Signale, damit dein Angebot auch außerhalb der Website glaubwürdig wahrgenommen wird."
        />
        <div className={styles["service-grid"]}>
          {OFFPAGE.map(({ Icon, title, text }) => (
            <article className={styles["service-card"]} key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "left-heading-section", "practice-heading-section")}>
        <SectionHeading
          eyebrow="SEO in der Praxis"
          title={"Ein System aus Analyse, Struktur und messbarer Umsetzung."}
          text="Professionelle SEO funktioniert nicht als Einmalmaßnahme. Wir bauen einen wiederholbaren Prozess auf, der Analyse, Umsetzung und Auswertung verbindet."
        />
        <div className={cx("service-grid", "four")}>
          {PRACTICE.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "dark-band", "left-heading-section", "error-heading-section")}>
        <SectionHeading
          eyebrow="Häufige Fehler"
          title={"Was gute Rankings unnötig ausbremst."}
          text="Viele SEO-Probleme entstehen nicht durch fehlende Tools, sondern durch unklare Prioritäten. Deshalb beginnt unsere Arbeit mit einer sauberen Einordnung der wichtigsten Hebel."
        />
        <div className={cx("service-grid", "four")}>
          {ERRORS.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prozess" className={cx("section", "process-section")}>
        <SectionHeading eyebrow="Prozess" title="Unser Ablauf bis zur sichtbaren SEO-Struktur." compact />
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

      <section id="tools" className={cx("section", "packages-section")}>
        <SectionHeading eyebrow="Tools" title="Software, mit der wir Entscheidungen messbar machen." compact />
        <div className={styles["package-grid"]}>
          {TOOLS.map(({ Icon, name, tag, text, detail }) => (
            <article className={styles["package-card"]} key={name}>
              <Icon size={25} />
              <h3>{name}</h3>
              <p className={styles.price}>{tag}</p>
              <p>{text}</p>
              <details className={styles["tool-details"]}>
                <summary>
                  Details
                  <Plus size={15} />
                </summary>
                <div className={styles["tool-detail-popup"]}>
                  <p>{detail}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={cx("section", "faq-section")}>
        <SectionHeading eyebrow="FAQ" title="Antworten auf die wichtigsten SEO-Fragen." compact />
        <div className={styles["faq-list"]}>
          {FAQ.map((item) => (
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
            Wenn du SEO nicht nur verstehen, sondern konkret umsetzen möchtest, starten wir mit einer sauberen Analyse, einer verständlichen Seitenstruktur und Inhalten mit Anfragefokus.
          </p>
        </div>
        <div className={styles["contact-card"]}>
          {["SEO-Audit", "Content-Struktur", "Lokale Sichtbarkeit"].map((item) => (
            <div className={styles["contact-choice"]} key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className={styles["primary-button"]} href="#grundlagen">
            Zum Anfang
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      </div>
      </div>
    </main>
  );
}
