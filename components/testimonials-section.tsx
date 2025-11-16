"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  country: string;
  university: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Moeen Uddin",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "I am writing to express my deepest gratitude to your entire team for your exceptional support and guidance throughout my UK student visa application process. Your professionalism and expertise have made this process smooth and stress-free for me.",
    date: "2025-01-15",
  },
  {
    name: "Hashir Ali",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "Highly recommend especially Sir Mudassar from FES Rawalpindi branch. Highly expert and cooperative person. Strongly dedicated towards his profession.",
    date: "2024-12-27",
  },
  {
    name: "Muhammad Saqlain Arif",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "I wanna appreciate Mudassir bhai who is currently working in FES Rawalpindi. He guided me well about everything because I didn't have knowledge about some of the steps. Overall I have good experience with your team member.",
    date: "2024-12-26",
  },
  {
    name: "Sohaib Ali",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "I contacted Mr. Amir from FES for my masters program which I wanted to pursue in the UK. Mr. Amir was very helpful, always ready to answer any queries, explained the whole process very well and coached me before any interview. I highly recommend FES and especially Mr. Amir.",
    date: "2024-12-19",
  },
  {
    name: "Waji Satti",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "I had an excellent experience with FES Consultancy Firm for my UK study process. Alhamdulillah, everything went smoothly, thanks to the exceptional guidance of Mr. Amer Aziz. He took up my case with utmost professionalism and provided me with clear and precise instructions at every step.",
    date: "2024-12-13",
  },
  {
    name: "Adeel Awan",
    country: "United Kingdom",
    university: "UK University",
    rating: 5,
    text: "I recently engaged with FES Rawalpindi team for my admission and visa process. The process was seamless from start to finish. The team's professionalism, efficiency and dedication were exemplary throughout. I confidently recommend FES higher education consultant to anyone seeking informed, reliable and expert academic consultancy.",
    date: "2024-09-14",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const nextTestimonial = () => {
    setDirection("up");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("down");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? "up" : "down");
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-background via-secondary/50 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,181,173,0.12),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who have successfully achieved their study
            abroad dreams
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto mb-8">
          <div
            key={`${currentIndex}-${direction}`}
            className={
              direction === "up" ? "animate-slide-up" : "animate-slide-down"
            }
          >
            <Card className="border-2 hover:border-accent transition-all duration-300 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-2 ring-offset-background shadow-lg">
                      <Image
                        src="/images/person1.jpg"
                        alt={testimonials[currentIndex].name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <StarRating rating={testimonials[currentIndex].rating} />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="pt-4 border-t w-full">
                    <p className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].country} •{" "}
                      {testimonials[currentIndex].university}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(
                        testimonials[currentIndex].date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-accent/20 hover:bg-accent hover:text-black text-accent border-2 border-accent/40 hover:border-accent transition-all hover:scale-110 shadow-md hover:shadow-lg hover:shadow-accent/50"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-accent/20 hover:bg-accent hover:text-black text-accent border-2 border-accent/40 hover:border-accent transition-all hover:scale-110 shadow-md hover:shadow-lg hover:shadow-accent/50"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>
      </div>
    </section>
  );
}
