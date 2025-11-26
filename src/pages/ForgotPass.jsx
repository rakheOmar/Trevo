import { Link as RouterLink } from "react-router-dom";
import { LogoIcon } from "@/components/Logo";
import Waves from "@/components/react-bits/Waves";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const navButtonClass =
    "bg-primary text-primary-foreground ring-primary before:from-primary-foreground/20 after:from-primary-foreground/10 relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-2 text-left text-xs font-medium ring-1 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-linear-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-linear-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer h-7 sm:h-8 sm:px-3 sm:text-sm";

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent relative">
      <Waves
        lineColor="rgba(0, 0, 0, 0.08)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="opacity-40 dark:filter-[invert(1)]"
      />

      <form
        action=""
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)] relative z-10"
      >
        <div className="p-8 pb-6">
          <div>
            <RouterLink to="/" aria-label="go home">
              <LogoIcon />
            </RouterLink>
            <h1 className="mb-1 mt-4 text-xl font-semibold">Recover Password</h1>
            <p className="text-sm">Enter your email to receive a reset link</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <Button className={`w-full ${navButtonClass}`}>Send Reset Link</Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Remembered your password?
            <Button asChild variant="link" className="px-2">
              <RouterLink to="/login">Log in</RouterLink>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
