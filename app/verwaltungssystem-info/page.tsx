import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  CalendarDays,
  Check,
  DatabaseZap,
  FileCheck2,
  Files,
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
import { SiteHeader } from "../site-header";
import styles from "./verwaltungssystem-info.module.css";

const title = "Verwaltungssysteme";
const description =
  "Infoseite zu Verwaltungssystemen mit Prozessanalyse, Systemstruktur, Modulen, Umsetzung und Betreuung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/verwaltungssystem-info",
  },
  openGraph: {
    title,
    description,
    url: "/verwaltungssystem-info",
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
    Icon: DatabaseZap,
    title: "Saubere Datenbasis",
    text: "Ein gutes Verwaltungssystem bündelt Kundendaten, Dokumente, Aufgaben und Statuswerte strukturiert. Dadurch entstehen weniger Dubletten, weniger Suchaufwand und verlässlichere Entscheidungen.",
  },
  {
    Icon: Workflow,
    title: "Klare Prozesslogik",
    text: "Wiederkehrende Abläufe werden nicht jedes Mal neu improvisiert. Zustände, Verantwortlichkeiten, Freigaben und nächste Schritte sind für alle Beteiligten nachvollziehbar.",
  },
  {
    Icon: Lock,
    title: "Rollen & Sicherheit",
    text: "Nicht jede Person braucht Zugriff auf alles. Berechtigungen, sensible Daten, Änderungsverläufe und sichere Ablage gehören deshalb von Anfang an zur Systemstruktur.",
  },
];

const BASICS = [
  { Icon: LayoutDashboard, title: "Zentrale Übersicht", text: "Wichtige Vorgänge liegen nicht mehr verstreut in Tabellen, E-Mails und einzelnen Tools." },
  { Icon: Zap, title: "Weniger Handarbeit", text: "Routineaufgaben, Erinnerungen und Statuswechsel können standardisiert oder automatisiert werden." },
  { Icon: Target, title: "Klare Zuständigkeit", text: "Jeder Vorgang hat einen Status, eine verantwortliche Person und den nächsten Schritt." },
  { Icon: TrendingUp, title: "Skalierbare Abläufe", text: "Wenn mehr Kunden, Dokumente oder Anfragen dazukommen, bleibt die Verwaltung steuerbar." },
];

const OFFER = [
  {
    Icon: ShieldCheck,
    title: "Prozessanalyse",
    text: "Wir erfassen reale Arbeitsschritte, Medienbrüche und wiederkehrende Entscheidungen direkt aus dem Alltag.",
  },
  {
    Icon: Layers,
    title: "Systemstruktur",
    text: "Wir planen Datensätze, Statuswerte, Ansichten und Verknüpfungen passend zu euren Vorgängen.",
  },
  {
    Icon: Workflow,
    title: "Umsetzung",
    text: "Wir entwickeln die wichtigsten Masken, Workflows und Auswertungen zuerst als nutzbaren Kern.",
  },
  {
    Icon: BarChart2,
    title: "Einführung & Auswertung",
    text: "Wir begleiten den Start, prüfen Nutzungsmuster und verbessern Rollen, Felder und Abläufe gezielt weiter.",
  },
];

const PROCESS = [
  { n: "01", title: "Abläufe aufnehmen", text: "Wir dokumentieren, welche Vorgänge, Rollen und Daten aktuell wirklich genutzt werden." },
  { n: "02", title: "Datenmodell", text: "Wir definieren Felder, Beziehungen, Statuswerte und Berechtigungen für den Systemkern." },
  { n: "03", title: "Pilotversion", text: "Wir bauen einen ersten nutzbaren Ablauf und testen ihn mit echten Fällen." },
  { n: "04", title: "Einführung", text: "Wir schulen die Nutzung, sammeln Feedback und ergänzen nur Funktionen mit klarem Nutzen." },
];

