import { useGSAP } from "@gsap/react";
import { Ticket01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import PricingCard from "./PricingCard";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Essential reconciliation tools for freelancers and small setups.",
    ctaText: "Start for Free",
    buttonVariant: "secondary",
    features: [
      { text: "Up to 50 transactions/mo", included: true },
      { text: "Basic PDF export", included: true },
      { text: "7-day data history", included: true },
    ],
  },
  {
    id: "pro",
    name: "Growth",
    priceMonthly: 49,
    priceYearly: 39,
    description:
      "Automated matching and bank feeds for growing finance teams.",
    ctaText: "Upgrade to Growth",
    isPopular: true,
    buttonVariant: "primary",
    features: [
      { text: "Unlimited transactions", included: true },
      { text: "Direct Xero & QB Sync", included: true },
      { text: "Smart Anomaly Detection", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Custom ERP integrations, SSO, and dedicated support for volume.",
    ctaText: "Contact Sales",
    buttonVariant: "secondary",
    features: [
      { text: "NetSuite & SAP Integration", included: true },
      { text: "Multi-entity support", included: true },
      { text: "Dedicated Success Manager", included: true },
    ],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
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

      tl.from(".anim-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }).from(
        ".anim-toggle",
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
    <section id="pricing" ref={containerRef}>
      <div className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start gap-6">
          <div className="anim-header">
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
            >
              <HugeiconsIcon icon={Ticket01Icon} size={16} className="text-neutral-300" />
              Pricing
            </Badge>
          </div>

          <h2 className="anim-header text-3xl font-medium tracking-tight text-white md:text-4xl">
            Choose the plan <span className="text-neutral-500">that fits your finance team</span>
          </h2>
        </div>

        <div className="anim-toggle mb-10 flex items-center justify-start gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-white" : "text-neutral-500"
            }`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium transition-colors ${
                isYearly ? "text-white" : "text-neutral-500"
              }`}
            >
              Yearly
            </span>
            <span className="inline-flex items-center border border-white/10 bg-[#1a1a1a] px-2.5 py-0.5 text-xs font-medium text-white">
              20% OFF
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;