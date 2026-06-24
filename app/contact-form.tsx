"use client";

import { CSSProperties, FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CircleHelp,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  MonitorSmartphone,
  Plus,
  Search,
} from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";
type FormStep = "topic" | "services" | "calculator" | "booking" | "confirmation";

const projectTopics = [
  {
    key: "SEO",
    title: "SEO",
    text: "Bessere Rankings & mehr Traffic",
    icon: Search,
  },
  {
    key: "Webseite",
    title: "Webseite",
    text: "Neue Seite oder Relaunch",
    icon: MonitorSmartphone,
  },
  {
    key: "Verwaltungssystem",
    title: "Verwaltungssystem",
    text: "Individuelle Lösung",
    icon: LayoutDashboard,
  },
] as const;

const projectStepTwoConfigs = {
  SEO: {
    label: "Deine Hauptziele",
    helper: "(Mehrfachauswahl möglich)",
    options: [
      {
        key: "Mehr Traffic",
        title: "Mehr Traffic",
        text: "Mehr qualifizierte Besucher über Google",
      },
      {
        key: "Bessere Rankings",
        title: "Bessere Rankings",
        text: "Wichtige Suchbegriffe weiter nach vorne bringen",
      },
      {
        key: "Mehr Leads",
        title: "Mehr Leads",
        text: "Mehr Anfragen und Kontaktaufnahmen erzeugen",
      },
      {
        key: "Lokale Sichtbarkeit",
        title: "Lokale Sichtbarkeit",
        text: "In deiner Region besser gefunden werden",
      },
    ],
  },
  Webseite: {
    label: "Ich interessiere mich für:",
    options: [
      {
        key: "Neue Webseite",
        title: "Neue Webseite",
        text: "Kompletter Neuaufbau für dein Unternehmen",
      },
      {
        key: "Relaunch",
        title: "Relaunch",
        text: "Bestehende Webseite modernisieren",
      },
      {
        key: "Landingpage",
        title: "Landingpage",
        text: "Fokussierte Seite für Kampagnen und Anfragen",
      },
      {
        key: "Unternehmenswebseite",
        title: "Unternehmenswebseite",
        text: "Klare Struktur für Leistungen und Vertrauen",
      },
    ],
  },
  Verwaltungssystem: {
    label: "Welche Art von Verwaltungssystem suchst du?",
    helper: "(Mehrfachauswahl möglich, z. B. CRM, Lagerverwaltung oder Projektmanagement)",
    options: [
      {
        key: "Kundenverwaltung / CRM",
        title: "Kundenverwaltung / CRM",
        text: "Kontakte, Unternehmen und Vorgänge zentral verwalten",
      },
      {
        key: "Mitarbeiterverwaltung",
        title: "Mitarbeiterverwaltung",
        text: "Teams, Rollen und interne Abläufe strukturiert organisieren",
      },
      {
        key: "Lagerverwaltung",
        title: "Lagerverwaltung",
        text: "Bestände, Wareneingänge und Lagerprozesse im Blick behalten",
      },
      {
        key: "Terminverwaltung",
        title: "Terminverwaltung",
        text: "Buchungen, Verfügbarkeiten und Kalender zentral steuern",
      },
      {
        key: "Projektmanagement",
        title: "Projektmanagement",
        text: "Aufgaben, Zuständigkeiten und Fortschritt zentral bündeln",
      },
      {
        key: "Individuelle Softwarelösung",
        title: "Individuelle Softwarelösung",
        text: "Maßgeschneiderte Lösung für deinen konkreten Ablauf",
      },
    ],
  },
} as const;

const projectStatusOptions = [
  "Ich habe bereits eine Webseite",
  "Ich plane einen Relaunch",
  "Ich starte komplett neu",
  "Ich nutze aktuell ein anderes System",
] as const;

const projectSatisfactionLabels = [
  "Gar nicht",
  "Eher unzufrieden",
  "Neutral",
  "Zufrieden",
  "Sehr zufrieden",
] as const;

const websiteScopeLabels = [
  "Klein (1-4 Seiten)",
  "Mittel (5-10 Seiten)",
  "Groß (11+ Seiten)",
] as const;

const seoCompetitionLabels = ["Niedrig", "Mittel", "Hoch"] as const;

