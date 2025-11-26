import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import LetterGlitch from "@/components/react-bits/LetterGlitch";
import { Button } from "@/components/ui/button";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-32">
            <div
              className="
                absolute inset-0 top-120 pointer-events-none max-h-[600px] overflow-hidden
                mask-[linear-gradient(to_bottom,transparent,black_150px),linear-gradient(to_right,transparent,black_40%),linear-gradient(to_left,transparent,black_40%)]
                mask-intersect
              "
            >
              <LetterGlitch
                glitchSpeed={50}
                centerVignette={false}
                outerVignette={false}
                smooth={true}
              />
            </div>

            <AnimatedGroup
              variants={{
                container: { visible: { transition: { delayChildren: 1 } } },
                item: {
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", bounce: 0.3, duration: 2 },
                  },
                },
              }}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-40"
            />

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(96,165,250,0.08)_25%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="bg-accent/30 backdrop-blur-lg inset-shadow-sm inset-shadow-white/20 group mx-auto flex w-fit items-center gap-4 rounded-2xl border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI Models
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-10 max-w-4xl text-balance text-4xl max-md:font-semibold md:text-5xl lg:mt-12 xl:text-6xl font-serif"
                >
                  Modern Solutions for Customer Engagement
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-base "
                >
                  Highly customizable components for building modern websites and applications that
                  look and feel the way you mean it.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button asChild size="lg" className="rounded-xl px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-balance text-base h-10.5 rounded-xl w-full bg-card/30 backdrop-blur-lg inset-shadow-sm inset-shadow-white/20"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } },
                },
                ...transitionVariants,
              }}
            >
              <div
                className="relative -mr-56 mt-6 overflow-visible px-2 sm:mr-0 sm:mt-8 md:mt-10"
                style={{ clipPath: "inset(-100px 0 50px 0)" }}
              >
                <div
                  className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-4 inset-shadow-2xs ring-background bg-background ring-1 dark:inset-shadow-white/20 border-4 border-white/50"
                  style={{
                    boxShadow: `
                      0 -25px 50px rgba(68,120,225,0.20),
                      0 -12px 35px rgba(68,120,225,0.25),
                      -20px 0 40px rgba(68,120,225,0.20),
                      20px 0 40px rgba(68,120,225,0.20)
                    `,
                  }}
                >
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/mail2.png"
                    alt="app screen"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/mail2-light.png"
                    alt="app screen"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 w-full bg-linear-to-b from-transparent via-transparent via-35% to-background dark:to-background rounded-2xl" />
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
