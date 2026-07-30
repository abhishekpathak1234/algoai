import { useEffect, useRef, useState } from "react";
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
 *
 * Falls back to a text wordmark if the image asset fails to load (e.g. the
 * asset pipeline hasn't been supplied a real file yet) instead of showing a
 * broken-image icon. The image's error event can fire before React finishes
 * hydrating and attaches the onError handler (fast local 404s beat
 * hydration), so this also checks img.complete/naturalWidth on mount to
 * catch failures that happened before the listener was attached.
 */
export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const heightClass =
    variant === "footer"
      ? "h-[56px] sm:h-[60px] md:h-[64px]"
      : "h-[34px] sm:h-[38px] md:h-[42px] lg:h-[44px]";

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  if (imgFailed) {
    const textSizeClass =
      variant === "footer"
        ? "text-[22px] sm:text-[24px] md:text-[26px]"
        : "text-[15px] sm:text-[17px] md:text-[19px]";
    return (
      <span
        className={cn(
          "font-display font-medium tracking-tight text-foreground",
          textSizeClass,
          className,
        )}
      >
        Algo Realty
      </span>
    );
  }

  return (
    <img
      ref={imgRef}
      src={logoAsset.url}
      alt="Algo Realty — AI Automation Partner"
      width={1661}
      height={452}
      decoding="async"
      loading="eager"
      onError={() => setImgFailed(true)}
      style={{ mixBlendMode: "screen" }}
      className={cn("w-auto shrink-0 select-none object-contain", heightClass, className)}
    />
  );
}

export default BrandLogo;
