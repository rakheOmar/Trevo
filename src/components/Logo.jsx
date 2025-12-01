import { cn } from "@/lib/utils";

export function TrevoLogo({ className }) {
  return <img src="/trevo_logo.svg" alt="Trevo Logo" className={cn("h-5 w-auto", className)} />;
}

export function TrevoIcon({ className }) {
  return <img src="/trevo_icon.svg" alt="Trevo Icon" className={cn("h-6 w-auto", className)} />;
}

export function TrevoIconBlack({ className }) {
  return (
    <img src="/trevo_icon_black.svg" alt="Trevo Icon" className={cn("h-6 w-auto", className)} />
  );
}

export function TrevoIconWhite({ className }) {
  return (
    <img src="/trevo_icon_white.svg" alt="Trevo Icon" className={cn("h-6 w-auto", className)} />
  );
}
