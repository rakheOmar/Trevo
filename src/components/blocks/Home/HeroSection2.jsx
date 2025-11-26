import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImageDark from "@/assets/Hero_dark.png";
import heroImageLight from "@/assets/Hero_light.png";
import LogoScroll from "@/components/blocks/Home/LogoScroll";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Optional: if you want to use Badge component, otherwise standard classes below are fine

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

export default function HeroSection2() {
  return (
    <div className="relative w-screen min-h-screen bg-background overflow-hidden">
      <div className="relative flex justify-center">
        <img
          src={heroImageLight}
          alt="Hero"
          className="w-full h-auto object-cover pointer-events-none select-none block dark:hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
          }}
        />
        <img
          src={heroImageDark}
          alt="Hero"
          className="w-full h-auto object-cover pointer-events-none select-none hidden dark:block"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <Link
                to="#link"
                className="group inline-flex items-center rounded-full border bg-muted px-4 py-1.5 text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                <span>Introducing Support for AI Models</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedGroup>

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mx-auto mt-10 max-w-4xl text-balance text-4xl font-bold md:text-5xl lg:mt-12 xl:text-6xl"
            >
              Modern Solutions for Customer Engagement
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground"
            >
              Highly customizable components for building modern websites and applications that look
              and feel the way you mean it.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
            >
              <Button asChild size="lg">
                <Link to="#link">Start Building</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link to="#link">Request a demo</Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6">
          <LogoScroll />
        </div>
      </div>
    </div>
  );
}
