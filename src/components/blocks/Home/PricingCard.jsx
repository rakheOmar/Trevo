import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const PricingCard = ({ plan, isYearly }) => {
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;
  const isCustom = typeof price === "string";

  return (
    <div
      className={`
      relative flex h-full flex-col border p-6 bg-transparent
      ${
        plan.isPopular
          ? "border-neutral-700 shadow-2xl shadow-neutral-900/50 bg-white/2"
          : "border-white/10"
      }
    `}
    >
      {plan.isPopular && (
        <div className="absolute right-6 top-6">
          <span className="inline-flex items-center rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10">
            Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-medium text-white">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          {isCustom ? (
            <span className="text-5xl font-normal tracking-tight text-white">{price}</span>
          ) : (
            <>
              <span className="text-5xl font-normal tracking-tight text-white">€{price}</span>
              <span className="text-sm font-normal text-neutral-500">/month</span>
            </>
          )}
        </div>
        <p className="mt-4 min-h-10 text-sm leading-relaxed text-neutral-400">{plan.description}</p>
      </div>

      <div className="mb-8">
        <Button
          variant={plan.buttonVariant === "primary" ? "default" : "link"}
          className={`rounded-full ${
            plan.buttonVariant !== "primary"
              ? "h-auto p-0 text-white hover:text-neutral-300 hover:no-underline"
              : "px-8"
          }`}
        >
          {plan.ctaText}
        </Button>
      </div>

      <div className="relative mb-8 flex items-center">
        <div className="grow border-t border-white/10"></div>
        <span className="mx-4 shrink-0 text-xs text-neutral-500">Features</span>
        <div className="grow border-t border-white/10"></div>
      </div>

      <ul className="flex grow flex-col gap-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
            <div className="mt-0.5 shrink-0">
              {feature.included ? (
                <CheckIcon className="h-4 w-4 text-white" />
              ) : (
                <div className="h-4 w-4 border border-neutral-800" />
              )}
            </div>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
