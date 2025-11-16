"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/scroll-animation";

interface Country {
  name: string;
  image: string;
  description: string;
}

const countries: Country[] = [
  {
    name: "Australia",
    image: "/images/Australia.jpg",
    description: "High-quality education and excellent quality of life",
  },
  {
    name: "United States",
    image: "/images/america.webp",
    description: "Leading institutions and diverse opportunities",
  },
  {
    name: "Canada",
    image: "/images/Canada.webp",
    description: "Affordable education and welcoming environment",
  },
  {
    name: "Russia",
    image: "/images/russia.jpg",
    description: "Rich cultural heritage and world-class universities",
  },
];

export default function CountriesSection() {
  return (
    <section
      id="countries"
      className="py-20 bg-gradient-to-b from-background via-secondary/50 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,181,173,0.12),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Dream Country
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore study destinations across the globe and find the perfect fit
            for your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <Card className="group relative h-[400px] overflow-hidden rounded-lg border-2 border-border/50 hover:border-accent/50 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />

                  {/* Content */}
                  <CardContent className="relative h-full flex flex-col justify-end p-6 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {country.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 group-hover:text-white transition-colors duration-300">
                      {country.description}
                    </p>

                    {/* Decorative accent line */}
                    <div className="mt-4 h-1 w-0 bg-accent group-hover:w-16 transition-all duration-500 rounded-full" />
                  </CardContent>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your preferred destination?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
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
