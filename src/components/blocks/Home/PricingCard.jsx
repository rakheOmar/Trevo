import { useGSAP } from "@gsap/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const PricingCard = ({ plan, isYearly, index = 0 }) => {
  const cardRef = useRef(null);
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;
  const isCustom = typeof price === "string";

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.5)",
      });
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={`
      relative flex h-full flex-col border p-6 
      ${
        plan.isPopular
          ? "border-neutral-700 bg-white/5 shadow-2xl shadow-neutral-900/50"
          : "border-white/10 bg-transparent"
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
                <HugeiconsIcon icon={Tick02Icon} size={16} className="text-white" strokeWidth={2} />
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
