import { useTranslations } from "next-intl";

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8 text-brand-gold"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function BinocularsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8 text-brand-gold"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="6" height="9" rx="2" />
      <rect x="15" y="9" width="6" height="9" rx="2" />
      <path d="M9 12h6M8 9l1-4h6l1 4" />
    </svg>
  );
}

export default function MissionVision() {
  const mission = useTranslations("mission");
  const vision = useTranslations("vision");

  return (
    <section className="bg-brand-green-dark py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-8">
          <TargetIcon />
          <h2 className="text-xl font-bold">{mission("heading")}</h2>
          <p className="text-white/80">{mission("body")}</p>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-8">
          <BinocularsIcon />
          <h2 className="text-xl font-bold">{vision("heading")}</h2>
          <p className="text-white/80">{vision("body")}</p>
        </div>
      </div>
    </section>
  );
}
