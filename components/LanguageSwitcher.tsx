"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  sw: "SW",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-brand-gold/50 bg-white/10 p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() =>
            router.replace(pathname, { locale: loc, scroll: false })
          }
          aria-current={loc === locale}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            loc === locale
              ? "bg-brand-gold text-brand-green-dark"
              : "text-white hover:bg-white/10"
          }`}
        >
          {LOCALE_LABELS[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
