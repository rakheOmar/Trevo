import { cn } from "@/lib/utils";
export function ThemedLogo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/trevo_logo_light.svg" alt="Trevo Logo" className="h-5 w-auto block dark:hidden" />
      <img src="/trevo_logo_dark.svg" alt="Trevo Logo" className="h-5 w-auto hidden dark:block" />
    </div>
  );
}

export function DefaultLogo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/trevo_logo.svg" alt="Trevo Logo" className="h-5 w-auto block dark:hidden" />
      <img src="/trevo_logo.svg" alt="Trevo Logo" className="h-5 w-auto hidden dark:block" />
    </div>
  );
}

export function BlackIcon() {
  return (
    <>
      <img src="/trevo_icon_light.svg" alt="Trevo Icon" className="w-auto h-6 block" />{" "}
    </>
  );
}

export function WhiteIcon({ className }) {
  return (
    <img
      src="/trevo_icon_dark.svg"
      alt="Trevo Icon"
      className={cn("block h-6 w-auto", className)}
    />
  );
}

export function DefaultIcon() {
  return (
    <>
      <img src="/trevo_icon.svg" alt="Trevo Icon" className="w-5 h-5 block dark:hidden" />{" "}
      <img src="/trevo_icon.svg" alt="Trevo Icon" className="w-5 h-5 hidden dark:block" />
    </>
  );
}
