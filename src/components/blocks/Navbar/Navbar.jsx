import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BlackIcon, WhiteIcon } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/nav";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const scrolled = {
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
      };

      const topState = {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        borderColor: "transparent",
        boxShadow: "none",
      };

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.scroll() > 10) {
            gsap.to(containerRef.current, { ...scrolled, duration: 0.25 });
            gsap.to(".nav-link", { color: "white", duration: 0.25 });
            gsap.to(".icon-black", { opacity: 0, duration: 0.25 });
            gsap.to(".icon-white", { opacity: 1, duration: 0.25 });
          } else {
            gsap.to(containerRef.current, { ...topState, duration: 0.25 });
            gsap.to(".nav-link", { color: "black", duration: 0.25 });
            gsap.to(".icon-black", { opacity: 1, duration: 0.25 });
            gsap.to(".icon-white", { opacity: 0, duration: 0.25 });
          }
        },
      });
    },
    { scope: navRef }
  );

  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    gsap.to(mobileMenuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.25,
      ease: "power2.inOut",
    });
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-6 z-50 mx-auto w-full px-4 md:px-0 md:max-w-[75%]"
    >
      <div
        ref={containerRef}
        className="flex items-center justify-between rounded-xl px-4 py-3 border"
        style={{ borderColor: "transparent", backgroundColor: "transparent" }}
      >
        <Link to="/" className="relative flex items-center h-8 w-24">
          <div className="icon-white absolute left-0 top-1/2 -translate-y-1/2 opacity-0">
            <WhiteIcon />
          </div>
          <div className="icon-black absolute left-0 top-1/2 -translate-y-1/2 opacity-100">
            <BlackIcon />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 -translate-x-50 ">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="nav-link text-base font-medium text-black transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="nav-link rounded-full text-base text-black hover:bg-black/10"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="rounded-full px-6" asChild>
              <Link to="/signup">Signup</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg flex items-center justify-center nav-link text-black"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden h-0 opacity-0 mt-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-4 p-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="nav-link text-base font-medium text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              variant="ghost"
              className="nav-link rounded-full text-base text-white hover:bg-white/10"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="rounded-full px-6" asChild>
              <Link to="/signup">Signup</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
