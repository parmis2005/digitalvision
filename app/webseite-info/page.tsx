import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Check,
  Coins,
  Globe,
  Layers,
  PenLine,
  Plus,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { SiteHeader } from "../site-header";
import styles from "./webseite-info.module.css";

const title = "Webseiten-Erstellung";
const description =
  "Infoseite zu Webseiten-Erstellung mit Konzept, Design, Struktur, Launch und Betreuung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/webseite-info",
  },
  openGraph: {
    title,
    description,
    url: "/webseite-info",
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
    Icon: PenLine,
    title: "Klares Design",
    text: "Gutes Webdesign setzt Hierarchie, Abstände, Kontraste und Bildsprache so ein, dass Besucher sofort Orientierung haben.",
  },
  {
    Icon: Layers,
    title: "Saubere Struktur",
    text: "Navigation, Abschnitte und Handlungsaufforderungen werden so aufgebaut, dass der nächste Schritt jederzeit sichtbar bleibt.",
  },
  {
    Icon: Zap,
    title: "Technische Qualität",
    text: "Responsives Layout, optimierte Medien, stabile Formulare und saubere Komponenten sorgen für eine verlässliche Nutzung.",
  },
];

const BASICS = [
  { Icon: Globe, title: "Immer erreichbar", text: "Eine Website ist dein digitaler Standort und beantwortet wichtige Fragen rund um die Uhr." },
  { Icon: ShieldCheck, title: "Schnelle Orientierung", text: "Besucher erkennen Leistungen, Ablauf und Kontaktwege ohne lange Suche." },
  { Icon: Target, title: "Klare Handlungen", text: "Buttons, Formulare und Kontaktpunkte führen gezielt zur passenden Anfrage." },
  { Icon: Coins, title: "Langfristiger Wert", text: "Eine gute Website kann über Jahre informieren, verkaufen und weitere Kanäle stützen." },
];

const OFFER = [
  {
    Icon: ShieldCheck,
    title: "Konzept & Beratung",
    text: "Wir klären Zielgruppe, Angebot, Inhalte und Prioritäten. So entsteht keine beliebige Website, sondern ein digitaler Auftritt mit klarer Aufgabe.",
  },
  {
    Icon: Layers,
    title: "Nutzerführung & Layout",
    text: "Wir gestalten Seitenaufbau, Blickführung und Kontaktpunkte so, dass Besucher ohne Umwege weiterkommen.",
  },
  {
    Icon: PenLine,
    title: "Inhalte & Botschaft",
    text: "Wir formulieren Texte, Abschnitte und Handlungsaufrufe so, dass dein Angebot klar, professionell und anfrageorientiert erklärt wird.",
  },
  {
    Icon: BarChart2,
    title: "Launch & Pflegeplan",
    text: "Wir veröffentlichen die Website, prüfen Formulare, Performance und Inhalte und planen sinnvolle Pflegepunkte.",
  },
];

const PROCESS = [
  { n: "01", title: "Inhalte sammeln", text: "Wir klären Leistungen, Nachweise, Bilder, Kontaktwege und alles, was Besucher wissen müssen." },
  { n: "02", title: "Seitenplan", text: "Wir legen fest, welche Unterseiten, Abschnitte und Aktionen der Webauftritt braucht." },
  { n: "03", title: "Interface-Aufbau", text: "Wir bauen Layouts, Komponenten und mobile Ansichten passend zur Marke." },
  { n: "04", title: "Veröffentlichung", text: "Wir testen Mobilansicht, Formulare, Ladezeit und rechtliche Pflichtseiten vor dem Start." },
];

