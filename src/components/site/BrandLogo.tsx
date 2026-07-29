import logoAsset from "@/assets/algo-realty-logo.png.asset.json";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

/**
 * Reusable brand mark. The artwork ships on its own black plate designed to
 * dissolve into the site background — do not recolor or knock out the plate.
 * Screen blend mode drops the near-black plate against the near-black canvas
 * so only the gradient mark and wordmark read.
 */
export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const heightClass =
    variant === "footer"
      ? "h-[56px] sm:h-[60px] md:h-[64px]"
      : "h-[34px] sm:h-[38px] md:h-[42px] lg:h-[44px]";

  return (
    <img
      src={logoAsset.url}
      alt="Algo Realty — AI Automation Partner"
      width={1661}
      height={452}
      decoding="async"
      loading="eager"
      style={{ mixBlendMode: "screen" }}
      className={cn("w-auto shrink-0 select-none object-contain", heightClass, className)}
    />
  );
}

export default BrandLogo;
