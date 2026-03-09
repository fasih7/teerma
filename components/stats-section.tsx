"use client";

import ScrollAnimation from "@/components/scroll-animation";

interface ReasonCard {
  number: string;
  icon: string;
  title: string;
  body: string;
}

const reasons: ReasonCard[] = [
  {
    number: "01",
    icon: "🏆",
    title: "A Track Record You Can Trust",
    body: "Hundreds of students successfully placed. A proven visa success rate across multiple countries. Six-plus years of real, hands-on industry experience. We do not quote numbers to impress you — we quote them because they represent real students whose futures we helped shape. When you work with Teerma, you are working with a team that has done this hundreds of times.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Honest Guidance. No Empty Promises.",
    body: "We will never tell you what you want to hear if it is not true. Our job is to give you a clear, realistic picture of your options — so you can make a confident, informed decision. If a destination or program is not right for your profile, we will tell you. If there is a better path, we will find it. Honest guidance is not just our policy. It is the foundation everything else is built on.",
  },
  {
    number: "03",
    icon: "🌍",
    title: "Direct Partnerships. Affordable Destinations.",
    body: "We have built direct relationships with universities across Cyprus, Russia, Uzbekistan, Malaysia, China, and beyond — giving our students access to programs that are genuinely vetted, genuinely affordable, and genuinely right for Pakistani students. We do not work with every university. We work with the right ones — and we know the difference.",
  },
  {
    number: "04",
    icon: "📋",
    title: "With You Before, During and After",
    body: "Our support does not end when your visa is approved or your flight is booked. From in-house IELTS coaching to pre-departure briefings, from airport arrival to settling into student life — Teerma stays with you at every stage of your journey. We are not just a consultancy. We are the team in your corner from your first question to your first day on campus and beyond.",
  },
];

export default function StatsSection() {
  return (
    <section
      id="why-teerma"
      className="relative overflow-hidden py-16 md:py-[100px]"
      style={{
        background: "linear-gradient(135deg, #0D5C56 0%, #0A4A47 50%, #1B7A6E 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10" style={{ maxWidth: "1320px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — text */}
          <div className="lg:sticky lg:top-32">
            <ScrollAnimation animation="fade-in-up">
              <p
                className="text-[13px] font-semibold uppercase mb-6"
                style={{ color: "#F2E8DC", letterSpacing: "2px", opacity: 0.8 }}
              >
                Why Teerma
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={100}>
              <h2
                className="text-[36px] md:text-[44px] font-bold leading-tight mb-6"
                style={{ color: "#FFFFFF" }}
              >
                The Difference Is in the Detail.
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <p
                className="text-[18px] leading-[1.7] mb-8"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Hundreds of consultancies promise results. We have a track
                record of delivering them — one student at a time, for over six
                years.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <a href="#contact">
                <button
                  className="text-[16px] font-semibold rounded-md cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#0A4A47",
                    padding: "16px 36px",
                    borderRadius: "6px",
                  }}
                >
                  Book Your Consultation
                </button>
              </a>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={400}>
              <p
                className="text-[18px] italic font-light leading-[1.7] mt-8"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Choosing the right consultancy is just as important as choosing
                the right university. We take both seriously.
              </p>
            </ScrollAnimation>
          </div>

          {/* Right column — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <ScrollAnimation
                key={reason.number}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div
                  className="relative rounded-lg p-7 transition-all duration-[250ms] ease-in-out hover:-translate-y-1 h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderTop: "3px solid #4BBFB8",
                    borderRadius: "8px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.15)";
                  }}
                >
                  <span
                    className="absolute top-4 right-4 text-[12px] font-semibold"
                    style={{ color: "#4BBFB8" }}
                  >
                    {reason.number}
                  </span>

                  <div
                    className="flex items-center justify-center rounded-full mb-3"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#2A2320",
                    }}
                  >
                    <span className="text-[22px] leading-none">
                      {reason.icon}
                    </span>
                  </div>

                  <h3
                    className="text-[18px] font-semibold mb-2.5"
                    style={{ color: "#2A2320" }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="text-[14px] leading-[1.7]"
                    style={{ color: "#1A1A1A" }}
                  >
                    {reason.body}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
