"use client";

import { FormEvent, useState } from "react";
import { Rocket } from "lucide-react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setState("success");
      setMessage("Danke. Deine Anfrage wurde gesendet.");
      return;
    }

    setState("error");
    setMessage(
      "Die Anfrage konnte noch nicht gesendet werden. Bitte versuche es später erneut.",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
          placeholder="SEO, Webseite oder Verwaltungssystem?"
          rows={5}
          required
        />
      </label>
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Wird gesendet..." : "Anfrage senden"}
        <Rocket size={18} aria-hidden="true" />
      </button>
      {message && (
        <p className={state === "success" ? "form-status success" : "form-status error"}>
          {message}
        </p>
      )}
    </form>
  );
}
