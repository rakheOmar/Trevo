import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Hero from "@/assets/Hero.png";
import Placeholder from "@/assets/Placeholder.png";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(bgRef.current, { yPercent: 30, ease: "none" }, 0);
      tl.to(textRef.current, { yPercent: 60, opacity: 0, ease: "none" }, 0);
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="home" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          ref={bgRef}
          src={Hero}
          alt="Hero"
          className="h-[85vh] w-full object-cover md:h-auto md:min-h-[100vh]"
        />
      </div>

      <div
        ref={textRef}
        className="absolute top-[240px] left-0 w-full flex flex-col px-6 z-10 items-center text-center md:top-1/4 md:left-[12.5%] md:w-[75%] md:items-start md:text-left md:px-4"
      >
        <h1 className="text-4xl tracking-tighter leading-tight text-black md:text-6xl">
          AI for teams
          <br />
          shaping the future.
        </h1>

        <p className="text-[#31313c] text-base mt-4 max-w-[480px] md:text-lg">
          Build, connect and scale intelligent
          <br className="hidden md:block" />
          workflows — all from one place.
        </p>

        <Button
          className="rounded-full mt-8 text-lg px-6 py-6 w-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] md:w-fit md:mt-6 md:py-5"
          asChild
        >
          <a href="/signup" className="flex items-center justify-center gap-2 text-sm">
            Get started
            <ChevronRight className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[90%] z-20 md:w-[75%]">
        <img src={Placeholder} alt="Placeholder" className="w-full h-auto block drop-shadow-2xl" />
      </div>
    </section>
  );
}
