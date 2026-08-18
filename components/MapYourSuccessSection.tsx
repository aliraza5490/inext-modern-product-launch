import Image from "next/image";
import Link from "next/link";

export default function MapYourSuccessSection() {
  const steps = [
    {
      num: "01",
      title: "Get Started",
      desc: "With our intuitive setup, you’re up and running in minutes.",
    },
    {
      num: "02",
      title: "Customize and Configure",
      desc: "Adapt Area to your specific requirements and preferences.",
    },
    {
      num: "03",
      title: "Grow Your Business",
      desc: "Make informed decisions to exceed your goals.",
    },
  ];

  return (
    <section id="how-to" className="py-16 md:py-24 lg:py-28 border-t border-gray-100">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Header with Title and Discover More */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 md:mb-16">
          <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
            Map Your Success
          </h2>
          <div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D6DFBA] px-6 py-2.5 text-xs md:text-sm font-medium text-[#121417] shadow-sm transition-all hover:bg-[#c6d0a7] active:scale-95"
            >
              Discover More
            </Link>
          </div>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-gray-200 pt-6 md:pt-8 flex flex-col">
              <div className="font-mono-num text-5xl sm:text-6xl font-light text-gray-400 mb-6">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-[#121417] mb-2 font-sans">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Panoramic Aerial Green Road Image */}
        <div className="mt-14 md:mt-20 overflow-hidden rounded-[24px] md:rounded-[32px]">
          {/* Desktop Banner */}
          <div className="hidden lg:block w-full">
            <Image
              src="/assets/map-your-success/desktop.png"
              alt="Panoramic aerial view of winding roads through lush hills"
              width={1240}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Tablet Banner */}
          <div className="hidden sm:block lg:hidden w-full">
            <Image
              src="/assets/map-your-success/tablet.png"
              alt="Panoramic aerial view of winding roads through lush hills"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Mobile Banner */}
          <div className="sm:hidden w-full">
            <Image
              src="/assets/map-your-success/mobile.png"
              alt="Panoramic aerial view of winding roads through lush hills"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
