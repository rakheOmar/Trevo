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
          className="w-full h-auto object-cover min-h-[80vh]"
        />
      </div>

      <div
        ref={textRef}
        className="absolute top-1/4 left-[12.5%] -translate-y-1/2 w-[75%] flex flex-col text-left px-4 z-10"
      >
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-tight text-black">
          Plug your revenue leaks
          <br />
          automatically.
        </h1>

        <p className="text-[#31313c] text-base md:text-lg mt-4 max-w-[480px]">
          Trevo reconciles your COD settlements in real-time.
          <br />
          Recover lost margins from unverified returns today.
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

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[75%] z-20">
        <img src={Placeholder} alt="Placeholder" className="w-full h-auto block drop-shadow-2xl" />
      </div>
    </section>
  );
}
