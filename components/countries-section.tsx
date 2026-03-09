"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useCallback, useEffect } from "react";
import { getCountriesList } from "@/lib/country-data";

const countries = getCountriesList();

export default function CountriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 1
    );
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="countries"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1B2D3A 0%, #162530 50%, #1B2D3A 100%)" }}
    >
      {/* Teal accent radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(75,191,184,0.07) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: "#4BBFB8", letterSpacing: "2px" }}
          >
            Study Destinations
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#F2E8DC" }}
          >
            Choose Your Dream Country
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#C9BDB5" }}>
            Explore study destinations across the globe and find the perfect fit
            for your academic journey
          </p>
        </div>

        {/* Horizontal scroll wrapper with buttons */}
        <div className="relative flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll countries left"
            className={`shrink-0 p-3 rounded-full border-2 transition-all shadow-md hover:scale-110 ${
              canScrollLeft
                ? "border-[#4BBFB8]/50 text-[#4BBFB8] hover:bg-[#4BBFB8] hover:text-[#2A2320] hover:border-[#4BBFB8]"
                : "border-white/10 text-white/20 cursor-not-allowed opacity-40"
            }`}
            disabled={!canScrollLeft}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-6 overflow-x-auto scroll-smooth py-2 -mx-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="snap-start block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFB8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2D3A] rounded-xl"
              >
                <Card
                  className="group relative h-[380px] w-[280px] min-w-[280px] overflow-hidden rounded-xl border-2 border-white/10 hover:border-[#4BBFB8]/60 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(75,191,184,0.2)]"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={country.heroImage}
                        alt={country.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="280px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/15 group-hover:to-transparent transition-all duration-300" />

                    <CardContent className="relative h-full flex flex-col justify-end p-5 z-10">
                      <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#4BBFB8] transition-colors duration-300">
                        {country.name}
                      </h3>
                      <p className="text-sm text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-2">
                        {country.shortDescription}
                      </p>
                      <div className="mt-3 h-1 w-0 bg-[#4BBFB8] group-hover:w-12 transition-all duration-300 rounded-full" />
                    </CardContent>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#4BBFB8]/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll countries right"
            className={`shrink-0 p-3 rounded-full border-2 transition-all shadow-md hover:scale-110 ${
              canScrollRight
                ? "border-[#4BBFB8]/50 text-[#4BBFB8] hover:bg-[#4BBFB8] hover:text-[#2A2320] hover:border-[#4BBFB8]"
                : "border-white/10 text-white/20 cursor-not-allowed opacity-40"
            }`}
            disabled={!canScrollRight}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="mb-4" style={{ color: "#C9BDB5" }}>
            Don&apos;t see your preferred destination?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold hover:underline"
            style={{ color: "#4BBFB8" }}
          >
            Contact us to explore more options
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
