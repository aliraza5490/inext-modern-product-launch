"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SeeTheBigPictureSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Left column text reveal
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

      // 2. Numbered list items staggered slide
      if (listRef.current) {
        const items = listRef.current.children;
        gsap.from(items, {
          x: -30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3. CTA button reveal
      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // 4. Right column image reveal + parallax scrub
      gsap.from(imageContainerRef.current, {
        opacity: 0,
        scale: 0.94,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(imageInnerRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef }
  );

  const points = [
    {
      num: "01",
      title: "Spot Trends in Seconds:",
      desc: "No more digging through numbers.",
    },
    {
      num: "02",
      title: "Get Everyone on the Same Page:",
      desc: "Share easy-to-understand reports with your team.",
    },
    {
      num: "03",
      title: "Make Presentations Pop:",
      desc: "Interactive maps and dashboards keep your audience engaged.",
    },
    {
      num: "04",
      title: "Your Global Snapshot:",
      desc: "Get a quick, clear overview of your entire operation.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 lg:py-28 border-t border-gray-100"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text and Points */}
          <div ref={leftColRef} className="flex flex-col">
            <div ref={headerRef}>
              <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
                See the Big Picture
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 font-sans max-w-lg">
                iExec turns your data into clear, vibrant visuals that show you exactly what’s happening in each region.
              </p>
            </div>

            {/* List with Dividers */}
            <div
              ref={listRef}
              className="mt-8 md:mt-10 divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              {points.map((pt) => (
                <div key={pt.num} className="py-4 md:py-5 flex items-start gap-4">
                  <span className="font-mono-num text-xs md:text-sm text-gray-400 font-medium pt-0.5 min-w-[24px]">
                    {pt.num}
                  </span>
                  <p className="text-xs md:text-sm text-[#121417] font-sans leading-relaxed">
                    <span className="font-medium">{pt.title} </span>
                    <span className="text-gray-600">{pt.desc}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Discover More Button */}
            <div ref={buttonRef} className="mt-8">
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center rounded-full bg-[#D6DFBA] px-6 py-2.5 text-xs md:text-sm font-medium text-[#121417] shadow-sm transition-all hover:bg-[#c6d0a7] active:scale-95"
              >
                Discover More
              </Link>
            </div>
          </div>

          {/* Right Column: Podium Image */}
          <div
            ref={imageContainerRef}
            className="overflow-hidden rounded-[24px] md:rounded-[32px] w-full flex justify-center bg-gray-50"
          >
            <div ref={imageInnerRef} className="w-full will-change-transform">
              {/* Desktop Image */}
              <div className="hidden lg:block w-full">
                <Image
                  src="/assets/see-the-big-picture/desktop.png"
                  alt="See the Big Picture architectural podiums"
                  width={560}
                  height={620}
                  className="w-full h-auto object-cover rounded-[32px] scale-[1.04]"
                />
              </div>

              {/* Tablet Image */}
              <div className="hidden sm:block lg:hidden w-full max-w-[540px]">
                <Image
                  src="/assets/see-the-big-picture/tablet.png"
                  alt="See the Big Picture architectural podiums"
                  width={540}
                  height={500}
                  className="w-full h-auto object-cover rounded-[28px] scale-[1.04]"
                />
              </div>

              {/* Mobile Image */}
              <div className="sm:hidden w-full max-w-[360px]">
                <Image
                  src="/assets/see-the-big-picture/mobile.png"
                  alt="See the Big Picture architectural podiums"
                  width={360}
                  height={380}
                  className="w-full h-auto object-cover rounded-[24px] scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

