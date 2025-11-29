import { Ticket } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import PricingCard from "./PricingCard";

const plans = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect to explore AI with essential tools for individuals and small projects.",
    ctaText: "Start for Free",
    buttonVariant: "secondary",
    features: [
      { text: "Basic access to AI core", included: true },
      { text: "Limited prompts per month", included: true },
      { text: "Community support", included: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 29,
    priceYearly: 24,
    description:
      "Advanced features and flexibility to scale productivity and handle bigger workloads.",
    ctaText: "Upgrade to Pro",
    isPopular: true,
    buttonVariant: "primary",
    features: [
      { text: "Unlimited AI prompts", included: true },
      { text: "Priority response time", included: true },
      { text: "Early access to new models", included: true },
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Full power with custom options, priority support, and team-ready collaboration.",
    ctaText: "Contact Sales",
    buttonVariant: "secondary",
    features: [
      { text: "Dedicated workspace", included: true },
      { text: "Advanced model tuning", included: true },
      { text: "Premium support & SLA", included: true },
    ],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing">
      <div className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start gap-6">
          <Badge
            variant="outline"
            className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
          >
            <Ticket className="h-4 w-4" />
            Pricing
          </Badge>

          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Choose the plan <span className="text-neutral-500">that matches your ambition</span>
          </h2>
        </div>

        <div className="mb-10 flex items-center justify-start gap-4">
          <span
            className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-neutral-500"}`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-neutral-500"}`}
            >
              Yearly
            </span>
            <span className="inline-flex items-center border border-white/10 bg-[#1a1a1a] px-2.5 py-0.5 text-xs font-medium text-white">
              20% OFF
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
