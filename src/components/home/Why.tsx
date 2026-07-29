import { Bot, Users } from "lucide-react";
import { Eyebrow, LiveDot } from "@/components/home/primitives";

const comparison: Array<[string, string, string]> = [
  ["Working Hours", "8", "24/7"],
  ["Response", "Minutes", "Seconds"],
  ["CRM", "Manual", "Automatic"],
  ["Follow-up", "Missed", "Always"],
  ["Languages", "Limited", "Multi-language"],
  ["Scalability", "Hire More", "Deploy More AI"],
];

export function Why() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Algo Realty</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
            A workforce that
            <br />
            outperforms — by design.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface">
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-display text-[18px]">Traditional Team</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Yesterday
                  </div>
                </div>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-widest text-muted-foreground">
                Baseline
              </span>
            </div>
            <div className="mt-10 divide-y divide-border">
              {comparison.map(([k, a]) => (
                <div key={k} className="flex items-baseline justify-between py-4">
                  <span className="text-[11.5px] uppercase tracking-widest text-muted-foreground">
                    {k}
                  </span>
                  <span className="font-display text-2xl text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] p-[1px]">
            <div className="absolute inset-0 bg-signature opacity-90" />
            <div className="relative rounded-[27px] bg-card p-10">
              <div className="pointer-events-none absolute -inset-24 -z-0 bg-signature-soft opacity-70 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-signature">
                    <Bot className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <div className="font-display text-[18px]">AI Workforce</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Today
                    </div>
                  </div>
                </div>
                <LiveDot />
              </div>
              <div className="relative mt-10 divide-y divide-border">
                {comparison.map(([k, , b]) => (
                  <div key={k} className="flex items-baseline justify-between py-4">
                    <span className="text-[11.5px] uppercase tracking-widest text-muted-foreground">
                      {k}
                    </span>
                    <span className="font-display text-2xl text-foreground">{b}</span>
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
