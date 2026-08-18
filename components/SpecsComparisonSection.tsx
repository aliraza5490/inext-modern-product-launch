"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SpecsComparisonSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

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

      // 2. Comparison table columns reveal
      if (tableRef.current) {
        const cols = tableRef.current.children;
        gsap.from(cols, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: containerRef }
  );

  const comparisonRows = [
    {
      iexec: { text: "Ultra-fast browsing", status: true },
      websurge: { text: "Fast browsing", status: true },
      hyperview: { text: "Moderate speeds", status: false },
    },
    {
      iexec: { text: "Advanced AI insights", status: true },
      websurge: { text: "Basic AI recommendations", status: true },
      hyperview: { text: "No AI assistance", status: false },
    },
    {
      iexec: { text: "Seamless integration", status: true },
      websurge: { text: "Restricts customization", status: false },
      hyperview: { text: "Steep learning curve", status: false },
    },
    {
      iexec: { text: "Advanced AI insights", status: true },
      websurge: { text: "Basic AI insights", status: false },
      hyperview: { text: "No AI assistance", status: false },
    },
    {
      iexec: { text: "Ultra-fast browsing", status: true },
      websurge: { text: "Fast browsing", status: true },
      hyperview: { text: "Moderate speeds", status: false },
    },
    {
      iexec: { text: "Full UTF-8 support", status: true },
      websurge: { text: "Potential display errors", status: false },
      hyperview: { text: "Partial UTF-8 support", status: false },
    },
  ];

  return (
    <section
      id="specifications"
      ref={containerRef}
      className="py-16 md:py-24 lg:py-28 border-t border-gray-100"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-xs font-mono-num text-gray-500 uppercase tracking-widest mb-3">
            Specs
          </p>
          <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
            Why Choose iExec?
          </h2>
          <p className="mt-4 text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
            You need a solution that keeps up. That’s why we developed iExec. A developer-friendly approach to streamline your business.
          </p>
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D6DFBA] px-6 py-2.5 text-xs md:text-sm font-medium text-[#121417] shadow-sm transition-all hover:bg-[#c6d0a7] active:scale-95"
            >
              Discover More
            </Link>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="no-scrollbar overflow-x-auto overflow-y-hidden pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div
            ref={tableRef}
            className="min-w-[640px] max-w-4xl mx-auto grid grid-cols-3 gap-0 sm:gap-2"
          >
            {/* Column 1: iExec (Elevated White Card) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-lg relative z-10">
              <div className="text-center font-display-serif text-2xl md:text-3xl font-semibold text-[#121417] pb-6 border-b border-gray-100">
                iExec
              </div>
              <div className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="py-4 md:py-5 flex items-center gap-2.5 text-xs md:text-sm font-medium text-[#121417]"
                  >
                    <span className="text-[#384718] font-bold text-sm">✓</span>
                    <span>{row.iexec.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: WebSurge */}
            <div className="p-6 md:p-8 font-rethink-sans">
              <div className="text-center text-lg md:text-xl font-medium text-gray-500 pb-6 border-b border-gray-100">
                WebSurge
              </div>
              <div className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="py-4 md:py-5 flex items-center gap-2.5 text-xs md:text-sm lg:text-base text-gray-600 font-normal"
                  >
                    <span
                      className={
                        row.websurge.status
                          ? "text-gray-500 font-bold"
                          : "text-gray-400 font-bold"
                      }
                    >
                      {row.websurge.status ? "✓" : "✕"}
                    </span>
                    <span>{row.websurge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: HyperView */}
            <div className="p-6 md:p-8 font-rethink-sans">
              <div className="text-center text-lg md:text-xl font-medium text-gray-500 pb-6 border-b border-gray-100">
                HyperView
              </div>
              <div className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="py-4 md:py-5 flex items-center gap-2.5 text-xs md:text-sm lg:text-base text-gray-600 font-normal"
                  >
                    <span
                      className={
                        row.hyperview.status
                          ? "text-gray-500 font-bold"
                          : "text-gray-400 font-bold"
                      }
                    >
                      {row.hyperview.status ? "✓" : "✕"}
                    </span>
                    <span>{row.hyperview.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

