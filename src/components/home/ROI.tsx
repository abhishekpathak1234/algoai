import { Counter, Eyebrow } from "@/components/home/primitives";

const roi = [
  { l: "Revenue Pipeline", v: 42_000_000 },
  { l: "Annual Payroll Savings", v: 1_800_000 },
  { l: "Recovered Revenue", v: 8_400_000 },
  { l: "Collections", v: 3_100_000 },
  { l: "Operational Savings", v: 920_000 },
  { l: "Marketing Optimization", v: 2_400_000 },
];

export function ROI() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>ROI</Eyebrow>
            <h2 className="mt-6 font-display text-[56px] font-medium leading-[0.95] tracking-[-0.04em] md:text-[72px]">
              Recover Revenue.
              <br />
              <span className="text-signature">Not Just Costs.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Illustrative outcomes modeled from enterprise deployments across developers and
              brokerages.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-signature-soft opacity-70 blur-3xl" />
            <div className="glass-strong relative overflow-hidden rounded-[28px] p-10 shadow-[var(--shadow-card)]">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {roi[0].l}
              </div>
              <div className="mt-4 font-mono text-[92px] font-medium leading-none tracking-[-0.04em] text-signature">
                <Counter value={roi[0].v} prefix="$" format="compact" />
              </div>
              <div className="mt-6 h-px hairline" />
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {roi.slice(1).map((r) => (
                  <div key={r.l}>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {r.l}
                    </div>
                    <div className="mt-1.5 font-mono text-2xl">
                      <Counter value={r.v} prefix="$" format="compact" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
