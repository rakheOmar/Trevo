import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="cta" className="mx-auto w-[79%] px-4 pb-24 sm:px-6 lg:px-8">
      <div className="group relative h-[480px] w-full overflow-hidden bg-card md:h-[360px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/CTA.png"
            alt="AI Background"
            className="h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end items-start p-6 text-left md:p-12">
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
            Step into the future,
            <br />
            guided by AI clarity
          </h2>
          <p className="mb-8 max-w-md text-sm text-white/80 md:text-base">
            Experience the tool right now. Just dive in and see what AI can do for you.
          </p>
          <Button
            asChild
            className="w-fit rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            size="lg"
          >
            <Link to="/signup">Try it now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
