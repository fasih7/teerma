"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollAnimation from "@/components/legacy/scroll-animation";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cardColors = [
  {
    gradient: "from-blue-400/20 via-cyan-400/20 to-blue-500/20",
    iconBg: "bg-blue-400/20",
    iconColor: "text-blue-300",
    border: "border-blue-300/30",
    hoverBorder: "hover:border-blue-300/60",
    hoverGlow: "hover:shadow-blue-400/20",
  },
  {
    gradient: "from-teal-400/20 via-emerald-400/20 to-teal-500/20",
    iconBg: "bg-teal-400/20",
    iconColor: "text-teal-300",
    border: "border-teal-300/30",
    hoverBorder: "hover:border-teal-300/60",
    hoverGlow: "hover:shadow-teal-400/20",
  },
  {
    gradient: "from-purple-400/20 via-pink-400/20 to-purple-500/20",
    iconBg: "bg-purple-400/20",
    iconColor: "text-purple-300",
    border: "border-purple-300/30",
    hoverBorder: "hover:border-purple-300/60",
    hoverGlow: "hover:shadow-purple-400/20",
  },
  {
    gradient: "from-orange-400/20 via-amber-400/20 to-orange-500/20",
    iconBg: "bg-orange-400/20",
    iconColor: "text-orange-300",
    border: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    hoverGlow: "hover:shadow-orange-400/20",
  },
  {
    gradient: "from-green-400/20 via-emerald-400/20 to-green-500/20",
    iconBg: "bg-green-400/20",
    iconColor: "text-green-300",
    border: "border-green-300/30",
    hoverBorder: "hover:border-green-300/60",
    hoverGlow: "hover:shadow-green-400/20",
  },
  {
    gradient: "from-indigo-400/20 via-blue-400/20 to-indigo-500/20",
    iconBg: "bg-indigo-400/20",
    iconColor: "text-indigo-300",
    border: "border-indigo-300/30",
    hoverBorder: "hover:border-indigo-300/60",
    hoverGlow: "hover:shadow-indigo-400/20",
  },
  {
    gradient: "from-rose-400/20 via-pink-400/20 to-rose-500/20",
    iconBg: "bg-rose-400/20",
    iconColor: "text-rose-300",
    border: "border-rose-300/30",
    hoverBorder: "hover:border-rose-300/60",
    hoverGlow: "hover:shadow-rose-400/20",
  },
  {
    gradient: "from-cyan-400/20 via-sky-400/20 to-cyan-500/20",
    iconBg: "bg-cyan-400/20",
    iconColor: "text-cyan-300",
    border: "border-cyan-300/30",
    hoverBorder: "hover:border-cyan-300/60",
    hoverGlow: "hover:shadow-cyan-400/20",
  },
];

const services: Service[] = [
  {
    title: "Career Counseling",
    description:
      "Expert guidance to help you make the right career choices and find the perfect academic path that matches your skills and aspirations.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Admission Guidance",
    description:
      "Complete assistance with university applications, documentation, and admission processes to ensure your success.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Student Visa Assistance",
    description:
      "Expert support for visa applications with a 95% success rate. We guide you through every step of the visa process.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "IELTS & PTE Coaching",
    description:
      "Boost your scores with expert IELTS/PTE courses. Achieve your desired scores with our comprehensive coaching programs.",
    icon: (
      <svg
        className="w-10 h-10"
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
    title: "Scholarship Assistance",
    description:
      "We help you find and apply for scholarships to make your study abroad dream affordable and accessible.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Orientation",
    description:
      "Comprehensive support including air ticket booking, accommodation, and airport pickup to ensure a smooth transition.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Post-Departure Support",
    description:
      "Continued assistance after you arrive at your destination to help you adjust and succeed in your new environment.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Medical Requirements",
    description:
      "Guidance on health tests and medical requirements for your student visa application process.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive support for your study abroad journey from start to
            finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = cardColors[index % cardColors.length];
            return (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card
                  className={`group h-full flex flex-col relative overflow-hidden backdrop-blur-lg bg-white/10 border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer ${colors.hoverGlow} hover:shadow-2xl`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Card content */}
                  <CardHeader className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-grow flex flex-col">
                    <CardDescription className="text-base leading-relaxed text-gray-200 group-hover:text-gray-100 transition-colors flex-grow">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
