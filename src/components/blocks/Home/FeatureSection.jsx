import { Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Time Unfolded",
    description:
      "Automate tasks and reclaim hours, your AI assistant turns routine into seconds so you can focus on growth.",
    image: "/feat1.png",
  },
  {
    title: "Words That Flow",
    description:
      "Drafts, blogs, and emails written with clarity and speed — the elegance of language without the struggle.",
    image: "/feat2.png",
  },
  {
    title: "A Silent Guide",
    description:
      "Always present to keep you focused — suggestions, reminders, and insights right when you need them.",
    image: "/feat3.png",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-start gap-6">
        <Badge
          variant="outline"
          className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
        >
          <Sparkle className="h-4 w-4" />
          Features
        </Badge>

        <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
          Harness invisible power{" "}
          <span className="text-neutral-500">to write faster, focus deeper, and save hours.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="group flex flex-col gap-6">
            <div className="relative aspect-9/10 w-full overflow-hidden bg-neutral-900">
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
