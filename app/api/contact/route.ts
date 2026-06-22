import { NextResponse } from "next/server";

import { createAppointment, ensureAppointmentsTable } from "../../../lib/appointments";

export async function POST(request: Request) {
  const formData = await request.formData();
  const submissionType = String(formData.get("submissionType") || "Projektanfrage").trim();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const appointmentDate = String(formData.get("appointmentDateIso") || "").trim();
  const appointmentTime = String(formData.get("appointmentTime") || "").trim();
  const appointmentAdvisor = String(formData.get("appointmentAdvisor") || "").trim();
  const projectType = String(formData.get("projectType") || "").trim();
  const services = String(formData.get("services") || "").trim();
  const websiteScope = String(formData.get("websiteScope") || "").trim();
  const seoCompetition = String(formData.get("seoCompetition") || "").trim();
  const startWindow = String(formData.get("startWindow") || "").trim();
  const priceEstimate = String(formData.get("priceEstimate") || "").trim();
  const projectDescription = String(formData.get("projectDescription") || "").trim();
  const rawFiles = formData.getAll("projectFiles").filter((entry): entry is File => entry instanceof File);

  if (!email || !message || (submissionType !== "Terminbuchung" && !name)) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 },
    );
  }

  if (
    submissionType === "Terminbuchung" &&
    (!appointmentDate || !appointmentTime || !appointmentAdvisor)
  ) {
    return NextResponse.json(
      { error: "Bitte Ansprechperson, Datum und Uhrzeit auswählen." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL || "info@digitalvision.site";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Mailversand ist noch nicht konfiguriert." },
      { status: 500 },
    );
  }

  if (submissionType === "Terminbuchung") {
    try {
      await ensureAppointmentsTable();
      const inserted = await createAppointment({
        appointmentDate,
        appointmentTime,
        advisor: appointmentAdvisor,
        email,
        projectType,
        services,
        websiteScope,
        seoCompetition,
        startWindow,
        priceEstimate,
      });

      if (!inserted) {
        return NextResponse.json(
          { error: "Dieser Termin ist inzwischen bereits ausgebucht." },
          { status: 409 },
        );
      }
    } catch (error) {
      console.error("Appointment insert error:", error);
      return NextResponse.json(
        { error: "Termin konnte nicht gespeichert werden." },
        { status: 502 },
      );
    }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "DigitalVision <onboarding@resend.dev>",
      to: recipient,
      reply_to: email,
      subject:
        submissionType === "Terminbuchung"
          ? "Neue Terminbuchung über DigitalVision"
          : "Neue Projektanfrage über DigitalVision",
      text: [
        submissionType === "Terminbuchung"
          ? "Neue Terminbuchung über DigitalVision"
          : "Neue Projektanfrage über DigitalVision",
        "",
        `Name: ${name || "Terminbuchung"}`,
        `E-Mail: ${email}`,
        submissionType === "Terminbuchung" ? `Ansprechperson: ${appointmentAdvisor}` : "",
        "",
        submissionType === "Terminbuchung" ? "Terminwunsch:" : "Projekt:",
        message,
        projectDescription ? "" : "",
        projectDescription ? "Zusätzliche Projektbeschreibung:" : "",
        projectDescription || "",
        rawFiles.length > 0 ? "" : "",
        rawFiles.length > 0 ? `Dateien: ${rawFiles.map((file) => file.name).join(", ")}` : "",
      ].join("\n"),
      attachments: await Promise.all(
        rawFiles.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()).toString("base64"),
        })),
      ),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage =
      typeof errorData?.message === "string" ? errorData.message : "";

    console.error("Resend error:", {
      status: response.status,
      message: errorMessage,
      details: errorData,
    });

    if (response.status === 403 && errorMessage.includes("verify a domain")) {
      return NextResponse.json(
        {
          error:
            "E-Mail-Versand ist noch nicht freigeschaltet. Die Domain digitalvision.site muss zuerst bei Resend verifiziert werden.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
