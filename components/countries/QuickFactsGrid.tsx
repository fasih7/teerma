import type { QuickFact } from "@/lib/country-data";

interface QuickFactsGridProps {
  facts: QuickFact[];
}

function IconForFact({ icon }: { icon?: QuickFact["icon"] }) {
  const baseClass = "w-5 h-5 flex-shrink-0";
  const color = "#4BBFB8";
  switch (icon) {
    case "location":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "language":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      );
    case "recognition":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "fee":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "scholarship":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      );
    case "work":
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg className={baseClass} fill="none" stroke={color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

export default function QuickFactsGrid({ facts }: QuickFactsGridProps) {
  return (
    <div className="rounded-xl">
      <div className="inline-flex items-center gap-2 mb-5" style={{ color: "#4BBFB8" }}>
        <span
          className="w-8 h-0.5 rounded-full shrink-0"
          style={{ backgroundColor: "currentColor" }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ letterSpacing: "0.2em" }}
        >
          Quick Facts
        </span>
      </div>
      <h2 className="text-lg font-semibold mb-5" style={{ color: "#2A2320" }}>
        At a glance
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {facts.map((fact, i) => (
          <li
            key={i}
            className="flex gap-3.5 py-3 px-0 rounded-lg transition-colors"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(75, 191, 184, 0.12)",
            }}
          >
            <span className="mt-0.5 shrink-0 flex items-center justify-center w-9 h-9 rounded-lg" style={{ backgroundColor: "rgba(75, 191, 184, 0.1)" }}>
              <IconForFact icon={fact.icon} />
            </span>
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-wide block mb-0.5" style={{ color: "#4BBFB8" }}>
                {fact.label}
              </span>
              <span className="text-sm font-medium leading-snug" style={{ color: "#2A2320" }}>
                {fact.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
