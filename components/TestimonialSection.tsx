"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TestimonialSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Image container entrance & parallax
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
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 2. Quote text reveal
      gsap.from(quoteRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 lg:py-28 border-t border-gray-100"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Balancing Sphere Image */}
          <div
            ref={imageContainerRef}
            className="overflow-hidden rounded-[24px] md:rounded-[32px] w-full flex justify-center bg-gray-50"
          >
            <div ref={imageInnerRef} className="w-full will-change-transform">
              {/* Desktop Image */}
              <div className="hidden lg:block w-full">
                <Image
                  src="/assets/testimonials/desktop.png"
                  alt="Balancing zen stones testimonial visual"
                  width={560}
                  height={580}
                  className="w-full h-auto object-cover rounded-[32px] scale-[1.04]"
                />
              </div>

              {/* Tablet Image */}
              <div className="hidden sm:block lg:hidden w-full max-w-[540px]">
                <Image
                  src="/assets/testimonials/tablet.png"
                  alt="Balancing zen stones testimonial visual"
                  width={540}
                  height={480}
                  className="w-full h-auto object-cover rounded-[28px] scale-[1.04]"
                />
              </div>

              {/* Mobile Image */}
              <div className="sm:hidden w-full max-w-[360px]">
                <Image
                  src="/assets/testimonials/mobile.png"
                  alt="Balancing zen stones testimonial visual"
                  width={360}
                  height={380}
                  className="w-full h-auto object-cover rounded-[24px] scale-[1.04]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Quote */}
          <div ref={quoteRef} className="flex flex-col justify-center">
            <blockquote className="font-display-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[1.25] text-[#121417] font-normal">
              “I was skeptical, but iExec has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can&apos;t imagine running my company without it.”
            </blockquote>
            <div className="mt-8">
              <div className="text-sm md:text-base font-semibold text-[#121417]">
                John Smith
              </div>
              <div className="text-xs text-gray-500 font-mono-num mt-0.5">
                Head of Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

