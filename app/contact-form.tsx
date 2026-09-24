"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Instagram,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  Phone,
  Search,
} from "lucide-react";
import { intlLocale, type Locale } from "../lib/i18n/config";
import type { Dictionary } from "../lib/i18n/de";

type SubmitState = "idle" | "sending" | "success" | "error";
type FormStep = "topic" | "services" | "booking" | "confirmation";

type ContactFormProps = {
  locale: Locale;
  copy: Dictionary["contactForm"];
  privacyHref: string;
};

const topicIcons = [Search, MonitorSmartphone, LayoutDashboard];

// Stored as-is in the database, so the internal value keeps the German "Uhr" suffix.
const appointmentTimes = [
  "17:00 Uhr",
  "17:30 Uhr",
  "18:00 Uhr",
  "18:30 Uhr",
  "19:00 Uhr",
  "19:30 Uhr",
  "20:00 Uhr",
] as const;
const appointmentAdvisors = [{ name: "Parmis", symbol: "♀" }] as const;

const formSteps: FormStep[] = ["topic", "services", "booking"];

export function ContactForm({ locale, copy, privacyHref }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<FormStep>("topic");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectName, setProjectName] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [systemDescription, setSystemDescription] = useState("");
  const [displayedMonth, setDisplayedMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const selectedAdvisor: (typeof appointmentAdvisors)[number]["name"] = appointmentAdvisors[0].name;
  const [bookedAppointments, setBookedAppointments] = useState<Record<string, string[]>>({});
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const displayLocale = intlLocale[locale];
  const currentMonth = startOfMonth(new Date());
  const canGoToPreviousMonth = displayedMonth.getTime() > currentMonth.getTime();
  const monthKey = formatDateKey(displayedMonth).slice(0, 7);
  const selectedDateLabel = selectedDate ? formatLongDate(selectedDate, displayLocale) : "";
  const internalDateLabel = selectedDate ? formatLongDate(selectedDate, "de-DE") : "";
  const visibleCalendarDays = useMemo(
    () => buildCalendarDays(displayedMonth, bookedAppointments),
    [bookedAppointments, displayedMonth],
  );
  const bookedTimesForSelectedDate = selectedDate ? bookedAppointments[selectedDate] || [] : [];
  const currentStepIndex = step === "confirmation" ? formSteps.length : formSteps.indexOf(step);
  const selectedTopicConfig =
    selectedTopic && selectedTopic in copy.stepTwo ? copy.stepTwo[selectedTopic] : null;
  const showSystemDetails = selectedTopic === "Verwaltungssystem";
  const projectLocationLabel = showSystemDetails
    ? copy.steps.services.systemLocationLabel
    : copy.steps.services.websiteLabel;
  const internalProjectLocationLabel = showSystemDetails ? "Bestehende Lösung / Link" : "Webseite";
  const projectLocationPlaceholder = showSystemDetails
    ? copy.steps.services.systemPlaceholder
    : copy.steps.services.websitePlaceholder;

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

  const formRef = useRef<HTMLFormElement>(null);
  const previousStepRef = useRef(step);

  useEffect(() => {
    if (previousStepRef.current === step) {
      return;
    }
    previousStepRef.current = step;

    const form = formRef.current;
    if (!form) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    form.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [step]);

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
    formData.set("projectName", projectName.trim());
    formData.set("projectWebsite", projectWebsite.trim());
    formData.set("projectDescription", systemDescription.trim());
    formData.set("appointmentAdvisor", selectedAdvisor);
    formData.set("appointmentDate", internalDateLabel);
    formData.set("appointmentDateIso", appointmentDateIso);
    formData.set("appointmentTime", appointmentTime);
    formData.set(
      "message",
      [
        "Kostenloses Beratungsgespräch gebucht",
        "",
        `Sprache der Anfrage: ${locale === "en" ? "Englisch" : "Deutsch"}`,
        `Anliegen: ${selectedTopic}`,
        `Leistungen: ${selectedServices.join(", ")}`,
        projectName.trim() ? `Projektname: ${projectName.trim()}` : "",
        projectWebsite.trim() ? `${internalProjectLocationLabel}: ${projectWebsite.trim()}` : "",
        systemDescription.trim() ? `Kurzbeschreibung: ${systemDescription.trim()}` : "",
        `Ansprechperson: ${selectedAdvisor}`,
        `Termin: ${internalDateLabel}`,
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
      setProjectWebsite("");
      setSystemDescription("");
      setDisplayedMonth(startOfMonth(new Date()));
      setSelectedDate("");
      setSelectedTime("");
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
      setMessage(copy.errors.slotTaken);
      return;
    }

    setState("error");
    setMessage(copy.errors.generic);
  }

  function toggleService(topicKey: string) {
    setSelectedServices((current) =>
      current.includes(topicKey)
        ? current.filter((item) => item !== topicKey)
        : [...current, topicKey],
    );
  }

  function formatTime(time: string) {
    return `${time.slice(0, 5)}${copy.timeSuffix}`;
  }

  const progressStep = Math.min(currentStepIndex + 1, formSteps.length);
  const progressPercent = Math.round((progressStep / formSteps.length) * 100);

  const monthLabel = new Intl.DateTimeFormat(displayLocale, {
    month: "long",
    year: "numeric",
  }).format(displayedMonth);

  return (
      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="contact-progress">
        <div className="contact-progress-head">
          <span>
            {locale === "en" ? "Step" : "Schritt"} {progressStep} / {formSteps.length}
          </span>
          <span>{progressPercent}%</span>
        </div>
        <div
          className="contact-progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-label={locale === "en" ? "Progress" : "Fortschritt"}
        >
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {step === "topic" ? (
        <div className="contact-step-panel">
          <div className="contact-step-copy">
            <h3>{copy.steps.topic.title}</h3>
            <p>{copy.steps.topic.text}</p>
          </div>

          <div className="contact-topic-list">
            {copy.topics.map((topic, index) => {
              const Icon = topicIcons[index] ?? Search;
              return (
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
                  <Icon size={26} aria-hidden="true" />
                  <span className="contact-topic-card-copy">
                    <strong>{topic.title}</strong>
                    <span>{topic.text}</span>
                  </span>
                </button>
              );
            })}
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
              {copy.steps.topic.next}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : step === "services" ? (
        <div className="contact-step-panel">
          <div className="contact-service-shell">
            <div className="contact-step-copy contact-service-copy">
              <h3>{copy.steps.services.title}</h3>
              <p>{copy.steps.services.text}</p>
            </div>

            <div className="contact-service-section">
              <strong className="contact-service-label">
                {selectedTopicConfig?.label || copy.defaultServicesLabel}
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
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-project-info-grid contact-project-info-grid-compact">
              <label className="contact-project-info-field">
                {copy.steps.services.projectName}
                <input
                  type="text"
                  placeholder={copy.steps.services.projectNamePlaceholder}
                  value={projectName}
                  onChange={(event) => setProjectName(event.currentTarget.value)}
                />
              </label>

              <label className="contact-project-info-field">
                {projectLocationLabel}
                <input
                  type="url"
                  inputMode="url"
                  placeholder={projectLocationPlaceholder}
                  value={projectWebsite}
                  onChange={(event) => setProjectWebsite(event.currentTarget.value)}
                />
              </label>

              <label className="contact-project-info-field contact-project-info-field-full">
                {copy.steps.services.descriptionLabel}
                <textarea
                  rows={2}
                  placeholder={copy.steps.services.descriptionPlaceholder}
                  value={systemDescription}
                  onChange={(event) => setSystemDescription(event.currentTarget.value)}
                />
              </label>
            </div>
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
              {copy.steps.services.back}
            </button>
            <button
              type="button"
              className="contact-next-button contact-next-button-full"
              disabled={selectedServices.length === 0}
              onClick={() => {
                if (selectedServices.length === 0) {
                  return;
                }
                setStep("booking");
                setState("idle");
                setMessage("");
              }}
            >
              {copy.steps.services.confirm}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : step === "booking" ? (
        <div className="contact-step-panel">
          <div className="contact-booking-shell">
            <div className="contact-step-copy contact-booking-copy">
              <h3>
                <span>{copy.steps.booking.titleHighlight}</span> {copy.steps.booking.title}
              </h3>
              <p>{copy.steps.booking.text}</p>
            </div>

            <input name="projectType" type="hidden" value={selectedTopic} />
            <input name="services" type="hidden" value={selectedServices.join(", ")} />
            <input name="projectName" type="hidden" value={projectName.trim()} />
            <input name="projectWebsite" type="hidden" value={projectWebsite.trim()} />
            <input name="projectDescription" type="hidden" value={systemDescription.trim()} />
            <input name="appointmentAdvisor" type="hidden" value={selectedAdvisor} />
            <input name="appointmentDate" type="hidden" value={internalDateLabel} />
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
                  {copy.weekdayLabels.map((label) => (
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
                <strong>{copy.steps.booking.availableTimes}</strong>
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
                      {bookedTimesForSelectedDate.includes(time)
                        ? `${formatTime(time)} · ${copy.steps.booking.bookedSuffix}`
                        : formatTime(time)}
                    </button>
                  ))}
                </div>
                <p className="contact-time-note">
                  {copy.steps.booking.saturdayNote.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>

            </div>

            <div className="contact-booking-fields">
              <label className="contact-booking-field">
                {copy.steps.booking.nameLabel}
                <input
                  name="name"
                  type="text"
                  placeholder={copy.steps.booking.namePlaceholder}
                  required
                  value={contactName}
                  onChange={(event) => setContactName(event.currentTarget.value)}
                />
              </label>

              <label className="contact-booking-field">
                {copy.steps.booking.emailLabel}
                <input
                  name="email"
                  type="email"
                  placeholder={copy.steps.booking.emailPlaceholder}
                  required
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.currentTarget.value)}
                />
              </label>
            </div>

            <label className="contact-consent-field">
              <input
                name="privacyAccepted"
                type="checkbox"
                required
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.currentTarget.checked)}
              />
              <span>
                {copy.steps.booking.consentPrefix}{" "}
                <a
                  href={privacyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  {copy.steps.booking.consentLink}
                </a>
              </span>
            </label>

            <div className="contact-step-actions details contact-booking-actions">
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
                {copy.steps.booking.back}
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
                {state === "sending" ? copy.steps.booking.submitting : copy.steps.booking.submit}
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
              <h3>{copy.steps.confirmation.title}</h3>
              <p>{copy.steps.confirmation.received}</p>
              <p>{copy.steps.confirmation.text}</p>
            </div>

            <div className="contact-confirmation-next">
              <strong>{copy.steps.confirmation.nextTitle}</strong>
              <ul>
                {copy.steps.confirmation.nextItems.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
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
                }}
              >
                <CalendarDays size={18} aria-hidden="true" />
                {copy.steps.confirmation.home}
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

export function ContactInfoPanel({ locale }: { locale: string }) {
  return (
      <aside className="contact-info-panel" aria-label={locale === "en" ? "Contact details" : "Kontaktdaten"}>
        <div className="contact-info-list">
        <a className="contact-info-card" href="mailto:info@digitalvision.site">
          <span className="contact-info-icon" aria-hidden="true">
            <Mail size={22} />
          </span>
          <span>
            <strong>{locale === "en" ? "E-mail" : "E-Mail"}</strong>
            <span>info@digitalvision.site</span>
          </span>
        </a>

        <a className="contact-info-card" href="tel:+491788324883">
          <span className="contact-info-icon" aria-hidden="true">
            <Phone size={22} />
          </span>
          <span>
            <strong>{locale === "en" ? "Phone" : "Telefon"}</strong>
            <span>+49 178 8324883</span>
          </span>
        </a>

        <a
          className="contact-info-card"
          href="https://www.instagram.com/digitalvision.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-info-icon" aria-hidden="true">
            <Instagram size={22} />
          </span>
          <span>
            <strong>Instagram</strong>
            <span>@digitalvision.de</span>
          </span>
        </a>

        <div className="contact-info-card">
          <span className="contact-team-avatar" aria-hidden="true">
            P
          </span>
          <span>
            <strong>{locale === "en" ? "Your contact" : "Dein Kontakt"}</strong>
            <span>
              {locale === "en"
                ? "Parmis answers personally."
                : "Parmis antwortet dir persönlich."}
            </span>
          </span>
        </div>
        </div>

        <div className="contact-response-card">
          <strong>{locale === "en" ? "Response time" : "Antwortzeit"}</strong>
          <p>
            {locale === "en" ? (
              <>
                Usually within <b>24 hours</b>.
              </>
            ) : (
              <>
                In der Regel innerhalb von <b>24 Stunden</b>.
              </>
            )}
          </p>
        </div>
      </aside>
  );
}

function formatLongDate(isoDate: string, formatLocale: string) {
  return new Intl.DateTimeFormat(formatLocale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
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
