import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand-gold" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.4 2.3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-brand-gold" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-brand-gold" aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand-gold" aria-hidden="true">
      <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.54 0 1.68.44 3.3 1.28 4.74L2.5 21.5l4.86-1.27a9.5 9.5 0 004.68 1.24h.01c5.26 0 9.54-4.28 9.54-9.54s-4.28-9.43-9.55-9.43zm5.6 13.63c-.24.66-1.38 1.26-1.9 1.34-.5.08-1.11.11-1.8-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.11-4.85-4.3-.14-.19-1.16-1.55-1.16-2.96s.73-2.1.99-2.39c.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.64.49.24.57.81 1.98.88 2.12.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.23 1.38.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.74 1.85.88.27.13.45.19.51.3.07.11.07.62-.17 1.28z" />
    </svg>
  );
}

export default function Contact() {
  const t = useTranslations("contact");
  const phones = t.raw("phones") as string[];

  return (
    <section id="contact" className="scroll-mt-20 bg-brand-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-brand-green-dark sm:text-3xl">
          {t("heading")}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-brand-green-dark/75">
          {t("intro")}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-green/10 sm:p-8">
            <div className="flex items-start gap-3">
              <PhoneIcon />
              <div>
                <p className="text-sm font-semibold text-brand-green-dark">
                  {t("phoneLabel")}
                </p>
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="block text-brand-green-dark/80 hover:text-brand-green"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <WhatsAppIcon />
              <div>
                <p className="text-sm font-semibold text-brand-green-dark">
                  {t("whatsappLabel")}
                </p>
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`https://wa.me/${phone.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-brand-green-dark/80 hover:text-brand-green"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPinIcon />
              <div>
                <p className="text-sm font-semibold text-brand-green-dark">
                  {t("locationLabel")}
                </p>
                <p className="text-brand-green-dark/80">{t("location")}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon />
              <div>
                <p className="text-sm font-semibold text-brand-green-dark">
                  {t("emailLabel")}
                </p>
                <a
                  href={`mailto:${t("email")}`}
                  className="text-brand-green-dark/80 hover:text-brand-green"
                >
                  {t("email")}
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <a
        href="https://wa.me/255658206666"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label={t("whatsappLabel")}
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
