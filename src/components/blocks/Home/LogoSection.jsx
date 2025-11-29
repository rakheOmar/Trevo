import { cn } from "@/lib/utils";

export default function LogoSection() {
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

  return (
    <section className="flex w-full flex-col items-center justify-center py-2">
      <div className="w-full border-t border-[#1D1D1F]" />

      <div className="w-full md:w-[75%] border-l border-[#1D1D1F]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex aspect-[5/2] items-center justify-center border-b border-r border-[#1D1D1F] bg-background/50 p-4 md:p-8 transition-colors hover:bg-[#1D1D1F]/50"
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

      <div className="w-full border-t border-[#1D1D1F] -mt-px" />
    </section>
  );
}
