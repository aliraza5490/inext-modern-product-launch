"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function BenefitsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Header reveal
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // 2. Staggered feature cards reveal
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3. Landscape image banner reveal & subtle parallax scrub
      gsap.fromTo(
        bannerRef.current,
        { scale: 0.95, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(bannerImageRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  const benefits = [
    {
      title: "Amplify Insights",
      description:
        "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
      icon: (
        <svg
          className="w-5 h-5 text-[#121417]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
    },
    {
      title: "Control Your Global Presence",
      description:
        "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
      icon: (
        <svg
          className="w-5 h-5 text-[#121417]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Remove Language Barriers",
      description:
        "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
      icon: (
        <svg
          className="w-5 h-5 text-[#121417]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Visualize Growth",
      description:
        "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
      icon: (
        <svg
          className="w-5 h-5 text-[#121417]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="benefits"
      ref={containerRef}
      className="py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="mb-12 md:mb-16">
          <p className="text-xs font-mono-num text-gray-500 uppercase tracking-widest mb-3">
            Benefits
          </p>
          <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
            We’ve cracked the code.
          </h2>
          <p className="font-display-serif text-3xl font-normal leading-snug tracking-tight text-[#121417] sm:text-4xl md:text-5xl lg:text-[42px] lg:leading-[1.2]">
            iExec provides real insights, without the data overload.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-x-10 md:gap-y-12"
        >
          {benefits.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className="mb-4 flex h-8 w-8 items-center justify-start text-[#121417]">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-[#121417] mb-2 font-sans">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Landscape Mountain Image Banner with Parallax */}
        <div
          ref={bannerRef}
          className="mt-14 md:mt-20 overflow-hidden rounded-[24px] md:rounded-[32px] bg-gray-100"
        >
          <div ref={bannerImageRef} className="will-change-transform">
            {/* Desktop Banner */}
            <div className="hidden lg:block w-full">
              <Image
                src="/assets/cracked-the-code/desktop.png"
                alt="Mountain landscape visual insights"
                width={1240}
                height={500}
                className="w-full h-auto object-cover scale-[1.06]"
              />
            </div>

            {/* Tablet Banner */}
            <div className="hidden sm:block lg:hidden w-full">
              <Image
                src="/assets/cracked-the-code/tablet.png"
                alt="Mountain landscape visual insights"
                width={800}
                height={450}
                className="w-full h-auto object-cover scale-[1.06]"
              />
            </div>

            {/* Mobile Banner */}
            <div className="sm:hidden w-full">
              <Image
                src="/assets/cracked-the-code/mobile.png"
                alt="Mountain landscape visual insights"
                width={400}
                height={400}
                className="w-full h-auto object-cover scale-[1.06]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

