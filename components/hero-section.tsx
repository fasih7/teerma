"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "Hundreds of Students Placed",
  "6+ Years Industry Experience",
  "Proven Visa Success Rate",
  "10+ Study Destinations",
];

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1E1A17]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero3.jpg"
          alt="Students planning study abroad with Teerma Consultancy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none bg-black/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(30,26,23,0.94) 0%, rgba(30,26,23,0.78) 42%, rgba(30,26,23,0.35) 68%, rgba(30,26,23,0.08) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 78% 45%, rgba(75,191,184,0.08) 0%, transparent 62%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-20 lg:px-[120px] relative z-10 py-32 md:py-0">
        <div className="flex items-center min-h-screen">
          <div className="w-full max-w-[680px]">
            {/* Pre-headline */}
            <p
              className="text-sm font-semibold uppercase tracking-[2px] mb-4 animate-fade-in opacity-0"
              style={{
                color: "#4BBFB8",
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              Think Big. Study Abroad.
            </p>

            {/* Main Headline */}
            <h1
              className="text-4xl md:text-[58px] lg:text-[60px] font-bold leading-[1.2] mb-6 animate-fade-in opacity-0"
              style={{
                color: "#F2E8DC",
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              We Get You There —<br />
              and We Get You In.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg font-normal leading-[1.7] max-w-[680px] mb-5 animate-fade-in opacity-0"
              style={{
                color: "#C9BDB5",
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              Teerma Consultancy has guided hundreds of students to top
              universities across Cyprus, Russia, Malaysia, China, Uzbekistan,
              and beyond. With 6+ years of real industry experience and a proven
              visa success track record, we know exactly what your application
              needs.
            </p>

            {/* Supporting Line */}
            <p
              className="text-base font-light italic animate-fade-in mb-10 opacity-0"
              style={{
                color: "#F2E8DC",
                animationDelay: "0.7s",
                animationFillMode: "forwards",
              }}
            >
              <span style={{ opacity: 0.85 }}>
                No guesswork. No empty promises. Just expert guidance from
                people who have done this hundreds of times.
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-12 animate-fade-in opacity-0"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto text-base font-semibold px-8 py-4 h-auto rounded-md border-0 transition-all hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: "#D4522A",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#BE4924")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D4522A")
                }
              >
                Book Your Consultation
              </Button>

              {/* WhatsApp button — hidden on mobile (shown as sticky bar instead) */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hidden sm:inline-flex text-base font-semibold px-8 py-4 h-auto rounded-md transition-all hover:scale-105"
                style={{
                  borderColor: "#4BBFB8",
                  borderWidth: "2px",
                  color: "#4BBFB8",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4BBFB8";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#4BBFB8";
                }}
              >
                <a
                  href="https://wa.me/923058787447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              className="animate-fade-in opacity-0"
              style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
            >
              {/* Desktop: single row */}
              <div className="hidden md:flex items-center">
                {trustBadges.map((badge, index) => (
                  <div key={badge} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#4BBFB8"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className="text-[13px] font-medium whitespace-nowrap"
                        style={{ color: "#F2E8DC" }}
                      >
                        {badge}
                      </span>
                    </div>
                    {index < trustBadges.length - 1 && (
                      <div
                        className="mx-4 h-4 w-px"
                        style={{ backgroundColor: "#4BBFB8", opacity: 0.4 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile: 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#4BBFB8"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "#F2E8DC" }}
                    >
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile sticky WhatsApp bar */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3"
        style={{
          backgroundColor: "#2A2320",
          borderTop: "1px solid rgba(75, 191, 184, 0.2)",
        }}
      >
        <a
          href="https://wa.me/923058787447"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-base font-semibold text-white transition-all"
          style={{ backgroundColor: "#4BBFB8" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
