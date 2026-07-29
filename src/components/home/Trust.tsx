const groups = [
  "Residential Developers",
  "Commercial Developers",
  "Luxury Builders",
  "Brokerages",
  "Property Management",
  "Channel Partners",
  "Enterprise Sales Teams",
];

export function Trust() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mb-8 text-center text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Trusted by
        </div>
        <div className="mask-fade-edges relative flex items-center gap-16 overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-16 will-change-transform [animation:marquee_38s_linear_infinite]">
            {[...groups, ...groups].map((g, i) => (
              <span
                key={i}
                className="font-display text-[22px] tracking-tight text-muted-foreground/70"
              >
                {g}
                <span className="ml-16 text-border-strong">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
