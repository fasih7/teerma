import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import CountriesSection from "@/components/countries-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
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
