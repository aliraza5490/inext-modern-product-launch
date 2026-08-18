"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-16 lg:py-20 border-b border-gray-100/80"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12"
      >
        <p className="text-xs font-mono-num text-gray-500 uppercase tracking-wider mb-6 md:mb-8">
          Trusted by:
        </p>

        {/* Desktop Marquee / Logos */}
        <div className="hidden lg:block w-full">
          <Image
            src="/assets/marqueue/desktop.png"
            alt="Trusted by partner logos"
            width={1140}
            height={70}
            className="w-full h-auto opacity-70 grayscale transition-opacity hover:opacity-100"
          />
        </div>

        {/* Tablet Logos */}
        <div className="hidden sm:block lg:hidden w-full">
          <Image
            src="/assets/marqueue/tablet.png"
            alt="Trusted by partner logos"
            width={700}
            height={90}
            className="w-full h-auto opacity-70 grayscale transition-opacity hover:opacity-100"
          />
        </div>

        {/* Mobile Logos */}
        <div className="sm:hidden w-full max-w-[320px] mx-auto">
          <Image
            src="/assets/marqueue/mobile.png"
            alt="Trusted by partner logos"
            width={320}
            height={140}
            className="w-full h-auto opacity-70 grayscale transition-opacity hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}

