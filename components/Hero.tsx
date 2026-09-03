import Image from "next/image";
import { useTranslations } from "next-intl";
import heroImage from "@/public/static/images/Cleaners.jpg.jpeg";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-block w-fit rounded-full border border-brand-gold/60 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            {t("tagline")}
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t("brand")}
          </h1>
          <p className="max-w-xl text-base text-white/85 sm:text-lg">
            {t("intro")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark shadow-lg transition-transform hover:scale-105"
            >
              {t("ctaQuote")}
            </a>
            <a
              href="tel:+255658206666"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("ctaCall")}
            </a>
          </div>
        </div>
        <div className="relative min-h-[260px] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={heroImage}
            alt="Professional cleaning equipment"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
