import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 border-t border-gray-100">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Balancing Sphere Image */}
          <div className="overflow-hidden rounded-[24px] md:rounded-[32px] w-full flex justify-center">
            {/* Desktop Image */}
            <div className="hidden lg:block w-full">
              <Image
                src="/assets/testimonials/desktop.png"
                alt="Balancing zen stones testimonial visual"
                width={560}
                height={580}
                className="w-full h-auto object-cover rounded-[32px]"
              />
            </div>

            {/* Tablet Image */}
            <div className="hidden sm:block lg:hidden w-full max-w-[540px]">
              <Image
                src="/assets/testimonials/tablet.png"
                alt="Balancing zen stones testimonial visual"
                width={540}
                height={480}
                className="w-full h-auto object-cover rounded-[28px]"
              />
            </div>

            {/* Mobile Image */}
            <div className="sm:hidden w-full max-w-[360px]">
              <Image
                src="/assets/testimonials/mobile.png"
                alt="Balancing zen stones testimonial visual"
                width={360}
                height={380}
                className="w-full h-auto object-cover rounded-[24px]"
              />
            </div>
          </div>

          {/* Right Column: Testimonial Quote */}
          <div className="flex flex-col justify-center">
            <blockquote className="font-display-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[1.25] text-[#121417] font-normal">
              “I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can&apos;t imagine running my company without it.”
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
