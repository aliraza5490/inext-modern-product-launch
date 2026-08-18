import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        {/* Main Headline */}
        <div className="text-center">
          <h1 className="font-display-serif text-5xl font-medium tracking-tight text-[#121417] sm:text-7xl md:text-8xl lg:text-[108px] lg:leading-[1.05]">
            Browse everything.
          </h1>
        </div>

        {/* Hero Visual Mockup Container */}
        <div className="relative mx-auto mt-12 flex max-w-[1100px] items-center justify-center md:mt-16 lg:mt-20">
          {/* Green Rounded Pill Backdrop for Desktop */}
          <div className="hidden lg:block absolute h-[240px] w-full max-w-[1020px] rounded-[44px] bg-[#75855D]" />

          {/* Green Rounded Pill Backdrop for Tablet */}
          <div className="hidden sm:block lg:hidden absolute h-[320px] w-[540px] rounded-[40px] bg-[#75855D]" />

          {/* Green Rounded Pill Backdrop for Mobile */}
          <div className="sm:hidden absolute h-[340px] w-[290px] rounded-[36px] bg-[#75855D]" />

          {/* Desktop iPad Image */}
          <div className="relative z-10 hidden lg:block w-full max-w-[940px] px-4">
            <Image
              src="/assets/hero/iPad-desktop.png"
              alt="Area iPad Analytics Interface"
              width={940}
              height={660}
              priority
              className="h-auto w-full drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Tablet iPad / iPhone Image */}
          <div className="relative z-10 hidden sm:block lg:hidden w-full max-w-[500px]">
            <Image
              src="/assets/hero/iPad-desktop.png"
              alt="Area Tablet Analytics Interface"
              width={500}
              height={380}
              priority
              className="h-auto w-full drop-shadow-xl"
            />
          </div>

          {/* Mobile iPhone Image */}
          <div className="relative z-10 sm:hidden w-[260px]">
            <Image
              src="/assets/hero/iPhone-mobile-tablet.png"
              alt="Area iPhone Analytics Interface"
              width={260}
              height={520}
              priority
              className="h-auto w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
