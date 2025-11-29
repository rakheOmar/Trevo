import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import plugin
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function LogoSection() {
  const containerRef = useRef(null);

  const logos = [
    {
      name: "Statsig",
      src: "https://html.tailus.io/blocks/customers/nvidia.svg",
      className: "h-5",
    },
    {
      name: "Deno",
      src: "https://html.tailus.io/blocks/customers/column.svg",
      className: "h-4",
    },
    {
      name: "Modal",
      src: "https://html.tailus.io/blocks/customers/github.svg",
      className: "h-4",
    },
    {
      name: "Hyper",
      src: "https://html.tailus.io/blocks/customers/nike.svg",
      className: "h-5",
    },
    {
      name: "Evidence",
      src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
      className: "h-5",
    },
    {
      name: "Dagster",
      src: "https://html.tailus.io/blocks/customers/laravel.svg",
      className: "h-4",
    },
    {
      name: "Case Status",
      src: "https://html.tailus.io/blocks/customers/lilly.svg",
      className: "h-7",
    },
    {
      name: "Dig South",
      src: "https://html.tailus.io/blocks/customers/openai.svg",
      className: "h-6",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".logo-item", {
        scrollTrigger: {
          trigger: containerRef.current, // Element to watch
          start: "top 85%", // Start when top of element hits 85% of viewport height
          toggleActions: "play none none reverse", // Optional: Reverses if you scroll back up
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="flex w-full flex-col items-center justify-center py-2">
      <div className="w-full border-t border-[#1D1D1F]" />

      <div className="w-full border-l border-[#1D1D1F] md:w-[75%]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="logo-item flex aspect-5/2 items-center justify-center border-b border-r border-[#1D1D1F] bg-background/50 p-4 transition-colors hover:bg-[#1D1D1F]/50 md:p-8"
            >
              <img
                src={logo.src}
                alt={`${logo.name} Logo`}
                className={cn("w-fit opacity-60 dark:invert", logo.className)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="-mt-px w-full border-t border-[#1D1D1F]" />
    </section>
  );
}
