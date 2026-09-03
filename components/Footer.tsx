import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "@/public/golden Palms Logo.png";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-dark py-10 text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-sm sm:h-28 sm:w-28">
          <Image
            src={logo}
            alt={t("meta.title")}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="text-sm font-medium text-brand-gold">
          {t("footer.tagline")}
        </p>
        <p className="text-xs text-white/50">
          © {year} Golden Palms Cleaning Services. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
