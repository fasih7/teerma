"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

// Color schemes for each stat card
const cardColors = [
  {
    bg: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-600",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
  },
  {
    bg: "from-teal-500 to-teal-600",
    iconBg: "bg-teal-500/20",
    iconColor: "text-teal-600",
    border: "border-teal-200",
    hoverBorder: "hover:border-teal-400",
  },
  {
    bg: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-600",
    border: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
  },
  {
    bg: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-600",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
  },
  {
    bg: "from-green-500 to-green-600",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-600",
    border: "border-green-200",
    hoverBorder: "hover:border-green-400",
  },
  {
    bg: "from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-600",
    border: "border-indigo-200",
    hoverBorder: "hover:border-indigo-400",
  },
];

const stats: Stat[] = [
  {
    value: 22,
    suffix: " Years",
    label: "of Experience",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: 12,
    suffix: " Offices",
    label: "in Pakistan, UK, UAE & Malaysia",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    value: 13,
    label: "Countries",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: 170,
    suffix: "+",
    label: "Universities & Colleges",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    value: 50,
    suffix: "K+",
    label: "Success Stories",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    value: 95,
    suffix: "%",
    label: "Visa Success Rate",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      id="about"
      className="pt-32 pb-20 bg-gradient-to-b from-background via-secondary/50 to-background relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,181,173,0.12),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of students for their study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const colors = cardColors[index % cardColors.length];
            return (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:shadow-2xl hover:scale-105 group cursor-pointer bg-white`}
              >
                {/* Gradient background overlay - subtle by default, full on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-10 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card content */}
                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  {/* Icon with colored background */}
                  <div
                    className={`flex justify-center ${colors.iconBg} rounded-full w-16 h-16 items-center mx-auto group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}
                  >
                    <div
                      className={`${colors.iconColor} group-hover:text-white transition-colors duration-300`}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Stat value and label */}
                  <div className="space-y-2">
                    <div
                      className={
                        colors.iconColor +
                        " group-hover:text-white transition-colors duration-300"
                      }
                    >
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative accent line */}
                  <div
                    className={`h-1 w-12 mx-auto rounded-full ${colors.iconBg} group-hover:bg-white/30 transition-colors duration-300`}
                  />
                </CardContent>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
