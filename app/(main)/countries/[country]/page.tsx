import { notFound } from "next/navigation";
import { getCountryBySlug, getCountrySlugs } from "@/lib/country-data";
import Breadcrumbs from "@/components/countries/Breadcrumbs";
import CountryHero from "@/components/countries/CountryHero";
import QuickFactsGrid from "@/components/countries/QuickFactsGrid";
import FeeTable from "@/components/countries/FeeTable";
import HighlightBlock from "@/components/countries/HighlightBlock";
import FieldTags from "@/components/countries/FieldTags";
import CountryCtaSection from "@/components/countries/CountryCtaSection";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return getCountrySlugs().map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country Not Found | Teerma Consultancy" };
  return {
    title: country.seo.title,
    description: country.seo.description,
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const feeTableColumns =
    country.id === "uzbekistan"
      ? {
          program: "Charge",
          duration: "Per Semester",
          fee: "Amount",
          notes: "Notes",
        }
      : undefined;

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F2E8DC" }}>
      {/* <Breadcrumbs countryName={country.name} /> */}

      <CountryHero country={country} />

      {/* Quick facts + Fields of study */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-white/50"
            style={{
              background:
                "linear-gradient(145deg, #FAF8F5 0%, #F5F0EA 50%, #F0EBE3 100%)",
              boxShadow:
                "0 4px 6px -1px rgba(42, 35, 32, 0.06), 0 10px 20px -5px rgba(42, 35, 32, 0.08), 0 0 0 1px rgba(75, 191, 184, 0.06)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[rgba(75,191,184,0.12)]">
                <QuickFactsGrid facts={country.quickFacts} />
              </div>
              <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col">
                <div
                  className="inline-flex items-center gap-2 mb-1"
                  style={{ color: "#4BBFB8" }}
                >
                  <span
                    className="w-8 h-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: "currentColor" }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Fields of Study
                  </span>
                </div>
                <h2
                  className="text-lg font-semibold mb-4 mt-1"
                  style={{ color: "#2A2320" }}
                >
                  Popular programs
                </h2>
                <FieldTags fields={country.fieldsOfStudy} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening paragraph */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 sm:border-l-[3px]"
            style={{ borderLeftColor: "rgba(75, 191, 184, 0.5)" }}
          >
            <p
              className="text-[18px] sm:text-[19px] leading-[1.85] font-normal"
              style={{ color: "#2A2320" }}
            >
              {country.sections.opening}
            </p>
          </div>
        </div>
      </section>

      {/* Recognition / highlight blocks that should appear early (e.g. Uzbekistan) */}
      {country.highlightBlocks.some(
        (b) => b.type === "whoEcfmgPmdc" || b.type === "whoPmdcRecognition",
      ) && (
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="space-y-5">
              {country.highlightBlocks
                .filter(
                  (b) =>
                    b.type === "whoEcfmgPmdc" ||
                    b.type === "whoPmdcRecognition",
                )
                .map((block, i) => (
                  <HighlightBlock key={i} block={block} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs & fees */}
      <section className="py-14 md:py-20">
        <div
          className="rounded-2xl overflow-hidden border border-white/50 mx-4 sm:mx-6 lg:mx-8"
          style={{
            background:
              "linear-gradient(145deg, #FAF8F5 0%, #F5F0EA 50%, #F0EBE3 100%)",
            boxShadow:
              "0 4px 6px -1px rgba(42, 35, 32, 0.06), 0 10px 20px -5px rgba(42, 35, 32, 0.08), 0 0 0 1px rgba(75, 191, 184, 0.06)",
          }}
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 mb-1" style={{ color: "#4BBFB8" }}>
              <span
                className="w-8 h-0.5 rounded-full shrink-0"
                style={{ backgroundColor: "currentColor" }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Programs & fees
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-1" style={{ color: "#2A2320" }}>
              {country.sections.programsAndFees.heading}
            </h2>
            <p
              className="text-[17px] sm:text-[18px] leading-[1.8] mb-8 max-w-3xl"
              style={{ color: "#2A2320" }}
            >
              {country.sections.programsAndFees.body}
            </p>
            <div className="max-w-4xl">
              <FeeTable rows={country.feeTable} columns={feeTableColumns} />
            </div>
            {country.annualCostNote && (
              <div
                className="mt-6 p-6 sm:p-7 rounded-xl max-w-4xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(75, 191, 184, 0.25)",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1"
                  style={{ color: "#4BBFB8" }}
                >
                  Annual cost breakdown
                </p>
                <p
                  className="text-[16px] leading-[1.75]"
                  style={{ color: "#2A2320" }}
                >
                  {country.annualCostNote}
                </p>
              </div>
            )}
            {country.feeDisclaimer && (
              <p
                className="mt-4 text-sm max-w-4xl pl-4 border-l-2"
                style={{ color: "#6B6560", borderLeftColor: "rgba(0,0,0,0.08)" }}
              >
                {country.feeDisclaimer}
              </p>
            )}
            {/* Other highlight blocks (fee waiver, scholarship, CSC, etc.) */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-5 max-w-4xl">
              {country.highlightBlocks
                .filter(
                  (b) =>
                    b.type !== "whoEcfmgPmdc" &&
                    b.type !== "whoPmdcRecognition" &&
                    b.type !== "annualCost",
                )
                .map((block, i) => (
                  <HighlightBlock key={i} block={block} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language of instruction (if present) */}
      {country.sections.language && (
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="max-w-3xl rounded-2xl overflow-hidden border border-white/50 p-6 sm:p-8 lg:p-10"
              style={{
                background:
                  "linear-gradient(145deg, #FAF8F5 0%, #F5F0EA 100%)",
                boxShadow:
                  "0 4px 6px -1px rgba(42, 35, 32, 0.06), 0 0 0 1px rgba(75, 191, 184, 0.06)",
              }}
            >
              <div className="inline-flex items-center gap-2 mb-1" style={{ color: "#4BBFB8" }}>
                <span
                  className="w-8 h-0.5 rounded-full shrink-0"
                  style={{ backgroundColor: "currentColor" }}
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Language
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-1" style={{ color: "#2A2320" }}>
                {country.sections.language.heading}
              </h2>
              <p
                className="text-[17px] sm:text-[18px] leading-[1.8] pl-5 border-l-2"
                style={{ color: "#2A2320", borderLeftColor: "rgba(75, 191, 184, 0.4)" }}
              >
                {country.sections.language.body}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Why this country */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl rounded-2xl overflow-hidden border border-white/50 p-6 sm:p-8 lg:p-10"
            style={{
              background:
                "linear-gradient(145deg, #FAF8F5 0%, #F5F0EA 100%)",
              boxShadow:
                "0 4px 6px -1px rgba(42, 35, 32, 0.06), 0 0 0 1px rgba(75, 191, 184, 0.06)",
            }}
          >
            <div className="inline-flex items-center gap-2 mb-1" style={{ color: "#4BBFB8" }}>
              <span
                className="w-8 h-0.5 rounded-full shrink-0"
                style={{ backgroundColor: "currentColor" }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Why choose
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-1" style={{ color: "#2A2320" }}>
              {country.sections.whyCountry.heading}
            </h2>
            <p
              className="text-[17px] sm:text-[18px] leading-[1.8] pl-5 border-l-2"
              style={{ color: "#2A2320", borderLeftColor: "rgba(75, 191, 184, 0.4)" }}
            >
              {country.sections.whyCountry.body}
            </p>
          </div>
        </div>
      </section>

      {/* Student life */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl rounded-2xl overflow-hidden border border-white/50 p-6 sm:p-8 lg:p-10"
            style={{
              background:
                "linear-gradient(145deg, #FAF8F5 0%, #F5F0EA 100%)",
              boxShadow:
                "0 4px 6px -1px rgba(42, 35, 32, 0.06), 0 0 0 1px rgba(75, 191, 184, 0.06)",
            }}
          >
            <div className="inline-flex items-center gap-2 mb-1" style={{ color: "#4BBFB8" }}>
              <span
                className="w-8 h-0.5 rounded-full shrink-0"
                style={{ backgroundColor: "currentColor" }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Student life
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-1" style={{ color: "#2A2320" }}>
              {country.sections.studentLife.heading}
            </h2>
            <p
              className="text-[17px] sm:text-[18px] leading-[1.8] pl-5 border-l-2"
              style={{ color: "#2A2320", borderLeftColor: "rgba(75, 191, 184, 0.4)" }}
            >
              {country.sections.studentLife.body}
            </p>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <CountryCtaSection
        heading={country.sections.pageCta.heading}
        body={country.sections.pageCta.body}
        buttonText={country.sections.pageCta.buttonText}
      />
    </main>
  );
}
