"use client";

import ScrollAnimation from "@/components/scroll-animation";

const COLORS = {
  sectionBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  teal: "#4BBFB8",
  burntOrange: "#D4522A",
  headingText: "#2A2320",
  bodyText: "#4A4A4A",
  mutedText: "#6B6B6B",
} as const;

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Career Counseling",
    description:
      "We map your strengths, interests, and goals to the right field and destination so your degree sets you up for long-term success.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "University & Course Selection",
    description:
      "We match you with the right institution and program for your profile, budget, and ambitions across our partner universities worldwide.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Documentation Assistance",
    description:
      "From transcripts and personal statements to reference letters, we make sure every document is complete, accurate, and ready to submit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Visa Processing",
    description:
      "We prepare your visa file with care and up-to-date knowledge of requirements so your application has the best chance of approval.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Scholarship Guidance",
    description:
      "We help you find government and university scholarships you qualify for and support you in building a standout application.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "IELTS & PTE Preparation",
    description:
      "When English proficiency tests are required, our in-house coaching gives you structured practice and the confidence to hit your target score.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Before you fly, we cover accommodation, banking, transport, and what to expect so you land informed and ready to settle in.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Post-Arrival Support",
    description:
      "We stay in touch after you arrive so your move into student life is smooth and you have support whenever you need it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 md:py-[100px]"
      style={{ backgroundColor: COLORS.sectionBg }}
    >
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <p
              className="text-[13px] font-semibold uppercase tracking-[2px] mb-4"
              style={{ color: COLORS.teal }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-[44px] font-bold max-w-[700px] mx-auto mb-5"
              style={{ color: COLORS.headingText }}
            >
              Everything you need. One team you can trust.
            </h2>
            <p
              className="text-base md:text-lg max-w-[650px] mx-auto leading-relaxed"
              style={{ color: COLORS.bodyText }}
            >
              From choosing the right university to settling into your new city — we are with you at every step.
            </p>
          </ScrollAnimation>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in-up"
              delay={100 + index * 100}
            >
              <article
                className="group h-full rounded-xl p-7 flex flex-col relative transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)]"
                style={{
                  backgroundColor: COLORS.cardBg,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #E8E4E0",
                  borderLeft: `4px solid ${COLORS.teal}`,
                }}
              >
                {/* Card counter */}
                <span
                  className="absolute top-5 right-5 text-xs font-semibold tabular-nums"
                  style={{ color: COLORS.mutedText }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: COLORS.teal }}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-[17px] font-semibold mb-2.5 pr-8"
                  style={{ color: COLORS.headingText }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-[1.7] flex-grow"
                  style={{ color: COLORS.bodyText }}
                >
                  {service.description}
                </p>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div className="text-center mt-12 md:mt-16">
          <ScrollAnimation animation="fade-in-up" delay={500}>
            <p
              className="text-base md:text-[19px] font-light italic max-w-2xl mx-auto mb-12"
              style={{ color: COLORS.bodyText }}
            >
              Every service we offer exists for one reason — to get you to your destination and help you thrive once you are there.
            </p>
            <a
              href="#contact"
              className="inline-block px-9 py-4 rounded-md font-semibold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
              style={{
                backgroundColor: COLORS.burntOrange,
                boxShadow: "0 4px 14px rgba(212, 82, 42, 0.25)",
              }}
            >
              Book Your Consultation
            </a>
            <p
              className="text-sm italic mt-3 max-w-md mx-auto"
              style={{ color: COLORS.mutedText }}
            >
              Not sure which services apply to you? Speak to a consultant and we will map out what your journey needs.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