const startWindowLabels = ["Sofort", "In 1-3 Monaten", "Flexibel"] as const;

const websitePriceRanges = [
  { min: 1300, max: 1900 },
  { min: 2000, max: 3400 },
  { min: 3600, max: 5000 },
] as const;

const seoMonthlyPriceRanges = [
  { min: 200, max: 320 },
  { min: 260, max: 500 },
  { min: 320, max: 620 },
] as const;

const seoCompetitionAdjustments = [
  { min: 0, max: 0 },
  { min: 150, max: 300 },
  { min: 250, max: 500 },
] as const;

const startWindowAdjustments = [
  { min: 150, max: 500 },
  { min: 50, max: 200 },
  { min: 0, max: 0 },
] as const;

const seoMonthlyCompetitionAdjustments = [
  { min: 0, max: 0 },
  { min: 20, max: 60 },
  { min: 40, max: 120 },
] as const;

const seoMonthlyStartAdjustments = [
  { min: 0, max: 0 },
  { min: 40, max: 80 },
  { min: 120, max: 260 },
] as const;

const appointmentTimes = ["11:00 Uhr", "14:00 Uhr", "15:00 Uhr", "16:00 Uhr"] as const;
const weekdayLabels = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] as const;
const appointmentAdvisors = [
  { name: "Parmis", symbol: "\u2640" },
  { name: "Sebastian", symbol: "\u2642" },
] as const;

