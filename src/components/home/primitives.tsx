import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function useCountUp(target: number, duration = 1800) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(target * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, value: v };
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = "number",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "number" | "compact";
  className?: string;
}) {
  const { ref, value: v } = useCountUp(value);
  const shown =
    format === "compact"
      ? new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(v)
      : v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
      </span>
      {children}
    </div>
  );
}

export function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-emerald">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
      </span>
      Live
    </span>
  );
}

export function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-page absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
