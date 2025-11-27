import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BlackIcon, WhiteIcon } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/nav";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => setIsScrolled(current >= 10));

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[75%] transition-all duration-300",
        isScrolled ? "top-8" : "top-6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full transition-all duration-300 px-4 py-3",
          isScrolled &&
            "bg-background/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg shadow-black/5"
        )}
      >
        <Link to="/" className="flex items-center scale-125">
          {isScrolled ? <WhiteIcon /> : <BlackIcon />}
        </Link>

        <div className="hidden md:flex items-center gap-10 -translate-x-50">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-white hover:text-white/70" : "text-black hover:text-black/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-full bg-transparent" size="lg" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button variant="default" className="rounded-full" size="lg" asChild>
            <Link to="/signup">Signup</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