const formSteps: FormStep[] = ["topic", "services", "calculator", "booking", "confirmation"];

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<FormStep>("topic");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] =
    useState<(typeof projectStatusOptions)[number]>("Ich habe bereits eine Webseite");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectSatisfaction, setProjectSatisfaction] = useState(3);
  const [systemUserCount, setSystemUserCount] = useState("6-15 Nutzer");
  const [systemMobileUsage, setSystemMobileUsage] = useState("Responsive Website");
  const [systemInterfaceEntries, setSystemInterfaceEntries] = useState([""]);
  const [systemDescription, setSystemDescription] = useState("");
  const [websiteScope, setWebsiteScope] = useState(1);
  const [seoCompetition, setSeoCompetition] = useState(1);
  const [startWindow, setStartWindow] = useState(1);
  const [displayedMonth, setDisplayedMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedAdvisor, setSelectedAdvisor] =
    useState<(typeof appointmentAdvisors)[number]["name"]>("Parmis");
  const [bookedAppointments, setBookedAppointments] = useState<Record<string, string[]>>({});
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const isSeoCalculator = selectedTopic === "SEO";
  const estimatedMinPrice = isSeoCalculator
    ? seoMonthlyPriceRanges[websiteScope].min +
      seoMonthlyCompetitionAdjustments[seoCompetition].min +
      seoMonthlyStartAdjustments[startWindow].min
    : websitePriceRanges[websiteScope].min +
      seoCompetitionAdjustments[seoCompetition].min +
      startWindowAdjustments[startWindow].min;
  const estimatedMaxPrice = isSeoCalculator
    ? seoMonthlyPriceRanges[websiteScope].max +
      seoMonthlyCompetitionAdjustments[seoCompetition].max +
      seoMonthlyStartAdjustments[startWindow].max
    : websitePriceRanges[websiteScope].max +
      seoCompetitionAdjustments[seoCompetition].max +
      startWindowAdjustments[startWindow].max;

  const formattedEstimate = `${formatPrice(estimatedMinPrice)} - ${formatPrice(estimatedMaxPrice)}`;
  const selectedStartWindowLabel = isSeoCalculator
    ? (["3 Monate", "6 Monate", "12 Monate"] as const)[startWindow]
    : startWindowLabels[startWindow];
  const currentMonth = startOfMonth(new Date());
  const canGoToPreviousMonth = displayedMonth.getTime() > currentMonth.getTime();
  const monthKey = formatDateKey(displayedMonth).slice(0, 7);
  const selectedDateLabel = selectedDate
    ? new Intl.DateTimeFormat("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(`${selectedDate}T12:00:00`))
    : "";
  const visibleCalendarDays = useMemo(
    () => buildCalendarDays(displayedMonth, bookedAppointments),
    [bookedAppointments, displayedMonth],
  );
  const bookedTimesForSelectedDate = selectedDate ? bookedAppointments[selectedDate] || [] : [];
  const currentStepIndex = formSteps.indexOf(step);
  const selectedTopicConfig =
    selectedTopic && selectedTopic in projectStepTwoConfigs
      ? projectStepTwoConfigs[selectedTopic as keyof typeof projectStepTwoConfigs]
      : null;
  const showProjectDetails = selectedTopic === "Webseite" || selectedTopic === "Verwaltungssystem";
  const showSystemDetails = selectedTopic === "Verwaltungssystem";
  const projectLocationLabel = showSystemDetails ? "Bestehende Lösung / Link" : "Webseite";
  const projectLocationPlaceholder = showSystemDetails
    ? "https://deine-software.de"
    : "https://deine-webseite.de";
  const projectLocationHelper = showSystemDetails ? "(falls vorhanden)" : "(falls vorhanden)";

  useEffect(() => {
    let cancelled = false;

    async function loadAppointments() {
      try {
        const response = await fetch(
          `/api/appointments?month=${monthKey}&advisor=${encodeURIComponent(selectedAdvisor)}`,
          {
          cache: "no-store",
          },
        );

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          appointments?: Array<{ appointmentDate: string; appointmentTime: string }>;
        };

        if (cancelled) {
          return;
        }

        const nextBookedAppointments = (data.appointments || []).reduce<Record<string, string[]>>(
          (result, appointment) => {
            if (!result[appointment.appointmentDate]) {
              result[appointment.appointmentDate] = [];
            }
            result[appointment.appointmentDate].push(appointment.appointmentTime);
            return result;
          },
          {},
        );

        setBookedAppointments(nextBookedAppointments);
      } catch (error) {
        console.error("Appointments load error:", error);
      }
    }

    loadAppointments();

    return () => {
      cancelled = true;
    };
  }, [monthKey, selectedAdvisor]);

  useEffect(() => {
    if (selectedTime && bookedTimesForSelectedDate.includes(selectedTime)) {
      setSelectedTime("");
    }
  }, [bookedTimesForSelectedDate, selectedTime]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !selectedTopic ||
      selectedServices.length === 0 ||
      !selectedDate ||
      !selectedTime ||
      !contactName.trim() ||
      !contactEmail.trim() ||
      !privacyAccepted
    ) {
      return;
    }

    setState("sending");
    setMessage("");

    const formData = new FormData();
    const name = contactName.trim();
    const email = contactEmail.trim();
    const appointmentDateIso = selectedDate;
    const appointmentTime = selectedTime;

    formData.set("submissionType", "Terminbuchung");
    formData.set("name", name);
    formData.set("email", email);
    formData.set("projectType", selectedTopic);
    formData.set("services", selectedServices.join(", "));
    formData.set("websiteScope", websiteScopeLabels[websiteScope]);
    formData.set("seoCompetition", seoCompetitionLabels[seoCompetition]);
    formData.set("startWindow", selectedStartWindowLabel);
    formData.set("priceEstimate", formattedEstimate);
    formData.set("appointmentAdvisor", selectedAdvisor);
    formData.set("appointmentDate", selectedDateLabel);
    formData.set("appointmentDateIso", appointmentDateIso);
    formData.set("appointmentTime", appointmentTime);
    formData.set(
      "message",
      [
        "Kostenloses Beratungsgespräch gebucht",
        "",
        `Anliegen: ${selectedTopic}`,
        `Leistungen: ${selectedServices.join(", ")}`,
        showProjectDetails && projectName.trim()
          ? `Projektname: ${projectName.trim()}`
          : "",
        showProjectDetails ? `Aktueller Status: ${projectStatus}` : "",
        showProjectDetails && projectWebsite.trim()
          ? `${projectLocationLabel}: ${projectWebsite.trim()}`
          : "",
        showProjectDetails
          ? `Zufriedenheit mit aktueller Lösung: ${projectSatisfactionLabels[projectSatisfaction]}`
          : "",
        showSystemDetails ? `Nutzerzahl: ${systemUserCount}` : "",
        showSystemDetails ? `Mobile Nutzung: ${systemMobileUsage}` : "",
        showSystemDetails && systemInterfaceEntries.some((entry) => entry.trim())
          ? `Schnittstellen: ${systemInterfaceEntries.map((entry) => entry.trim()).filter(Boolean).join(", ")}`
          : "",
        showSystemDetails && systemDescription.trim()
          ? `Systembeschreibung: ${systemDescription.trim()}`
          : "",
        `Webseiten Umfang: ${websiteScopeLabels[websiteScope]}`,
        `SEO Wettbewerb: ${seoCompetitionLabels[seoCompetition]}`,
        `${isSeoCalculator ? "Betreuungszeitraum" : "Gewünschter Start"}: ${selectedStartWindowLabel}`,
        `${isSeoCalculator ? "Monatlicher Geschätzter Preisrahmen" : "Geschätzter Preisrahmen"}: ${formattedEstimate}`,
        `Ansprechperson: ${selectedAdvisor}`,
        `Termin: ${selectedDateLabel}`,
        `Uhrzeit: ${appointmentTime}`,
        `Name: ${name}`,
        `Kontakt-E-Mail: ${email}`,
      ].join("\n"),
    );

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setBookedAppointments((current) =>
        appointmentDateIso && appointmentTime
          ? {
              ...current,
              [appointmentDateIso]: [
                ...new Set([...(current[appointmentDateIso] || []), appointmentTime]),
              ],
            }
          : current,
      );
      setStep("confirmation");
      setSelectedTopic("");
      setSelectedServices([]);
      setProjectName("");
      setProjectStatus("Ich habe bereits eine Webseite");
      setProjectWebsite("");
      setProjectSatisfaction(3);
      setSystemUserCount("6-15 Nutzer");
      setSystemMobileUsage("Responsive Website");
      setSystemInterfaceEntries([""]);
      setSystemDescription("");
      setWebsiteScope(1);
      setSeoCompetition(1);
      setStartWindow(1);
      setDisplayedMonth(startOfMonth(new Date()));
      setSelectedDate("");
      setSelectedTime("");
      setSelectedAdvisor("Parmis");
      setContactName("");
      setContactEmail("");
      setPrivacyAccepted(false);
      setState("success");
      setMessage("");
      return;
    }

    if (response.status === 409) {
      setSelectedTime("");
      setState("error");
      setMessage("Diese Uhrzeit ist gerade schon vergeben. Bitte wähle eine andere.");
      return;
    }

    setState("error");
    setMessage(
      "Die Anfrage konnte noch nicht gesendet werden. Bitte versuche es später erneut.",
    );
  }

  function toggleService(topicKey: string) {
    setSelectedServices((current) =>
      current.includes(topicKey)
        ? current.filter((item) => item !== topicKey)
        : [...current, topicKey],
    );
  }

  function formatPrice(value: number) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function updateSystemInterfaceEntry(index: number, value: string) {
    setSystemInterfaceEntries((current) =>
      current.map((entry, entryIndex) => (entryIndex === index ? value : entry)),
    );
  }

  function addSystemInterfaceEntry() {
    setSystemInterfaceEntries((current) => [...current, ""]);
  }

  function rangeStyle(value: number) {
    return { "--range-progress": `${(value / 2) * 100}%` } as CSSProperties;
  }

  const monthLabel = new Intl.DateTimeFormat("de-DE", {
    month: "long",
    year: "numeric",
  }).format(displayedMonth);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-steps" aria-hidden="true">
        {formSteps.map((formStep, index) => (
          <span
            className={
              index === 0
                ? `contact-step-node ${currentStepIndex === 0 ? "active" : "completed"}`
                : `contact-step-node ${currentStepIndex === index ? "current" : currentStepIndex > index ? "completed" : ""}`
            }
            key={formStep}
          />
        ))}
      </div>

      {step === "topic" ? (
        <div className="contact-step-panel">
          <div className="contact-step-copy">
            <h3>Hallo! Womit können wir dich unterstützen?</h3>
            <p>Wähle eine Option, die am besten zu deinem Anliegen passt.</p>
          </div>

          <div className="contact-topic-list">
            {projectTopics.map((topic) => (
              <button
                type="button"
                className={
                  selectedTopic === topic.key
                    ? "contact-topic-card selected"
                    : "contact-topic-card"
                }
                key={topic.key}
                onClick={() => {
                  setSelectedTopic(topic.key);
                  setSelectedServices([]);
                  setState("idle");
                  setMessage("");
                }}
              >
                <topic.icon size={26} aria-hidden="true" />
                <span className="contact-topic-card-copy">
                  <strong>{topic.title}</strong>
                  <span>{topic.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="contact-step-actions">
            <button
              type="button"
              className="contact-next-button"
              disabled={!selectedTopic}
              onClick={() => {
                if (!selectedTopic) {
                  return;
                }
                setStep("services");
                setState("idle");
                setMessage("");
              }}
            >
              Weiter
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : step === "services" ? (
        <div className="contact-step-panel">
          <div className="contact-service-shell">
            <div className="contact-step-copy contact-service-copy">
              <h3>Erzähl uns mehr über dein Projekt</h3>
              <p>Mehr Details helfen uns, dir ein besseres Angebot zu erstellen.</p>
            </div>

            <div className="contact-service-section">
              <strong className="contact-service-label">
                {selectedTopicConfig?.label || "Ich interessiere mich für:"}
                {selectedTopicConfig && "helper" in selectedTopicConfig ? (
                  <span>{selectedTopicConfig.helper}</span>
                ) : null}
              </strong>
              <div className="contact-service-option-list">
                {(selectedTopicConfig?.options || []).map((service) => (
                  <button
                    type="button"
                    className={[
                      "contact-service-option",
                      "contact-service-option-detailed",
                      selectedServices.includes(service.key) ? "selected" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={service.key}
                    onClick={() => toggleService(service.key)}
                  >
                    <span className="contact-service-option-check" aria-hidden="true">
                      {selectedServices.includes(service.key) ? <Check size={15} /> : null}
                    </span>
                    <span className="contact-service-option-copy">
                      <strong>{service.title}</strong>
                      {service.text ? <span>{service.text}</span> : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedTopic === "Webseite" ? (
              <div className="contact-project-info-grid">
                <label className="contact-project-info-field">
                  Projektname <span>(optional)</span>
                  <input
                    type="text"
                    placeholder="Mein neues Projekt"
                    value={projectName}
                    onChange={(event) => setProjectName(event.currentTarget.value)}
                  />
                </label>

                <label className="contact-project-info-field">
                  Aktueller Status
                  <select
                    value={projectStatus}
                    onChange={(event) =>
                      setProjectStatus(
                        event.currentTarget.value as (typeof projectStatusOptions)[number],
                      )
                    }
                  >
                    {projectStatusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="contact-project-info-field contact-project-info-field-full">
                  {projectLocationLabel} <span>{projectLocationHelper}</span>
                  <input
                    type="url"
                    inputMode="url"
                    placeholder={projectLocationPlaceholder}
                    value={projectWebsite}
                    onChange={(event) => setProjectWebsite(event.currentTarget.value)}
                  />
                </label>

                <div className="contact-calculator-field contact-project-info-field-full">
                  <div className="contact-calculator-field-head">
                    <span>Bist du mit deiner aktuellen Lösung zufrieden?</span>
                    <span>{projectSatisfactionLabels[projectSatisfaction]}</span>
                  </div>
                  <div
                    className="contact-range-shell"
                    style={{ "--range-progress": `${(projectSatisfaction / 4) * 100}%` } as CSSProperties}
                  >
                    <input
                      className="contact-range"
                      type="range"
                      min="0"
                      max="4"
                      step="1"
                      value={projectSatisfaction}
                      onChange={(event) =>
                        setProjectSatisfaction(Number(event.currentTarget.value))
                      }
                    />
                  </div>
                  <div className="contact-range-endpoints" aria-hidden="true">
                    <span>Gar nicht</span>
                    <span>Sehr zufrieden</span>
                  </div>
                </div>
              </div>
            ) : null}

            {showSystemDetails ? (
              <div className="contact-system-details">
                <div className="contact-system-details-copy">
                  <h4>Zusätzliche Angaben zum Verwaltungssystem</h4>
                  <p>
                    Diese Angaben helfen uns, den Umfang, die Nutzung und die technische Richtung
                    besser einzuordnen.
                  </p>
                </div>

                <div className="contact-project-info-grid">
                  <label className="contact-project-info-field">
                    Wie viele Nutzer sollen mit dem System arbeiten?
                    <select
                      value={systemUserCount}
                      onChange={(event) => setSystemUserCount(event.currentTarget.value)}
                    >
                      <option value="1-5 Nutzer">1-5 Nutzer</option>
                      <option value="6-15 Nutzer">6-15 Nutzer</option>
                      <option value="16-50 Nutzer">16-50 Nutzer</option>
                      <option value="51-100 Nutzer">51-100 Nutzer</option>
                      <option value="100+ Nutzer">100+ Nutzer</option>
                    </select>
                  </label>

                  <label className="contact-project-info-field">
                    Wie soll das System genutzt werden?
                    <select
                      value={systemMobileUsage}
                      onChange={(event) => setSystemMobileUsage(event.currentTarget.value)}
                    >
                      <option value="Nur Desktop">Nur Desktop</option>
                      <option value="Responsive Website">Responsive Website</option>
                      <option value="Eigene App für Android / iPhone">
                        Eigene App für Android / iPhone
                      </option>
                    </select>
                  </label>

                  <div className="contact-project-info-field contact-project-info-field-full">
                    Welche Schnittstellen werden benötigt?
                    <span>
                      Zum Beispiel Google Kalender, Outlook, Lexoffice, DATEV oder interne Tools
                    </span>
                    <div className="contact-system-interface-list">
                      {systemInterfaceEntries.map((entry, index) => (
                        <input
                          key={`system-interface-${index}`}
                          type="text"
                          placeholder={`Schnittstelle ${index + 1}`}
                          value={entry}
                          onChange={(event) =>
                            updateSystemInterfaceEntry(index, event.currentTarget.value)
                          }
                        />
                      ))}
                    </div>
                    <div className="contact-system-interface-actions">
                      <button
                        type="button"
                        className="contact-inline-add-button"
                        onClick={addSystemInterfaceEntry}
                      >
                        <Plus size={15} aria-hidden="true" />
                        Weitere Schnittstelle hinzufügen
                      </button>
                    </div>
                  </div>

                  <label className="contact-project-info-field contact-project-info-field-full">
                    Beschreibung: Was soll das System tun?
                    <textarea
                      rows={4}
                      placeholder="Zum Beispiel: Kunden verwalten, Termine koordinieren, Dokumente speichern und automatisch Erinnerungen versenden."
                      value={systemDescription}
                      onChange={(event) => setSystemDescription(event.currentTarget.value)}
                    />
                  </label>
                </div>
              </div>
            ) : null}
          </div>

          <div className="contact-step-actions details">
            <button
              type="button"
              className="contact-back-button"
              onClick={() => {
                setStep("topic");
                setState("idle");
                setMessage("");
              }}
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Zurück
            </button>
            <button
              type="button"
              className="contact-next-button contact-next-button-full"
              disabled={selectedServices.length === 0}
              onClick={() => {
                if (selectedServices.length === 0) {
                  return;
                }
                setStep("calculator");
                setState("idle");
                setMessage("");
              }}
            >
              Auswahl bestätigen
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : step === "calculator" ? (
        <div className="contact-step-panel">
          <div className="contact-calculator-shell">
            <div className="contact-step-copy contact-calculator-copy">
              <h3>Projekt Kalkulator</h3>
              <p>Erhalte eine grobe Einschätzung für dein Projekt</p>
            </div>

            <div className="contact-calculator">
              <div className="contact-calculator-field">
                <div className="contact-calculator-field-head">
                  <span>Webseiten Umfang</span>
                  <span>{websiteScopeLabels[websiteScope]}</span>
                </div>
                <div className="contact-range-shell" style={rangeStyle(websiteScope)}>
                  <input
                    className="contact-range"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={websiteScope}
                    onChange={(event) => setWebsiteScope(Number(event.currentTarget.value))}
                  />
                </div>
              </div>

              <div className="contact-calculator-field">
                <div className="contact-calculator-field-head">
                  <span>SEO Wettbewerb</span>
                  <span>{seoCompetitionLabels[seoCompetition]}</span>
                </div>
                <div className="contact-range-shell" style={rangeStyle(seoCompetition)}>
                  <input
                    className="contact-range"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={seoCompetition}
                    onChange={(event) => setSeoCompetition(Number(event.currentTarget.value))}
                  />
                </div>
              </div>

              <div className="contact-calculator-field">
                <div className="contact-calculator-field-head">
                  <span>{isSeoCalculator ? "Betreuungszeitraum" : "Gewünschter Start"}</span>
                  <span>
                    {selectedStartWindowLabel}
                  </span>
                </div>
                <div className="contact-range-shell" style={rangeStyle(startWindow)}>
                  <input
                    className="contact-range"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={startWindow}
                    onChange={(event) => setStartWindow(Number(event.currentTarget.value))}
                  />
                </div>
              </div>

              <div className="contact-estimate-card">
                <span>
                  {isSeoCalculator
                    ? "Monatlicher Geschätzter Preisrahmen"
                    : "Geschätzter Preisrahmen"}
                </span>
                <strong>{formattedEstimate}</strong>
                <p>Unverbindlich & individuell anpassbar</p>
              </div>
            </div>

            <div className="contact-step-actions details contact-calculator-actions">
              <button
                type="button"
                className="contact-back-button"
                onClick={() => {
                  setStep("services");
                  setState("idle");
                  setMessage("");
                }}
              >
                <ArrowLeft size={17} aria-hidden="true" />
                Zurück
              </button>
              <button
                type="button"
                className="contact-next-button contact-next-button-full"
                onClick={() => {
                  setStep("booking");
                  setState("idle");
                  setMessage("");
                }}
              >
                Weiter zur Terminwahl
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : step === "booking" ? (
        <div className="contact-step-panel">
          <div className="contact-booking-shell">
            <div className="contact-step-copy contact-booking-copy">
              <h3>
                <span>Kostenloses</span> Beratungsgespräch
              </h3>
              <p>Buche dir direkt einen passenden Termin.</p>
            </div>

            <input name="projectType" type="hidden" value={selectedTopic} />
            <input name="services" type="hidden" value={selectedServices.join(", ")} />
            <input name="websiteScope" type="hidden" value={websiteScopeLabels[websiteScope]} />
            <input
              name="seoCompetition"
              type="hidden"
              value={seoCompetitionLabels[seoCompetition]}
            />
            <input name="startWindow" type="hidden" value={selectedStartWindowLabel} />
            <input name="priceEstimate" type="hidden" value={formattedEstimate} />
            <input name="appointmentAdvisor" type="hidden" value={selectedAdvisor} />
            <input name="appointmentDate" type="hidden" value={selectedDateLabel} />
            <input name="appointmentDateIso" type="hidden" value={selectedDate} />
            <input name="appointmentTime" type="hidden" value={selectedTime} />

            <div className="contact-booking-grid">
              <div className="contact-calendar-card">
                <div className="contact-calendar-head">
                  <button
                    type="button"
                    className="contact-calendar-nav"
                    disabled={!canGoToPreviousMonth}
                    onClick={() => {
                      if (!canGoToPreviousMonth) {
                        return;
                      }
                      setDisplayedMonth(addMonths(displayedMonth, -1));
                    }}
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>
                  <strong>{capitalize(monthLabel)}</strong>
                  <button
                    type="button"
                    className="contact-calendar-nav"
                    onClick={() => setDisplayedMonth(addMonths(displayedMonth, 1))}
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </div>

                <div className="contact-calendar-weekdays">
                  {weekdayLabels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>

                <div className="contact-calendar-grid">
                  {visibleCalendarDays.map((day) => (
                    <button
                      type="button"
                      className={[
                        "contact-calendar-day",
                        !day.inCurrentMonth ? "muted" : "",
                        day.disabled ? "disabled" : "",
                        day.fullyBooked ? "fully-booked" : "",
                        selectedDate === day.iso ? "selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      disabled={day.disabled}
                      key={day.iso}
                      onClick={() => setSelectedDate(day.iso)}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="contact-time-card">
                <div className="contact-advisor-switch" role="tablist" aria-label="Ansprechperson">
                  {appointmentAdvisors.map((advisor) => (
                    <button
                      key={advisor.name}
                      type="button"
                      className={[
                        "contact-advisor-button",
                        selectedAdvisor === advisor.name ? "selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => {
                        setSelectedAdvisor(advisor.name);
                        setSelectedTime("");
                      }}
                    >
                      <span className="contact-advisor-button-label">
                        {advisor.name}
                        <span className="contact-advisor-symbol" aria-hidden="true">
                          {advisor.symbol}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
                <strong>Verfügbare Zeiten</strong>
                <div className="contact-time-list">
                  {appointmentTimes.map((time) => (
                    <button
                      type="button"
                      className={[
                        "contact-time-button",
                        selectedTime === time ? "selected" : "",
                        bookedTimesForSelectedDate.includes(time) ? "booked" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      disabled={!selectedDate || bookedTimesForSelectedDate.includes(time)}
                      key={time}
                      onClick={() => setSelectedTime(time)}
                    >
                      {bookedTimesForSelectedDate.includes(time) ? `${time} · Ausgebucht` : time}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <label className="contact-booking-field">
              Dein Name
              <input
                name="name"
                type="text"
                placeholder="Max Mustermann"
                required
                value={contactName}
                onChange={(event) => setContactName(event.currentTarget.value)}
              />
            </label>

            <label className="contact-booking-field">
              Deine E-Mail
              <input
                name="email"
                type="email"
                placeholder="du@firma.de"
                required
                value={contactEmail}
                onChange={(event) => setContactEmail(event.currentTarget.value)}
              />
            </label>

            <label className="contact-consent-field">
              <input
                name="privacyAccepted"
                type="checkbox"
                required
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.currentTarget.checked)}
              />
              <span>
                Ich akzeptiere die{" "}
                <a href="#rechtliches" onClick={(event) => event.stopPropagation()}>
                  Datenschutzerklärung
                </a>
              </span>
            </label>

            <div className="contact-step-actions details contact-booking-actions">
              <button
                type="button"
                className="contact-back-button"
                onClick={() => {
                  setStep("calculator");
                  setState("idle");
                  setMessage("");
                }}
              >
                <ArrowLeft size={17} aria-hidden="true" />
                Zurück
              </button>
              <button
                type="submit"
                className="contact-next-button contact-next-button-full"
                disabled={
                  !selectedDate ||
                  !selectedTime ||
                  !contactName.trim() ||
                  !contactEmail.trim() ||
                  !privacyAccepted
                }
              >
                {state === "sending" ? "Termin wird gebucht..." : "Termin buchen"}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="contact-step-panel">
          <div className="contact-confirmation-shell">
            <div className="contact-confirmation-icon" aria-hidden="true">
              <Check size={34} />
            </div>

            <div className="contact-confirmation-copy">
              <h3>Danke!</h3>
              <p>Deine Anfrage ist bei uns eingegangen.</p>
              <p>
                Wir haben alle Informationen erhalten und melden uns innerhalb von 24
                Stunden bei dir zurück.
              </p>
            </div>

            <div className="contact-confirmation-next">
              <strong>Was passiert als Nächstes?</strong>
              <ul>
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>Wir analysieren deine Anfrage</span>
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>Erstellen ein individuelles Konzept</span>
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>Alle Details erhältst du per E-Mail</span>
                </li>
              </ul>
            </div>

            <div className="contact-confirmation-actions">
              <button
                type="button"
                className="contact-back-button contact-confirmation-home"
                onClick={() => {
                  setStep("topic");
                  setState("idle");
                  setMessage("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <CalendarDays size={18} aria-hidden="true" />
                Zurück zur Startseite
              </button>
            </div>
          </div>
        </div>
      )}

      {message && (
        <p className={state === "success" ? "form-status success" : "form-status error"}>
          {message}
        </p>
      )}
    </form>
  );
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function buildCalendarDays(month: Date, bookedAppointments: Record<string, string[]>) {
  const monthStart = startOfMonth(month);
  const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const mondayFirstIndex = (monthStart.getDay() + 6) % 7;
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - mondayFirstIndex);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: 35 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);

    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPast = date < today;
    const iso = formatDateKey(date);
    const bookedTimes = bookedAppointments[iso] || [];
    const fullyBooked = bookedTimes.length >= appointmentTimes.length;
    const disabled = isWeekend || isPast || fullyBooked;

    return {
      iso,
      label: date.getDate(),
      inCurrentMonth:
        date.getMonth() === monthStart.getMonth() && date <= monthEnd && date >= monthStart,
      disabled,
      fullyBooked,
    };
  });
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
