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
  Search,
  ShieldCheck,
} from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";
type FormStep = "topic" | "services" | "calculator" | "booking";

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
  {
    key: "Sonstiges",
    title: "Sonstiges",
    text: "Anderes Anliegen",
    icon: CircleHelp,
  },
] as const;

const projectServices = [
  {
    key: "SEO",
    title: "SEO",
    text: "Mehr Sichtbarkeit bei Google",
    icon: Search,
  },
  {
    key: "Webseite",
    title: "Webseite",
    text: "Moderne & schnelle Webseiten",
    icon: MonitorSmartphone,
  },
  {
    key: "Verwaltungssystem",
    title: "Verwaltungssystem",
    text: "Individuelle Systeme für dein Business",
    icon: LayoutDashboard,
  },
  {
    key: "Wartung & Support",
    title: "Wartung & Support",
    text: "Betreuung & technische Unterstützung",
    icon: ShieldCheck,
  },
] as const;

const websiteScopeLabels = [
  "Klein (1-4 Seiten)",
  "Mittel (5-10 Seiten)",
  "Groß (11+ Seiten)",
] as const;

const seoCompetitionLabels = ["Niedrig", "Mittel", "Hoch"] as const;

const startWindowLabels = ["Sofort", "In 1-3 Monaten", "Flexibel"] as const;

const websitePriceRanges = [
  { min: 1490, max: 2290 },
  { min: 2390, max: 4290 },
  { min: 4490, max: 7490 },
] as const;

const seoCompetitionAdjustments = [
  { min: 0, max: 0 },
  { min: 290, max: 690 },
  { min: 790, max: 1590 },
] as const;

const startWindowAdjustments = [
  { min: 490, max: 990 },
  { min: 150, max: 390 },
  { min: 0, max: 0 },
] as const;

const appointmentTimes = ["11:00 Uhr", "14:00 Uhr", "15:00 Uhr", "16:00 Uhr"] as const;
const weekdayLabels = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] as const;

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<FormStep>("topic");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [websiteScope, setWebsiteScope] = useState(1);
  const [seoCompetition, setSeoCompetition] = useState(1);
  const [startWindow, setStartWindow] = useState(1);
  const [displayedMonth, setDisplayedMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookedAppointments, setBookedAppointments] = useState<Record<string, string[]>>({});

  const estimatedMinPrice =
    websitePriceRanges[websiteScope].min +
    seoCompetitionAdjustments[seoCompetition].min +
    startWindowAdjustments[startWindow].min;
  const estimatedMaxPrice =
    websitePriceRanges[websiteScope].max +
    seoCompetitionAdjustments[seoCompetition].max +
    startWindowAdjustments[startWindow].max;

  const formattedEstimate = `${formatPrice(estimatedMinPrice)} - ${formatPrice(estimatedMaxPrice)}`;
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

  useEffect(() => {
    let cancelled = false;

    async function loadAppointments() {
      try {
        const response = await fetch(`/api/appointments?month=${monthKey}`, {
          cache: "no-store",
        });

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
  }, [monthKey]);

  useEffect(() => {
    if (selectedTime && bookedTimesForSelectedDate.includes(selectedTime)) {
      setSelectedTime("");
    }
  }, [bookedTimesForSelectedDate, selectedTime]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedTopic || selectedServices.length === 0 || !selectedDate || !selectedTime) {
      return;
    }

    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    if (!email) {
      setState("error");
      setMessage("Bitte gib deine E-Mail-Adresse ein.");
      return;
    }

    formData.set("submissionType", "Terminbuchung");
    formData.set("name", "Terminbuchung");
    formData.set(
      "message",
      [
        "Kostenloses Beratungsgespräch gebucht",
        "",
        `Anliegen: ${selectedTopic}`,
        `Leistungen: ${selectedServices.join(", ")}`,
        `Webseiten Umfang: ${websiteScopeLabels[websiteScope]}`,
        `SEO Wettbewerb: ${seoCompetitionLabels[seoCompetition]}`,
        `Gewünschter Start: ${startWindowLabels[startWindow]}`,
        `Geschätzter Preisrahmen: ${formattedEstimate}`,
        `Termin: ${selectedDateLabel}`,
        `Uhrzeit: ${selectedTime}`,
        `Kontakt-E-Mail: ${email}`,
      ].join("\n"),
    );

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setStep("topic");
      setSelectedTopic("");
      setSelectedServices([]);
      setWebsiteScope(1);
      setSeoCompetition(1);
      setStartWindow(1);
      setDisplayedMonth(startOfMonth(new Date()));
      setSelectedDate("");
      setSelectedTime("");
      setBookedAppointments((current) =>
        selectedDate && selectedTime
          ? {
              ...current,
              [selectedDate]: [...new Set([...(current[selectedDate] || []), selectedTime])],
            }
          : current,
      );
      setState("success");
      setMessage("Danke. Dein Terminwunsch wurde gesendet.");
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
        {[0, 1, 2, 3, 4].map((item) => (
          <span
            className={
              item === 0
                ? `contact-step-node ${step === "topic" ? "active" : "completed"}`
                : item === 1
                  ? `contact-step-node ${step === "services" ? "current" : step === "calculator" || step === "booking" ? "completed" : ""}`
                  : item === 2
                    ? `contact-step-node ${step === "calculator" ? "current" : step === "booking" ? "completed" : ""}`
                    : item === 3
                      ? `contact-step-node ${step === "booking" ? "current" : ""}`
                      : "contact-step-node"
            }
            key={item}
          />
        ))}
      </div>

      {step === "topic" ? (
        <div className="contact-step-panel">
          <div className="contact-step-copy">
            <h3>Worum geht es bei deinem Projekt?</h3>
            <p>Wähle eine Option aus, die am besten zu deinem Anliegen passt.</p>
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
                onClick={() => setSelectedTopic(topic.key)}
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
          <div className="contact-step-copy">
            <h3>Was können wir für dich tun?</h3>
            <p>Wähle eine oder mehrere Leistungen</p>
          </div>

          <div className="contact-service-grid">
            {projectServices.map((service) => (
              <button
                type="button"
                className={
                  selectedServices.includes(service.key)
                    ? "contact-service-card selected"
                    : "contact-service-card"
                }
                key={service.key}
                onClick={() => toggleService(service.key)}
              >
                <span className="contact-service-card-check" aria-hidden="true">
                  {selectedServices.includes(service.key) ? <Check size={18} /> : null}
                </span>
                <service.icon size={34} aria-hidden="true" />
                <span className="contact-service-card-copy">
                  <strong>{service.title}</strong>
                  <span>{service.text}</span>
                </span>
              </button>
            ))}
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
                  <span>Gewünschter Start</span>
                  <span>{startWindowLabels[startWindow]}</span>
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
                <span>Geschätzter Preisrahmen</span>
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
      ) : (
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
            <input name="seoCompetition" type="hidden" value={seoCompetitionLabels[seoCompetition]} />
            <input name="startWindow" type="hidden" value={startWindowLabels[startWindow]} />
            <input name="priceEstimate" type="hidden" value={formattedEstimate} />
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
              Deine E-Mail
              <input name="email" type="email" placeholder="du@firma.de" required />
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
                disabled={state === "sending" || !selectedDate || !selectedTime}
              >
                {state === "sending" ? "Wird gesendet..." : "Termin buchen"}
                <CalendarDays size={18} aria-hidden="true" />
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
