import { useGSAP } from "@gsap/react";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Matching",
    description:
      "Forget manual cross-referencing. Trevo matches invoices to bank transactions instantly, highlighting only what needs your attention.",
    image: "/feat1.png",
  },
  {
    title: "Anomaly Detection",
    description:
      "Catch duplicate payments, pricing errors, and subscription creeps before cash leaves your account. Total control, zero effort.",
    image: "/feat2.png",
  },
  {
    title: "One-Click Sync",
    description:
      "Push verified financial data directly to Xero, QuickBooks, or NetSuite. Close your month-end in minutes, not days.",
    image: "/feat3.png",
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".anim-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }).from(
        ".anim-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.5)",
          stagger: 0.2,
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="features"
      className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mb-16 flex flex-col items-start gap-6">
        <div className="anim-header">
          <Badge
            variant="outline"
            className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
          >
            <HugeiconsIcon icon={SparklesIcon} size={16} className="text-neutral-300" />
            Automated Reconciliation
          </Badge>
        </div>

        <h2 className="anim-header text-3xl font-medium tracking-tight text-white md:text-4xl">
          Your books, balanced on autopilot.{" "}
          <span className="text-neutral-500">
            Eliminate manual data entry, catch errors instantly, and close faster.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="anim-card group flex flex-col gap-6">
            <div className="aspect-9/10 relative w-full overflow-hidden bg-neutral-900">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-white">{feature.title}</h3>
              <p className="text-base leading-relaxed text-neutral-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
