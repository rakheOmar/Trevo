import { ChevronRight } from "lucide-react";
import Hero from "@/assets/Hero.png";
import Placeholder from "@/assets/Placeholder.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <img src={Hero} alt="Hero" className="w-full h-auto object-cover" />

      <div className="absolute top-1/4 left-[12.5%] -translate-y-1/2 w-[75%] flex flex-col text-left px-4">
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-tight text-black">
          AI for teams
          <br />
          shaping the future.
        </h1>

        <p className="text-[#31313c] text-base md:text-lg mt-4 max-w-[480px]">
          Build, connect and scale intelligent
          <br />
          workflows — all from one place.
        </p>

        <Button
          className="rounded-full mt-6 text-lg px-6 py-5 w-fit shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          asChild
        >
          <a href="/signup" className="flex items-center gap-2 text-sm">
            Get started
            <ChevronRight className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[75%]">
        <img src={Placeholder} alt="Placeholder" className="w-full h-auto block" />
      </div>
    </div>
  );
}
