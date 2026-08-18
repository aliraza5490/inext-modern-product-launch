import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Amplify Insights",
      description:
        "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
      icon: (
        <svg className="w-5 h-5 text-[#121417]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-5 h-5 text-[#121417]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-5 h-5 text-[#121417]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-5 h-5 text-[#121417]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-mono-num text-gray-500 uppercase tracking-widest mb-3">
            Benefits
          </p>
          <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
            We’ve cracked the code.
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 font-sans">
            Area provides real insights, without the data overload.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-x-10 md:gap-y-12">
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

        {/* Landscape Mountain Image Banner */}
        <div className="mt-14 md:mt-20 overflow-hidden rounded-[24px] md:rounded-[32px]">
          {/* Desktop Banner */}
          <div className="hidden lg:block w-full">
            <Image
              src="/assets/cracked-the-code/desktop.png"
              alt="Mountain landscape visual insights"
              width={1240}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Tablet Banner */}
          <div className="hidden sm:block lg:hidden w-full">
            <Image
              src="/assets/cracked-the-code/tablet.png"
              alt="Mountain landscape visual insights"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Mobile Banner */}
          <div className="sm:hidden w-full">
            <Image
              src="/assets/cracked-the-code/mobile.png"
              alt="Mountain landscape visual insights"
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
