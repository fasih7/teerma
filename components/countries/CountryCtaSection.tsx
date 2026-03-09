"use client";

import { Button } from "@/components/ui/button";
interface CountryCtaSectionProps {
  heading: string;
  body: string;
  buttonText: string;
}

export default function CountryCtaSection({ heading, body, buttonText }: CountryCtaSectionProps) {
  const scrollToContact = () => {
    if (typeof window === "undefined") return;
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, #1a1f24 0%, #1B2D3A 30%, #162530 70%, #1a1f24 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 20V40H20'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(75,191,184,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2 mb-4"
          style={{ color: "rgba(75, 191, 184, 0.9)" }}
        >
          <span
            className="w-8 h-0.5 rounded-full shrink-0"
            style={{ backgroundColor: "currentColor" }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
            Get started
          </span>
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 max-w-2xl mx-auto leading-tight"
          style={{ color: "#F5F0E8" }}
        >
          {heading}
        </h2>
        <p
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#B8AEA4" }}
        >
          {body}
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base font-semibold px-8 py-4 h-auto rounded-xl cursor-pointer transition-all shadow-lg"
            style={{
              backgroundColor: "#D4522A",
              color: "#FFFFFF",
              boxShadow: "0 4px 14px rgba(212, 82, 42, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#BE4924";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(212, 82, 42, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D4522A";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(212, 82, 42, 0.35)";
            }}
          >
            {buttonText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base font-semibold px-8 py-4 h-auto rounded-xl border-2 transition-all"
            style={{
              borderColor: "rgba(75, 191, 184, 0.6)",
              color: "#4BBFB8",
              backgroundColor: "rgba(75, 191, 184, 0.08)",
            }}
          >
            <a
              href="https://wa.me/923058787447"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
