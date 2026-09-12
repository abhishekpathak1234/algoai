import lockup from "@/assets/algobridge-lockup.png.asset.json";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}

/**
 * AlgoBridge AI lockup — infinity/bridge mark with the algobridge AI wordmark.
 */
export function Logo({ className, showTagline = false, inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <img
        src={lockup.url}
        alt="AlgoBridge AI"
        width={990}
        height={310}
        className={`w-auto ${showTagline ? "h-16" : "h-12 sm:h-[60px]"} ${
          inverted ? "brightness-0 invert" : ""
        }`}
      />
    </span>
  );
}
