import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "goldenpalms25@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not configured");
    return NextResponse.json(
      { ok: false, error: "Email is not configured" },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const textLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email && `Email: ${email}`,
    service && `Service needed: ${service}`,
    message && `Message:\n${message}`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `"Golden Palms Website" <${gmailUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      text: textLines.join("\n\n"),
      html: textLines
        .map((line) => `<p>${escapeHtml(String(line)).replace(/\n/g, "<br/>")}</p>`)
        .join(""),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: failed to send email", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 502 },
    );
  }
}
