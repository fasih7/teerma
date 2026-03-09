import HeroSection from "@/components/legacy/hero-section";
import StatsSection from "@/components/legacy/stats-section";
import ServicesSection from "@/components/legacy/services-section";
import CountriesSection from "@/components/legacy/countries-section";
import TestimonialsSection from "@/components/legacy/testimonials-section";
import ContactSection from "@/components/legacy/contact-section";

export default function LegacyHome() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CountriesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
