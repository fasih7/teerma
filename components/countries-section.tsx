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

        {/* Horizontal scroll: flex-1 min-w-0 so the strip can shrink; cards min-w-full on small screens so one swipe = one card */}
        <div className="relative flex items-stretch md:items-center gap-0 md:gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll countries left"
            className={`hidden md:flex shrink-0 self-center p-3 rounded-full border-2 transition-all shadow-md hover:scale-110 ${
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
            className="flex flex-1 min-w-0 gap-4 md:gap-6 overflow-x-auto overflow-y-hidden py-2 -mx-1 px-1 snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="snap-start [scroll-snap-stop:always] shrink-0 block w-full min-w-full max-w-full md:w-[280px] md:min-w-[280px] md:max-w-[280px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFB8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2D3A] rounded-xl"
              >
                <Card
                  className="group relative h-[min(380px,72vw)] sm:h-[380px] overflow-hidden rounded-xl border border-white/[0.12] bg-[#162530]/90 shadow-lg shadow-black/20 ring-1 ring-white/[0.06] transition-[transform,box-shadow,border-color] duration-300 md:hover:border-[#4BBFB8]/50 md:hover:shadow-[0_12px_40px_rgba(75,191,184,0.18)] md:hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                      <Image
                        src={country.heroImage}
                        alt={country.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        quality={90}
                        className="object-cover object-center transition-transform duration-500 ease-out md:group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Readability at bottom only so photos stay vivid */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[inherit]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,18,24,0.82) 0%, rgba(10,18,24,0.35) 38%, rgba(10,18,24,0.08) 55%, transparent 72%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4BBFB8]/35 to-transparent opacity-80" />

                    <CardContent className="relative h-full flex flex-col justify-end p-5 sm:p-6 z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F2E8DC] mb-1.5 md:group-hover:text-[#4BBFB8] transition-colors duration-300 drop-shadow-sm">
                        {country.name}
                      </h3>
                      <p className="text-sm text-[#F2E8DC]/90 md:group-hover:text-[#F2E8DC] transition-colors duration-300 line-clamp-2 leading-relaxed">
                        {country.shortDescription}
                      </p>
                      <div className="mt-3 h-0.5 w-0 bg-[#4BBFB8] md:group-hover:w-12 transition-all duration-300 rounded-full" />
                    </CardContent>

                    <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-[#4BBFB8]/12 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll countries right"
            className={`hidden md:flex shrink-0 self-center p-3 rounded-full border-2 transition-all shadow-md hover:scale-110 ${
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
