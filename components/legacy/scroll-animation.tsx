"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    "fade-in-up": isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "animate-fade-in" : "opacity-0",
    "slide-in-left": isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-8",
    "slide-in-right": isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8",
    "scale-in": isVisible ? "animate-scale-in" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
}
