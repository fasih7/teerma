import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import CountriesSection from "@/components/countries-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CountriesSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </main>
  );
}
