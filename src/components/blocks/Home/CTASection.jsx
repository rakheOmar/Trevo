import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".anim-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }).from(
        ".anim-button",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="cta" ref={containerRef} className="mx-auto w-[79%] px-4 pb-24 sm:px-6 lg:px-8">
      <div className="group relative h-[480px] w-full overflow-hidden bg-card md:h-[360px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/CTA.png"
            alt="Trevo Dashboard Background"
            className="h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full max-w-2xl flex-col items-start justify-end p-6 text-left md:p-12">
          <h2 className="anim-text mb-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
            Stop chasing receipts,
            <br />
            start chasing growth
          </h2>
          <p className="anim-text mb-8 max-w-md text-sm text-white/80 md:text-base">
            Experience the difference of automated reconciliation. Sync your data and see the results instantly.
          </p>
          <div className="anim-button">
            <Button
              asChild
              className="w-fit rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
              size="lg"
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;