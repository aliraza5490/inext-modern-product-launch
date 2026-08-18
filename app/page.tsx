import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import BenefitsSection from "@/components/BenefitsSection";
import SeeTheBigPictureSection from "@/components/SeeTheBigPictureSection";
import SpecsComparisonSection from "@/components/SpecsComparisonSection";
import TestimonialSection from "@/components/TestimonialSection";
import MapYourSuccessSection from "@/components/MapYourSuccessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#121417]">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <BenefitsSection />
      <SeeTheBigPictureSection />
      <SpecsComparisonSection />
      <TestimonialSection />
      <MapYourSuccessSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

