import Image from "next/image";
import type { CountryConfig } from "@/lib/country-data";
import CountryBadges from "./CountryBadges";

interface CountryHeroProps {
  country: CountryConfig;
}

export default function CountryHero({ country }: CountryHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background: soft gradient + subtle noise/grid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #1a1614 0%, #252019 35%, #2c2622 60%, #1e1b18 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(75,191,184,0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(75,191,184,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase"
              style={{
                color: "#4BBFB8",
                letterSpacing: "0.1em",
                backgroundColor: "rgba(75,191,184,0.12)",
                border: "1px solid rgba(75,191,184,0.25)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
              }}
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(75,191,184,0.25)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#4BBFB8" }}
                />
              </span>
              Study Destination
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5"
              style={{ color: "#F5F0E8" }}
            >
              Study in{" "}
              <span className="relative inline-block">
                <span style={{ color: "#4BBFB8" }}>{country.name}</span>
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full opacity-60"
                  style={{ backgroundColor: "#4BBFB8" }}
                />
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl max-w-xl mb-8 font-normal leading-relaxed"
              style={{ color: "#B8AEA4" }}
            >
              {country.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <CountryBadges badges={country.badges} />
              <span
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold"
                style={{
                  color: "#4BBFB8",
                  backgroundColor: "rgba(75,191,184,0.1)",
                  border: "1px solid rgba(75,191,184,0.2)",
                }}
              >
                {country.feeRangeLabel}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-2xl opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(75,191,184,0.25) 0%, transparent 50%, rgba(75,191,184,0.1) 100%)",
                }}
              />
              <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[19/10] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
                <Image
                  src={country.heroImage}
                  alt={`Study in ${country.name}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%), linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 30%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
