"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const LOGOS = [
  { src: "/assets/marqueue/Logo 1.png", alt: "Partner Logo 1", width: 154, height: 84 },
  { src: "/assets/marqueue/Logo 2.png", alt: "Partner Logo 2", width: 154, height: 84 },
  { src: "/assets/marqueue/Logo 3.png", alt: "Partner Logo 3", width: 154, height: 84 },
  { src: "/assets/marqueue/Logo 4.png", alt: "Partner Logo 4", width: 154, height: 84 },
  { src: "/assets/marqueue/Logo 5.png", alt: "Partner Logo 5", width: 154, height: 84 },
  { src: "/assets/marqueue/Logo 6.png", alt: "Partner Logo 6", width: 150, height: 82 },
];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Trusted by partners"
      className="py-12 md:py-16 lg:py-20 border-b border-gray-100/80"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8"
      >
        <p className="text-xs font-mono-num text-gray-500 uppercase tracking-wider mb-6 md:mb-8">
          Trusted by:
        </p>

        {/* Infinite Animated Marquee Reel constrained to Navigation width */}
        <div className="relative w-full overflow-hidden marquee-mask py-3">
          <div className="animate-marquee flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 pr-8 sm:pr-10 md:pr-12 lg:pr-14">
            {/* First set of logos */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                  priority={index < 3}
                />
              </div>
            ))}

            {/* Duplicate set for seamless continuous looping */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
                aria-hidden="true"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


