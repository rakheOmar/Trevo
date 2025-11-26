import { CornerDownLeft } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
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
        `fixed left-1/2 -translate-x-1/2 z-55 flex justify-center w-[90%] ${
          isScrolled ? "px-2 md:px-20 top-4" : "top-2 px-6 py-4"
        } transition-all duration-300`
      )}
    >
      <div className="w-full">
        <div
          className={cn(
            `relative flex items-center w-full justify-center px-2 md:px-4 py-5 transition-all duration-300 ${
              isScrolled &&
              "bg-card/30 backdrop-blur-lg inset-shadow-sm inset-shadow-white/20 rounded-2xl px-4"
            }`
          )}
        >
          <Link to="/" className="absolute left-2 md:left-4 cursor-pointer">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-lg text-foreground hover:text-foreground/70 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="absolute right-2 md:right-4 flex items-center gap-3">
            <Button size="lg" asChild>
              <Link className="flex items-center gap-2" to="/signup">
                <span>Get Started</span>
                <CornerDownLeft className="size-4" />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
