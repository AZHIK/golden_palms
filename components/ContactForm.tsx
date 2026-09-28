"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-green/10 sm:p-8">
      <h3 className="mb-6 text-xl font-semibold text-brand-green-dark">
        {t("heading")}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-brand-green-dark">
              {t("name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-green-dark outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-brand-green-dark">
              {t("phone")}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-green-dark outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-brand-green-dark">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-green-dark outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-brand-green-dark">
            {t("service")}
          </label>
          <input
            id="service"
            name="service"
            type="text"
            placeholder={t("servicePlaceholder")}
            className="rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-green-dark outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-brand-green-dark">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t("messagePlaceholder")}
            className="resize-none rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-green-dark outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 w-full rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark shadow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("submitting") : t("submit")}
        </button>

        {status === "success" && (
          <p className="text-sm font-medium text-brand-green" role="status">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600" role="alert">
            {t("error")}
          </p>
        )}
      </form>

      <p className="mt-4 text-xs text-brand-green-dark/60">
        {t("mailtoFallback")}:{" "}
        <a
          href="mailto:goldentrees25@gmail.com"
          className="font-medium text-brand-green underline underline-offset-2"
        >
          goldentrees25@gmail.com
        </a>
      </p>
    </div>
  );
}
