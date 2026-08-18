"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Benefits", href: "#benefits" },
    { name: "Specifications", href: "#specifications" },
    { name: "How-to", href: "#how-to" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 md:px-10 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-display-serif text-2xl font-bold tracking-tight text-[#121417] transition-opacity hover:opacity-80 md:text-3xl"
        >
          Area
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#121417] transition-colors hover:text-[#384718]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden items-center md:flex">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#384718] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-[#485c20] hover:shadow-md active:scale-95"
          >
            <span>Learn More</span>
            <span className="text-[13px]">↗</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#121417] focus:outline-none md:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
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
              className="h-6 w-6"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-100 bg-white px-6 pt-2 pb-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#121417] hover:text-[#384718]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#384718] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#485c20]"
              >
                <span>Learn More</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
