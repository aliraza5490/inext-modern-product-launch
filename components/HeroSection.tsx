"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mockupContainerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageTabletRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initial entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        delay: 0.1,
      }).from(
        mockupContainerRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.94,
          duration: 1.2,
        },
        "-=0.7"
      );

      // 2. Parallax effect on scroll
      // Desktop & Tablet parallax scrub
      gsap.to(pillRef.current, {
        yPercent: 25,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Parallax movement for the device mockup
      const targets = [
        imageDesktopRef.current,
        imageTabletRef.current,
        imageMobileRef.current,
      ].filter(Boolean);

      gsap.to(targets, {
        yPercent: -15,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Main Headline */}
        <div className="text-center">
          <h1
            ref={titleRef}
            className="font-display-serif text-5xl font-medium tracking-tight text-[#121417] sm:text-7xl md:text-8xl lg:text-[108px] lg:leading-[1.05]"
          >
            Browse everything.
          </h1>
        </div>

        {/* Hero Visual Mockup Container */}
        <div
          ref={mockupContainerRef}
          className="relative mx-auto mt-12 flex max-w-[1100px] items-center justify-center md:mt-16 lg:mt-20"
        >
          {/* Green Rounded Pill Backdrop for Desktop / Tablet / Mobile */}
          <div
            ref={pillRef}
            className="absolute h-[240px] w-full max-w-[1020px] rounded-[44px] bg-[#75855D] hidden lg:block"
          />
          <div
            ref={pillRef}
            className="absolute h-[320px] w-[540px] rounded-[40px] bg-[#75855D] hidden sm:block lg:hidden"
          />
          <div
            ref={pillRef}
            className="absolute h-[340px] w-[290px] rounded-[36px] bg-[#75855D] sm:hidden"
          />

          {/* Desktop iPad Image */}
          <div
            ref={imageDesktopRef}
            className="relative z-10 hidden lg:block w-full max-w-[940px] px-4 will-change-transform"
          >
            <Image
              src="/assets/hero/iPad-desktop.png"
              alt="iExec iPad Analytics Interface"
              width={940}
              height={660}
              priority
              className="h-auto w-full drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Tablet iPad / iPhone Image */}
          <div
            ref={imageTabletRef}
            className="relative z-10 hidden sm:block lg:hidden w-full max-w-[500px] will-change-transform"
          >
            <Image
              src="/assets/hero/iPad-desktop.png"
              alt="iExec Tablet Analytics Interface"
              width={500}
              height={380}
              priority
              className="h-auto w-full drop-shadow-xl"
            />
          </div>

          {/* Mobile iPhone Image */}
          <div
            ref={imageMobileRef}
            className="relative z-10 sm:hidden w-[260px] will-change-transform"
          >
            <Image
              src="/assets/hero/iPhone-mobile-tablet.png"
              alt="iExec iPhone Analytics Interface"
              width={260}
              height={520}
              priority
              className="h-auto w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

