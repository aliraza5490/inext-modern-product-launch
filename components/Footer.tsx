import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Benefits", href: "#benefits" },
    { name: "Specifications", href: "#specifications" },
    { name: "How-to", href: "#how-to" },
  ];

  return (
    <footer className="border-t border-gray-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pb-12 md:pb-16">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs md:text-sm font-semibold text-[#121417] hover:text-[#384718] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 pt-8">
          {/* Left: Stick Figure Icon + Copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/human.png"
              alt="Area human logo"
              width={16}
              height={32}
              className="h-7 w-auto object-contain"
            />
            <span className="font-mono-num text-[11px] md:text-xs text-gray-500">
              © Area. 2025
            </span>
          </div>

          {/* Right: All Rights Reserved */}
          <div className="font-mono-num text-[11px] md:text-xs text-gray-500">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
