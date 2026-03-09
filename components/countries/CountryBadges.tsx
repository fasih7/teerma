import type { BadgeType } from "@/lib/country-data";

interface CountryBadgesProps {
  badges: BadgeType[];
}

const badgeConfig: Record<
  BadgeType,
  { label: string; className: string }
> = {
  englishMedium: {
    label: "English Medium",
    className:
      "bg-[#4BBFB8]/90 text-white border border-[#4BBFB8]/40 shadow-sm",
  },
  englishAndRussian: {
    label: "English & Russian Medium",
    className:
      "bg-[#4BBFB8]/90 text-white border border-[#4BBFB8]/40 shadow-sm",
  },
  whoPmdc: {
    label: "WHO & PMDC Recognized",
    className:
      "bg-[#1B6B2F]/95 text-white border border-[#2d8a3e]/50 shadow-sm",
  },
  whoEcfmgPmdc: {
    label: "WHO · ECFMG · PMDC",
    className:
      "bg-[#1B6B2F]/95 text-white border border-[#2d8a3e]/50 shadow-sm",
  },
  cscScholarship: {
    label: "Fully Funded Master's & PhD (CSC)",
    className:
      "bg-[#B8860B]/95 text-white border border-[#c99a1a]/50 shadow-sm",
  },
  scholarshipAvailable: {
    label: "Scholarship Available",
    className:
      "bg-[#1B6B2F]/15 text-[#7dd192] border border-[#1B6B2F]/35 backdrop-blur-sm",
  },
  partTimeWorkAllowed: {
    label: "Part-Time Work Allowed",
    className:
      "bg-[#1B6B2F]/15 text-[#7dd192] border border-[#1B6B2F]/35 backdrop-blur-sm",
  },
  feeWaiver50: {
    label: "50% Fee Waiver from Year 2",
    className:
      "bg-[#4BBFB8]/90 text-white border border-[#4BBFB8]/40 shadow-sm",
  },
  meritScholarships: {
    label: "Merit Scholarships Available",
    className:
      "bg-[#1B6B2F]/15 text-[#7dd192] border border-[#1B6B2F]/35 backdrop-blur-sm",
  },
};

export default function CountryBadges({ badges }: CountryBadgesProps) {
  if (badges.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((key) => {
        const config = badgeConfig[key];
        if (!config) return null;
        return (
          <span
            key={key}
            className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-colors ${config.className}`}
          >
            {config.label}
          </span>
        );
      })}
    </div>
  );
}
