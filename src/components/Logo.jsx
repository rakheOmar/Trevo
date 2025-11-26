export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/trevo_logo_light.png" alt="Trevo Logo" className="h-5 w-auto block dark:hidden" />
      <img src="/trevo_logo_dark.png" alt="Trevo Logo" className="h-5 w-auto hidden dark:block" />
    </div>
  );
}

export function LogoIcon() {
  return (
    <>
      <img src="/trevo_icon_light.png" alt="Trevo Icon" className="w-5 h-5 block dark:hidden" />{" "}
      <img src="/trevo_icon_dark.png" alt="Trevo Icon" className="w-5 h-5 hidden dark:block" />
    </>
  );
}
