import Image from "next/image";
import { useTranslations } from "next-intl";
import teamPhoto from "@/public/static/images/Woman_Cleaning.jpg.jpeg";

export default function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-brand-green-dark sm:text-3xl">
            {t("heading")}
          </h2>
          <div className="flex flex-col gap-4 text-brand-green-dark/80">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src={teamPhoto}
            alt="Golden Trees cleaning team member at work"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
