"use client";

import ScrollAnimation from "@/components/scroll-animation";

const pillars = [
  {
    title: "Honest Guidance",
    description: "Clear, realistic picture of your options so you make confident decisions at every step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    title: "Affordable Destinations",
    description: "World-class education at costs that genuinely work for Pakistani families.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Visa Expertise",
    description: "Deep knowledge across multiple countries — every application prepared with precision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="7" y1="9" x2="17" y2="9" />
        <line x1="7" y1="13" x2="13" y2="13" />
      </svg>
    ),
  },
  {
    title: "Personal Attention",
    description: "Dedicated support from someone who knows your case, goals, and timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const destinations = ["Cyprus", "Russia", "Malaysia", "China", "Uzbekistan"];

export default function AboutSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="py-[60px] md:py-[100px] relative" style={{ backgroundColor: "#F2E8DC" }}>
      {/* Top decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, #4BBFB8 30%, #4BBFB8 70%, transparent 100%)", opacity: 0.3 }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-16" style={{ maxWidth: "1320px" }}>

        {/* Section label */}
        <ScrollAnimation animation="fade-in">
          <p
            className="text-center text-[13px] font-semibold uppercase mb-4"
            style={{ color: "#4BBFB8", letterSpacing: "2px" }}
          >
            Our Story
          </p>
        </ScrollAnimation>

        {/* Main heading */}
        <ScrollAnimation animation="fade-in" delay={100}>
          <h2
            className="text-center text-[38px] md:text-[44px] font-bold leading-[1.2] mb-12 mx-auto"
            style={{ color: "#2A2320", maxWidth: "700px" }}
          >
            Born From the Industry. Built for the Student.
          </h2>
        </ScrollAnimation>

        {/* 2-column text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mb-16 items-center">
          {/* Left column */}
          <ScrollAnimation animation="slide-in-left" delay={150}>
            <div className="space-y-6">
              <p className="text-[17px] leading-[1.8]" style={{ color: "#2A2320" }}>
                Teerma was built on 6+ years of firsthand experience — personally handling
                applications, managing visa files, and guiding hundreds of students through
                one of the most important decisions of their lives.
              </p>
              <p className="text-[17px] leading-[1.8]" style={{ color: "#2A2320" }}>
                We started with one belief: every deserving Pakistani student deserves access
                to quality international education with complete clarity, genuine support,
                and guidance they can fully trust.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right column */}
          <ScrollAnimation animation="slide-in-right" delay={200}>
            <div className="space-y-6">
              <p className="text-[17px] leading-[1.8]" style={{ color: "#2A2320" }}>
                We&apos;ve built direct partnerships with universities across the world&apos;s most
                rewarding and affordable study destinations — and the result is hundreds of
                students successfully enrolled, building futures they once only imagined.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {destinations.map((d) => (
                  <span
                    key={d}
                    className="text-[13px] font-semibold px-4 py-1.5 rounded-full"
                    style={{ backgroundColor: "#2A2320", color: "#F2E8DC" }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Value Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((pillar, index) => (
            <ScrollAnimation key={pillar.title} animation="fade-in-up" delay={index * 100}>
              <div
                className="flex flex-col p-7 rounded-2xl transition-all duration-300 cursor-default h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderLeft: "4px solid #4BBFB8",
                  boxShadow: "0 2px 8px rgba(42,35,32,0.07), 0 8px 24px rgba(42,35,32,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(75,191,184,0.18)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(42,35,32,0.07), 0 8px 24px rgba(42,35,32,0.05)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: "#4BBFB8", color: "#FFFFFF" }}
                >
                  {pillar.icon}
                </div>
                {/* Title */}
                <h3 className="text-[17px] font-semibold mb-2.5" style={{ color: "#2A2320" }}>
                  {pillar.title}
                </h3>
                {/* Description */}
                <p className="text-[14px] leading-[1.7]" style={{ color: "#6b5c56" }}>
                  {pillar.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Closing line + CTA */}
        <ScrollAnimation animation="fade-in" delay={100}>
          <div className="text-center mt-16">
            <p
              className="text-[20px] font-light italic mx-auto mb-8"
              style={{ color: "#2A2320", maxWidth: "560px" }}
            >
              We&apos;ve guided hundreds of students from their first question to their first day on campus. Yours could be next.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-block text-[16px] font-semibold text-white rounded-md transition-all hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: "#D4522A",
                padding: "16px 36px",
                border: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#BE4924")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D4522A")}
            >
              Start Your Journey
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
