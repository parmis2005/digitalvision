import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
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
      subject: "Neue Projektanfrage über DigitalVision",
      text: [
        "Neue Projektanfrage über DigitalVision",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        "",
        "Projekt:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
