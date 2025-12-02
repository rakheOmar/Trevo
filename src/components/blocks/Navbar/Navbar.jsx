import { useGSAP } from "@gsap/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TrevoIconBlack, TrevoIconWhite } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/nav";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const sheetRef = useRef(null);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (location.pathname !== "/") {
        navigate(`/${href}`);
      }
    } else {
      setOpen(false);
    }
  };

  useGSAP(
    () => {
      const scrolled = {
        backgroundColor: "rgba(23,23,25,0.3)",
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
    if (open) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(sheetRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(sheetRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed inset-x-0 top-4 z-50 mx-auto w-[95%] px-0 md:top-6 lg:max-w-[75%]"
      >
        <div
          ref={containerRef}
          className="flex items-center justify-between rounded-xl border px-4 py-3"
          style={{ borderColor: "transparent", backgroundColor: "transparent" }}
        >
          <Link to="/" className="relative flex h-8 w-24 items-center">
            <div className="icon-white absolute left-0 top-1/2 -translate-y-1/2 opacity-0">
              <TrevoIconWhite />
            </div>
            <div className="icon-black absolute left-0 top-1/2 -translate-y-1/2 opacity-100">
              <TrevoIconBlack />
            </div>
          </Link>

          <div className="hidden -translate-x-50 gap-8 lg:flex lg:items-center">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="nav-link text-base font-medium text-black transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden gap-3 lg:flex lg:items-center">
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
              onClick={() => setOpen(true)}
              className="nav-link flex items-center justify-center rounded-lg p-2 text-black lg:hidden"
            >
              <HugeiconsIcon icon={Menu01Icon} size={24} strokeWidth={1.5} color="currentColor" />
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-60 bg-black/60 opacity-0 invisible backdrop-blur-sm lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      <div
        ref={sheetRef}
        className="fixed bottom-0 left-0 right-0 z-70 flex translate-y-full flex-col gap-2 rounded-t-2xl border-t border-white/10 bg-[#121212] p-4 shadow-2xl lg:hidden md:p-6 md:rounded-t-3xl"
      >
        <div className="mb-1 flex w-full items-center justify-between">
          <span className="text-xs font-medium text-white/40 uppercase tracking-wider md:text-sm">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:h-8 md:w-8"
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={14}
              strokeWidth={1.5}
              color="currentColor"
              className="md:h-5 md:w-5"
            />
          </button>
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block w-full rounded-lg p-2 text-sm font-medium text-white transition-colors hover:bg-white/5 active:bg-white/10 md:text-lg md:p-3"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-2 flex flex-col gap-2 md:mt-4 md:gap-3">
          <Button
            variant="outline"
            className="h-9 w-full rounded-lg border-white/10 bg-transparent text-sm text-white hover:bg-white/5 hover:text-white md:h-11 md:text-base"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            className="h-9 w-full rounded-lg bg-white text-sm text-black hover:bg-white/90 md:h-11 md:text-base"
            asChild
          >
            <Link to="/signup">Signup</Link>
          </Button>
        </div>
        <div className="pb-2 md:pb-4" />
      </div>
    </>
  );
};

export default NavBar;
