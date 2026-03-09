"use client";

import { Button } from "@/components/ui/button";

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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32"
    >
      {/* Background container with overflow hidden */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero1.jpg')",
            animation:
              "fade-in-zoom 1.5s ease-out forwards, zoom-slow 20s ease-in-out 1.5s infinite alternate",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Leading Education Consultant Since 22 Years
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
            <span className="gradient-text">Your Gateway to</span>
            <br />
            <span className="text-white">Global Education</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Professional student consultancy services helping students from
            Pakistan achieve their dreams of studying abroad. Your dream
            university is just one step away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[hsl(177,100%,28%)] hover:bg-[hsl(177,100%,32%)] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
            >
              Book Your Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold transition-all hover:scale-105 backdrop-blur-md"
            >
              Check Eligibility
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Indicator Cards - Overlapping with next section */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pointer-events-auto">
            {/* Card 1 */}
            <div
              className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up opacity-0 border border-blue-200/60"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">95%</h3>
                  <p className="text-sm text-muted-foreground">
                    Visa Success Rate
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gradient-to-br from-cyan-100 via-cyan-50 to-teal-100 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up opacity-0 border border-cyan-200/60"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    50,000+
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Successful Enrollments
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gradient-to-br from-teal-100 via-teal-50 to-blue-100 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up opacity-0 border border-teal-200/60"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">1,400+</h3>
                  <p className="text-sm text-muted-foreground">
                    Partner Institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
