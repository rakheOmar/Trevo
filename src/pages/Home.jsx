import FinalCTA from "@/components/blocks/Home/CTASection";
import DiagonalStripedBar from "@/components/blocks/Home/DiagonalStripedBar";
import FAQSection from "@/components/blocks/Home/FAQSection";
import FeaturesSection from "@/components/blocks/Home/FeatureSection";
import HeroSection from "@/components/blocks/Home/HeroSection";
import LogoCloud from "@/components/blocks/Home/LogoScroll";
import PricingSection from "@/components/blocks/Home/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <div className="border-t border-b">
        <DiagonalStripedBar />
      </div>
      <FeaturesSection />
      <div className="border-t border-b">
        <DiagonalStripedBar />
      </div>
      <PricingSection />
      <div className="border-t border-b">
        <DiagonalStripedBar />
      </div>
      <FAQSection />
      <FinalCTA />
    </>
  );
}