const FAQ = [
  { q: "Was ist ein Verwaltungssystem?", a: "Ein Verwaltungssystem ist eine digitale Arbeitsumgebung, in der Daten, Aufgaben, Dokumente, Termine und Prozesse zentral organisiert werden." },
  { q: "Warum bieten wir Verwaltungssysteme an?", a: "Weil viele Teams mit Tabellen, E-Mails und einzelnen Tools wachsen, bis Übersicht und Verantwortlichkeit verloren gehen. Ein passendes System bringt diese Abläufe wieder zusammen." },
  { q: "Warum ist das gut für Unternehmen?", a: "Es spart Zeit, reduziert Fehler, macht Zuständigkeiten sichtbar und schafft eine Grundlage, auf der Prozesse auch bei mehr Kunden, Aufgaben oder Dokumenten stabil bleiben." },
  { q: "Braucht jedes Unternehmen ein eigenes System?", a: "Nicht immer. Wenn Standardtools gut passen, sollten sie genutzt werden. Ein individuelles System lohnt sich, wenn Abläufe spezieller sind oder mehrere Tools dauerhaft verbunden werden müssen." },
  { q: "Ersetzt ein Verwaltungssystem alle vorhandenen Tools?", a: "Nicht zwangsläufig. Oft verbindet es bestehende Werkzeuge oder ersetzt nur die Bereiche, die den Arbeitsfluss ausbremsen." },
  { q: "Wie startet ein Projekt?", a: "Am Anfang steht eine Prozessanalyse. Danach werden die wichtigsten Module priorisiert, damit zuerst der Bereich umgesetzt wird, der den größten Alltagseffekt hat." },
  { q: "Wie wichtig ist Datenschutz?", a: "Sehr wichtig. Rollen, Rechte, Protokolle, sichere Ablage und der Umgang mit sensiblen Daten gehören bereits in die Planung." },
  { q: "Kann das System später erweitert werden?", a: "Ja. Ein sinnvoll aufgebautes Verwaltungssystem startet fokussiert und kann danach um weitere Module, Automationen oder Schnittstellen erweitert werden." },
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

export default function VerwaltungssystemInfoPage() {
  return (
    <main className="verwaltungssystem-info-page">
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
              <span>Verwaltungssysteme klar verstehen.</span>
            </h1>
          </div>

          <div className={styles["hero-system-panel"]} aria-label="Verwaltungssystem Nutzen">
            <div className={styles["system-panel-head"]}>
              <span><LayoutDashboard size={17} /></span>
              <div>
                <strong>Systemzentrale</strong>
                <small>Daten, Rollen und Vorgänge an einem Ort</small>
              </div>
            </div>
            <div className={styles["system-panel-grid"]}>
              {[
                ["8", "Module verbunden"],
                ["1", "Datenbasis"],
                ["0", "verstreute Listen"],
              ].map(([value, label]) => (
                <div className={styles["system-panel-tile"]} key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles["hero-actions"]}>
            <a className={styles["primary-button"]} href="#angebot">
              Angebot ansehen
              <ArrowRight size={18} />
            </a>
            <a className={`${styles["secondary-button"]} digital-vision-light-cta`} href="#kontakt">Projekt anfragen</a>
          </div>

          <p className={styles["hero-note"]}>Datenmodell. Statuslogik. Rollen. Pilotversion.</p>
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
                <strong>Systemzentrale</strong>
                <small>Jeder Vorgang fließt durch eine klare Struktur.</small>
              </div>

              {[
                { Icon: UsersRound, title: "Kunden", detail: "Kontakte & Verlauf", node: "node-a" },
                { Icon: Files, title: "Dokumente", detail: "Ablage & Versionen", node: "node-b" },
                { Icon: CalendarDays, title: "Fristen", detail: "Termine & Erinnerungen", node: "node-c" },
                { Icon: FileCheck2, title: "Freigaben", detail: "Status & Rechte", node: "node-d" },
                { Icon: BarChart2, title: "Reporting", detail: "Zahlen & Engpässe", node: "node-e" },
              ].map(({ Icon, title, detail, node }) => (
                <div className={cx("module-node", node)} key={title}>
                  <Icon size={20} />
                  <div>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["document-stack"]}>
              <span>Heute</span>
              <strong>12 Vorgänge</strong>
              <div />
              <div />
              <div />
            </div>

            <div className={styles["permissions-panel"]}>
              <Lock size={17} />
              <div>
                <strong>Rollen & Rechte</strong>
                <span>sauber getrennt</span>
              </div>
            </div>

            <div className={styles["workflow-ribbon"]}>
              {["Anfrage", "Prüfung", "Freigabe", "Abschluss"].map((step, index) => (
                <div className={styles["ribbon-step"]} key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles["metric-strip"]} aria-label="Verwaltungssystem Kennzahlen">
        {[
          ["Eine Datenbasis", "Kontakte, Dokumente und Aufgaben laufen zentral zusammen"],
          ["Klare Zustände", "Jeder Vorgang hat Status, Verantwortung und nächsten Schritt"],
          ["Weniger Handarbeit", "Routineaufgaben werden standardisiert oder automatisiert"],
          ["Messbare Abläufe", "Engpässe und Fortschritt werden über Kennzahlen sichtbar"],
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
          title={"Wir formen Abläufe zu klaren\nDatenmodellen und nutzbaren\nWorkflows."}
          text="Wir übersetzen wiederkehrende Arbeit in Datenmodelle, Ansichten und Workflows, die im Team tatsächlich nutzbar sind."
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
          <Eyebrow>Was ist ein Verwaltungssystem?</Eyebrow>
          <h2>Ein zentraler Ort für Daten, Aufgaben und Entscheidungen.</h2>
          <p>
            Ein Verwaltungssystem macht sichtbar, welcher Vorgang welchen Status hat, wer zuständig ist und welche Information noch fehlt.
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
          eyebrow="System-Faktoren"
          title="Was ein gutes Verwaltungssystem ausmacht."
          text="Wichtig sind ein stabiles Datenmodell, eindeutige Statuslogik und Rechte, die sensible Informationen schützen."
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
        <SectionHeading eyebrow="Prozess" title="Vom Arbeitsablauf zur getesteten Pilotversion." compact />
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
        <SectionHeading eyebrow="FAQ" title="Antworten zu Daten, Rollen und Systemstart." compact />
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
          <h2>Bereit für eine Verwaltung, die übersichtlich und skalierbar arbeitet?</h2>
          <p>
            Wenn Listen, E-Mails und Einzeltools zu unübersichtlich werden, starten wir mit Datenmodell, Rollenlogik und einem Pilotprozess.
          </p>
        </div>
        <div className={styles["contact-card"]}>
          {["Prozessanalyse", "Systemstruktur", "Module & Betreuung"].map((item) => (
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
