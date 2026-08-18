"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Navbar entrance animation
      gsap.from(navContainerRef.current, {
        y: -25,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
      });

      // Scroll effect
      ScrollTrigger.create({
        start: "top -20px",
        onEnter: () => {
          navContainerRef.current?.classList.add(
            "bg-white/85",
            "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
            "border-gray-200/80"
          );
          navContainerRef.current?.classList.remove("bg-white/60", "border-white/60");
        },
        onLeaveBack: () => {
          navContainerRef.current?.classList.remove(
            "bg-white/85",
            "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
            "border-gray-200/80"
          );
          navContainerRef.current?.classList.add("bg-white/60", "border-white/60");
        },
      });
    },
    { scope: headerRef }
  );

  const navLinks = [
    { name: "Solutions", href: "#benefits" },
    { name: "Developers", href: "#specifications" },
    { name: "Resources", href: "#how-to" },
    { name: "Ecosystem", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all"
    >
      <div
        ref={navContainerRef}
        className="mx-auto flex max-w-[1160px] items-center justify-between rounded-full bg-white/60 px-5 py-2.5 sm:px-6 sm:py-2.5 md:py-3 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-85"
        >
          {/* Connected dot cluster icon */}
          <div className="relative flex h-7 w-7 items-center justify-center">
            <svg
              className="h-6 w-6 text-[#121417]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* Left dot */}
              <circle cx="5" cy="12" r="2.2" />
              {/* Middle vertical pair */}
              <circle cx="10" cy="8" r="2.2" />
              <circle cx="10" cy="16" r="2.2" />
              {/* Right column */}
              <circle cx="15" cy="5" r="2" />
              <circle cx="15" cy="12" r="2" />
              <circle cx="15" cy="19" r="2" />
            </svg>
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-[#121417]">
            iExec
          </span>
        </Link>

        {/* Desktop & Tablet Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex md:gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13.5px] lg:text-[14px] font-medium text-[#121417]/80 transition-colors hover:text-[#121417]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#384718] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-[#485c20] hover:shadow-md active:scale-95"
          >
            <span>Learn More</span>
            <span className="text-[13px]">↗</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-[#384718] px-3.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#485c20]"
          >
            <span>Learn More</span>
            <span className="text-[11px]">↗</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#121417] hover:bg-black/5 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-[1160px] overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#121417] hover:bg-neutral-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#384718] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#485c20]"
              >
                <span>Learn More</span>
                <span className="text-[13px]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


