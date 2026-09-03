import { useTranslations } from "next-intl";

type WhyItem = { title: string; description: string };

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const items = t.raw("items") as WhyItem[];

  return (
    <section id="why-us" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <h2 className="mb-10 text-center text-2xl font-bold text-brand-green-dark sm:text-3xl">
        {t("heading")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-brand-gold/30 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-brand-green-dark">
              {item.title}
            </h3>
            <p className="text-sm text-brand-green-dark/75">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-base font-medium text-brand-gold">
        {t("footerLine")}
      </p>
    </section>
  );
}
