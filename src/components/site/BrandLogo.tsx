import logoUrl from "@/assets/algo-realty-logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const heightClass =
    variant === "footer"
      ? "h-[56px] sm:h-[60px] md:h-[64px]"
      : "h-[34px] sm:h-[38px] md:h-[42px] lg:h-[44px]";

  return (
    <img
      src={logoUrl}
      alt="Algo Realty — AI Automation Partner"
      width={707}
      height={353}
      decoding="async"
      loading="eager"
      className={cn("w-auto shrink-0 select-none object-contain", heightClass, className)}
    />
  );
}

export default BrandLogo;
