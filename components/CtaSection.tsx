import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 border-t border-gray-100 text-center">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-xl flex flex-col items-center">
          <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
            Connect with us
          </h2>
          <p className="mt-4 text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-md">
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          <div className="mt-8">
            <Link
              href="mailto:contact@area.example.com"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#384718] px-8 py-3.5 text-xs md:text-sm font-medium text-white shadow-md transition-all hover:bg-[#485c20] hover:shadow-lg active:scale-95"
            >
              <span>Learn More</span>
              <span className="text-[13px]">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
