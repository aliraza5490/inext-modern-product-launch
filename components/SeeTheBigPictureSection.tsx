import Image from "next/image";
import Link from "next/link";

export default function SeeTheBigPictureSection() {
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
    <section className="py-16 md:py-24 lg:py-28 border-t border-gray-100">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text and Points */}
          <div className="flex flex-col">
            <h2 className="font-display-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121417] tracking-tight">
              See the Big Picture
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 font-sans max-w-lg">
              Area turns your data into clear, vibrant visuals that show you exactly what’s happening in each region.
            </p>

            {/* List with Dividers */}
            <div className="mt-8 md:mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
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
            <div className="mt-8">
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center rounded-full bg-[#D6DFBA] px-6 py-2.5 text-xs md:text-sm font-medium text-[#121417] shadow-sm transition-all hover:bg-[#c6d0a7] active:scale-95"
              >
                Discover More
              </Link>
            </div>
          </div>

          {/* Right Column: Podium Image */}
          <div className="overflow-hidden rounded-[24px] md:rounded-[32px] w-full flex justify-center">
            {/* Desktop Image */}
            <div className="hidden lg:block w-full">
              <Image
                src="/assets/see-the-big-picture/desktop.png"
                alt="See the Big Picture architectural podiums"
                width={560}
                height={620}
                className="w-full h-auto object-cover rounded-[32px]"
              />
            </div>

            {/* Tablet Image */}
            <div className="hidden sm:block lg:hidden w-full max-w-[540px]">
              <Image
                src="/assets/see-the-big-picture/tablet.png"
                alt="See the Big Picture architectural podiums"
                width={540}
                height={500}
                className="w-full h-auto object-cover rounded-[28px]"
              />
            </div>

            {/* Mobile Image */}
            <div className="sm:hidden w-full max-w-[360px]">
              <Image
                src="/assets/see-the-big-picture/mobile.png"
                alt="See the Big Picture architectural podiums"
                width={360}
                height={380}
                className="w-full h-auto object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
