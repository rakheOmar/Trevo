import DiagonalStripedBar from "@/components/blocks/Home/DiagonalStripedBar";
import HeroSection from "@/components/blocks/Home/HeroSection";
import LogoCloud from "@/components/blocks/Home/LogoScroll";
import Pricing from "@/components/blocks/Home/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiagonalStripedBar />
      <LogoCloud />
      <DiagonalStripedBar />
      <Pricing />
      <DiagonalStripedBar />
    </>
  );
}
