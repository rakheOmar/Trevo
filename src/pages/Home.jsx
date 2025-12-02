import FinalCTA from "@/components/blocks/Home/CTASection";
import DiagonalStripedBar from "@/components/blocks/Home/DiagonalStripedBar";
import FAQSection from "@/components/blocks/Home/FAQSection";
import FeaturesSection from "@/components/blocks/Home/FeatureSection";
import HeroSection from "@/components/blocks/Home/HeroSection";
import LogoSection from "@/components/blocks/Home/LogoSection";
import PricingSection from "@/components/blocks/Home/PricingSection";
import SmoothScrolling from "@/components/Lenis";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <HeroSection />
        <DiagonalStripedBar />
        <LogoSection />
        <div className="border-b border-[#2c2c30]">
          <DiagonalStripedBar />
        </div>
        <FeaturesSection />
        <div className="border-t border-b border-[#2c2c30]">
          <DiagonalStripedBar />
        </div>
        <PricingSection />
        <div className="border-t border-b border-[#2c2c30]">
          <DiagonalStripedBar />
        </div>
        <FAQSection />
        <FinalCTA />
      </SmoothScrolling>
    </>
  );
}
