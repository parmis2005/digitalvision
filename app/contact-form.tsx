"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CircleHelp,
  Check,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
  ShieldCheck,
} from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";
type FormStep = "topic" | "services" | "details";

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

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<FormStep>("topic");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedTopic || selectedServices.length === 0) {
      return;
    }

    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const projectText = String(formData.get("message") || "").trim();
    formData.set(
      "message",
      [
        `Anliegen: ${selectedTopic}`,
        `Leistungen: ${selectedServices.join(", ")}`,
        "",
        projectText,
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
      setState("success");
      setMessage("Danke. Deine Anfrage wurde gesendet.");
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

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-steps" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((item) => (
          <span
            className={
              item === 0
                ? `contact-step-node ${step === "topic" ? "active" : "completed"}`
                : item === 1
                  ? `contact-step-node ${step === "services" ? "current" : step === "details" ? "completed" : ""}`
                  : item === 2
                    ? `contact-step-node ${step === "details" ? "current" : ""}`
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
                setStep("details");
                setState("idle");
                setMessage("");
              }}
            >
              Auswahl bestätigen
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div className="contact-step-panel">
          <div className="contact-step-copy">
            <h3>{selectedTopic}</h3>
            <p>Beschreibe kurz dein Ziel. Wir melden uns mit einer klaren Einschätzung.</p>
          </div>

          <input name="projectType" type="hidden" value={selectedTopic} />
          <input name="services" type="hidden" value={selectedServices.join(", ")} />

          <label>
            Name
            <input name="name" placeholder="Dein Name" required />
          </label>
          <label>
            E-Mail
            <input name="email" type="email" placeholder="du@firma.de" required />
          </label>
          <label>
            Projekt
            <textarea
              name="message"
              placeholder="Erzähl uns kurz mehr über dein Projekt."
              rows={5}
              required
            />
          </label>

          <div className="contact-step-actions details">
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
            <button type="submit" disabled={state === "sending"}>
              {state === "sending" ? "Wird gesendet..." : "Anfrage senden"}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
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
