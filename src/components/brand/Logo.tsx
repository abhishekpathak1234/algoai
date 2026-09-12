interface LogoProps {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}

/**
 * AlgoBridge AI lockup — infinity/bridge mark with the algobridge AI wordmark.
 * Served from public/algobridge-logo.png (the real, existing AlgoBridge lockup
 * asset — the Lovable export's own asset pointer 404s since its binary was
 * never included in the ZIP).
 */
export function Logo({ className, showTagline = false, inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <img
        src="/algobridge-logo.png"
        alt="AlgoBridge AI"
        width={1035}
        height={335}
        className={`w-auto ${showTagline ? "h-16" : "h-12 sm:h-[60px]"} ${
          inverted ? "brightness-0 invert" : ""
        }`}
      />
    </span>
  );
}
