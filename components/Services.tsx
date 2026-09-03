import Image, { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import floorCleaningPhoto from "@/public/static/images/Man_Cleaning.jpg.jpeg";
import cleaningCartPhoto from "@/public/static/images/Cleaning_Accessories.jpg.jpeg";
import carWashPhoto from "@/public/static/images/car wash.jpg.jpeg";
import pestsIcon from "@/public/static/images/Pests.jpg.jpeg";

function BulletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-1 h-4 w-4 shrink-0 text-brand-gold"
      aria-hidden="true"
    >
      <path d="M12 2l2.6 6.2L21 10l-5.2 4.4L17.4 21 12 17.3 6.6 21l1.6-6.6L3 10l6.4-1.8L12 2z" />
    </svg>
  );
}

function ServiceGroup({
  heading,
  items,
  decorationSrc,
  decorationAlt,
}: {
  heading: string;
  items: string[];
  decorationSrc?: StaticImageData;
  decorationAlt?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-green/10 sm:p-8">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-brand-green-dark">
          {heading}
        </h3>
        {decorationSrc && (
          <Image
            src={decorationSrc}
            alt={decorationAlt ?? ""}
            className="h-16 w-16 shrink-0 rounded-full object-cover"
          />
        )}
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-brand-green-dark/85">
            <BulletIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhotoTile({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-xl shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function Services() {
  const t = useTranslations("services");
  const cleaningItems = t.raw("cleaning.items") as string[];
  const fumigationItems = t.raw("fumigation.items") as string[];

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-brand-cream py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-2xl font-bold text-brand-green-dark sm:text-3xl">
          {t("heading")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceGroup heading={t("cleaning.heading")} items={cleaningItems} />
          <ServiceGroup
            heading={t("fumigation.heading")}
            items={fumigationItems}
            decorationSrc={pestsIcon}
            decorationAlt="Pests targeted by fumigation service"
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <PhotoTile src={floorCleaningPhoto} alt="Floor cleaning in progress" />
          <PhotoTile src={cleaningCartPhoto} alt="Cleaning supplies and accessories" />
          <PhotoTile src={carWashPhoto} alt="Car wash service" />
        </div>
      </div>
    </section>
  );
}
