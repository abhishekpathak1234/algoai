import logoUrl from "@/assets/algo-realty-logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  // Sized to match Algo Auto's visual weight: mobile / tablet (md:) / desktop (lg:).
  const sizeClass =
    variant === "footer"
      ? "h-[72px] max-w-[300px] md:h-[110px] md:max-w-[520px]"
      : "h-[38px] max-w-[180px] md:h-[46px] md:max-w-[220px] lg:h-[62px] lg:max-w-[300px]";

  return (
    <img
      src={logoUrl}
      alt="Algo Realty — AI Automation Partner"
      width={707}
      height={353}
      decoding="async"
      loading="eager"
      className={cn("w-auto shrink-0 select-none object-contain", sizeClass, className)}
    />
  );
}

export default BrandLogo;
