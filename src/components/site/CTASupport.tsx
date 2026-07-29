import { Check } from "lucide-react";
import { DEFAULT_CTA_BENEFITS, DEFAULT_TRUST_LINE } from "@/lib/contact";

/**
 * Social proof + benefit checklist shown immediately above a primary
 * booking CTA. "stacked" for standalone CTA sections/bands; "compact" for
 * tight hero contexts where a full 3-line list would crowd the layout.
 */
export function CTASupport({
  trustLine = DEFAULT_TRUST_LINE,
  benefits = DEFAULT_CTA_BENEFITS,
  variant = "stacked",
  center = false,
  className = "",
}: {
  trustLine?: string;
  benefits?: string[];
  variant?: "stacked" | "compact";
  center?: boolean;
  className?: string;
}) {
  const justify = center ? "justify-center" : "";

  if (variant === "compact") {
    return (
      <div
        className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-muted-foreground ${justify} ${className}`}
      >
        <span className="flex items-center gap-1.5 text-emerald">
          <Check className="h-3.5 w-3.5" /> {trustLine}
        </span>
        {benefits.map((b) => (
          <span key={b} className="flex items-center gap-1.5">
            <Check className="h-3 w-3 text-emerald" /> {b}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        className={`flex items-center gap-1.5 text-[12.5px] font-medium text-emerald ${justify}`}
      >
        <Check className="h-3.5 w-3.5" /> {trustLine}
      </div>
      <ul
        className={`flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-muted-foreground ${justify}`}
      >
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
