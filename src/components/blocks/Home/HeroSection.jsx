import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Hero from "@/assets/Hero.webp";
import Placeholder from "@/assets/Placeholder.webp";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const HeroMobile = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".mobile-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-white lg:hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={Hero}
          alt="Hero Background"
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 flex flex-grow flex-col justify-between px-6 pt-32 md:px-12 md:pt-40">
        <div className="flex flex-col items-start justify-center pt-8">
          <h1 className="mobile-anim text-3xl font-bold leading-[1.1] tracking-tighter text-black md:text-5xl md:max-w-xl">
            Plug your revenue leaks
            <br />
            automatically.
          </h1>

          <p className="mobile-anim mt-4 max-w-[90%] text-sm font-medium text-[#31313c]/80 md:text-lg md:max-w-lg md:mt-6">
            Trevo reconciles your COD settlements in real-time. Recover lost margins from unverified
            returns today.
          </p>

          <div className="mobile-anim mt-8 md:mt-10">
            <Button
              className="h-auto rounded-full px-6 py-3 text-sm shadow-xl shadow-black/5 md:text-base md:px-8 md:py-3.5"
              asChild
            >
              <a href="/signup" className="flex items-center gap-2">
                Get started
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mobile-anim mt-12 w-full pb-0 md:flex md:justify-center">
          <img
            src={Placeholder}
            alt="Dashboard Mobile"
            className="mx-auto block h-auto w-full drop-shadow-2xl md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

const HeroDesktop = () => {
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
    <div
      ref={containerRef}
      id="home"
      className="relative hidden min-h-[100vh] w-full overflow-hidden lg:block"
    >
      <div className="w-full">
        <img
          ref={bgRef}
          src={Hero}
          alt="Hero"
          className="min-h-[100vh] w-full object-cover"
        />
      </div>

      <div
        ref={textRef}
        className="absolute left-[12.5%] top-1/4 z-10 flex w-[75%] -translate-y-1/2 flex-col px-4 text-left"
      >
        <h1 className="text-5xl leading-tight tracking-tighter text-black xl:text-6xl">
          Plug your revenue leaks
          <br />
          automatically.
        </h1>

        <p className="mt-4 max-w-[480px] text-base text-[#31313c] xl:text-lg xl:max-w-[550px]">
          Trevo reconciles your COD settlements in real-time.
          <br />
          Recover lost margins from unverified returns today.
        </p>

        <Button
          className="mt-6 w-fit rounded-full px-6 py-4 text-base shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          asChild
        >
          <a href="/signup" className="flex items-center gap-2 text-sm">
            Get started
            <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 w-[75%] -translate-x-1/2">
        <img
          src={Placeholder}
          alt="Placeholder"
          className="block h-auto w-full drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="w-full">
      <HeroMobile />
      <HeroDesktop />
    </section>
  );
}