const FAQ = [
  { q: "Warum braucht ein Unternehmen eine professionelle Website?", a: "Weil viele Kunden online zuerst prüfen, ob ein Anbieter seriös, erreichbar und passend ist. Eine gute Website beantwortet diese Fragen, bevor ein Kontakt entsteht." },
  { q: "Was ist der Unterschied zwischen Homepage und Website?", a: "Die Homepage ist meist die Startseite. Die Website ist der gesamte Webauftritt mit allen Unterseiten, Inhalten, Kontaktwegen und Funktionen." },
  { q: "Wie lange dauert eine neue Website?", a: "Eine kleine Website kann in wenigen Wochen entstehen. Umfangreichere Projekte dauern länger, weil Konzept, Texte, Design, Entwicklung, Feedback und Launch sauber abgestimmt werden müssen." },
  { q: "Was kostet eine Website?", a: "Die Kosten hängen von Umfang, Designanspruch, Textbedarf, Funktionen, CMS, Mehrsprachigkeit und Betreuung ab. Entscheidend ist, welche Aufgabe die Website erfüllen soll." },
  { q: "Brauche ich ein CMS?", a: "Ein CMS lohnt sich, wenn Inhalte regelmäßig gepflegt werden. Wenn Seiten selten geändert werden, kann eine schlanke statische Umsetzung schneller und wartungsarmer sein." },
  { q: "Warum ist Responsive Design so wichtig?", a: "Weil Besucher auf Smartphone, Tablet und Desktop dieselben Informationen finden und Kontakt aufnehmen können müssen. Mobile Probleme kosten Vertrauen und Anfragen." },
  { q: "Was passiert nach dem Launch?", a: "Nach dem Launch sollten Technik, Inhalte, Kontaktwege und Messdaten regelmäßig geprüft werden. So bleibt die Website aktuell und kann mit dem Unternehmen wachsen." },
  { q: "Kann eine Website später erweitert werden?", a: "Ja. Wenn Struktur und Technik sauber geplant sind, lassen sich neue Leistungen, Landingpages, Sprachen, Formulare oder Integrationen später gezielt ergänzen." },
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

export default function WebseiteInfoPage() {
  return (
    <main className="webseite-info-page">
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
              <span>Webseiten klar verstehen.</span>
            </h1>
            <p>
              Dein Webauftritt zeigt, wer du bist und was du anbietest.
              <br />
              Er zeigt, warum Besucher den nächsten Schritt mit dir gehen&nbsp;sollten.
            </p>
          </div>

          <div className={styles["hero-proof-grid"]} aria-label="Website Nutzen">
            {(
              [
                [ShieldCheck, "Vertrauen", "Seriöser erster Eindruck"],
                [Smartphone, "Mobil", "Sauber auf jedem Gerät"],
                [Target, "Anfragen", "Klare Wege zum Kontakt"],
              ] as const
            ).map(([Icon, title, text]) => (
              <div className={styles["hero-proof"]} key={title}>
                <Icon size={18} />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles["hero-actions"]}>
            <a className={styles["primary-button"]} href="#angebot">
              Angebot ansehen
              <ArrowRight size={18} />
            </a>
            <a className={`${styles["secondary-button"]} digital-vision-light-cta`} href="#kontakt">Projekt anfragen</a>
          </div>

          <p className={styles["hero-note"]}>Seitenplan. Designsystem. Inhalte. Launch-Check.</p>
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
                <strong>atelier-webseite.de</strong>
              </div>

              <div className={styles["site-preview"]}>
                <div className={styles["preview-hero"]}>
                  <span className={styles["preview-label"]}>Neue Website</span>
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
                  <div className={cx("preview-tile", "wide")}>
                    <Layers size={20} />
                    <span>Leistungen</span>
                  </div>
                  <div className={styles["preview-tile"]}>
                    <Star size={20} />
                    <span>Referenzen</span>
                  </div>
                  <div className={styles["preview-tile"]}>
                    <PenLine size={20} />
                    <span>Inhalte</span>
                  </div>
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
              <span>Designsystem</span>
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
                <strong>Launchbereit</strong>
                <span>Design, Inhalte und Technik abgestimmt</span>
              </div>
            </div>

            <div className={styles["content-map"]}>
              {[
                ["Start", "Leistungen"],
                ["Referenzen", "Kontakt"],
                ["Team", "FAQ"],
              ].map(([left, right]) => (
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

      <section className={styles["metric-strip"]} aria-label="Webseiten Kennzahlen">
        {[
          ["24/7 erreichbar", "Eine Website beantwortet wichtige Fragen auch außerhalb der Öffnungszeiten"],
          ["Mobile zuerst", "Besucher erwarten eine saubere Nutzung auf Smartphone, Tablet und Desktop"],
          ["Zentrale Basis", "Alle digitalen Kanäle können auf einen professionellen Webauftritt verweisen"],
          ["Messbare Anfragen", "Kontaktwege, Klicks und Inhalte lassen sich auswerten und verbessern"],
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
          title="Webseiten, die klar informieren und Anfragen erleichtern."
          text="Wir verbinden Inhalt, Design und Technik zu einem klaren Weg zur Anfrage."
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
          <Eyebrow>Was ist eine gute Website?</Eyebrow>
          <h2>Dein Angebot klar erklärt.</h2>
          <p>
            Eine gute Website beantwortet die wichtigsten Fragen direkt: Was bietest du an, für wen ist es geeignet und wie nimmt man Kontakt auf?
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

      <section id="bausteine" className={cx("section", "left-heading-section", "center-heading-section")}>
        <SectionHeading
          eyebrow="Wichtige Bausteine"
          title="Die Faktoren hinter einem starken Webauftritt."
          text="Entscheidend sind visuelle Führung, verständliche Inhalte und ein reibungsloser Weg zur Anfrage."
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
        <SectionHeading eyebrow="Prozess" title="Vom Seitenplan zur launchbereiten Website." compact />
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
        <SectionHeading eyebrow="FAQ" title="Antworten zu Umfang, Launch und Website-Pflege." compact />
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
          <h2>Bereit für eine Website, die dein Angebot klar erklärt?</h2>
          <p>
            Wenn deine Website klarer wirken soll, starten wir mit Seitenplan, Inhaltsstruktur, Designrichtung und Kontaktwegen.
          </p>
        </div>
        <div className={styles["contact-card"]}>
          {["Website-Konzept", "Webdesign", "Launch & Betreuung"].map((item) => (
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
