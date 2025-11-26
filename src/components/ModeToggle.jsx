import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [optimisticTheme, setOptimisticTheme] = useState(theme);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    setOptimisticTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setOptimisticTheme(newTheme);

    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement("style");
    style.id = styleId;

    const cx = "100";
    const cy = "0";
    const css = `
      @supports (view-transition-name: root) {
        ::view-transition-old(root) {
          animation: none;
        }
        ::view-transition-new(root) {
          animation: circle-expand 0.35s ease-out;
          transform-origin: top right;
        }
        @keyframes circle-expand {
          from {
            clip-path: circle(0% at ${cx}% ${cy}%);
          }
          to {
            clip-path: circle(150% at ${cx}% ${cy}%);
          }
        }
      }
    `;

    style.textContent = css;
    document.head.appendChild(style);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      const styleEl = document.getElementById(styleId);
      if (styleEl) {
        styleEl.remove();
      }
    }, 700);

    if ("startViewTransition" in document) {
      document.startViewTransition(() => setTheme(newTheme));
    } else {
      setTheme(newTheme);
    }
  }, [theme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      className="bg-primary text-primary-foreground "
      aria-label={`Switch to ${optimisticTheme === "light" ? "dark" : "light"} theme`}
      aria-pressed={optimisticTheme === "dark"}
      title={`Switch to ${optimisticTheme === "light" ? "dark" : "light"} theme`}
      size="lg"
    >
      {optimisticTheme === "light" ? (
        <Sun className="h-[1.1rem] w-[1.1rem]" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.1rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
