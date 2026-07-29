import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

export function CaseStudy() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Case Study</Eyebrow>
            <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
              Before AI.
              <br />
              <span className="text-signature">After AI.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Illustrative outcomes from a multi-city developer deployment. Demo data shown for
              illustration.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface font-mono text-[12px]">
                MD
              </div>
              <div>
                <div className="font-display text-[16px]">Marq Developers</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  4 cities · 12 projects · Enterprise
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-border bg-card">
            <div className="grid gap-px bg-border md:grid-cols-2">
              <div className="bg-card p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Before AI
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-widest text-muted-foreground">
                    Illustrative
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ["Avg. Response", "42 min"],
                    ["Lead-to-Visit", "6.4%"],
                    ["Monthly Bookings", "84"],
                    ["Collections In-Quarter", "68%"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between border-b border-border pb-3 last:border-0"
                    >
                      <span className="text-[13px] text-muted-foreground">{k}</span>
                      <span className="font-mono text-[18px] text-muted-foreground">{v}</span>
                    </div>
                  ))}
                </div>
                <BeforeChart />
              </div>
              <div className="relative bg-card p-8">
                <div className="pointer-events-none absolute -inset-24 bg-signature-soft opacity-50 blur-3xl" />
                <div className="relative flex items-center gap-2 text-[10px] uppercase tracking-widest text-signature">
                  After AI <ChevronRight className="h-3 w-3" />
                </div>
                <div className="relative mt-6 space-y-4">
                  {[
                    ["Avg. Response", "3.8 sec", "+660×"],
                    ["Lead-to-Visit", "21.7%", "+3.4×"],
                    ["Monthly Bookings", "268", "+218%"],
                    ["Collections In-Quarter", "92%", "+24pt"],
                  ].map(([k, v, d]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between border-b border-border pb-3 last:border-0"
                    >
                      <span className="text-[13px] text-muted-foreground">{k}</span>
                      <span className="flex items-center gap-2 font-mono text-[18px]">
                        {v}
                        <span className="rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[9.5px] text-emerald">
                          {d}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <AfterChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeChart() {
  return (
    <svg viewBox="0 0 400 100" className="mt-8 h-24 w-full">
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,70 C40,68 80,72 120,66 C160,60 200,64 240,58 C280,54 320,58 360,52 L400,50"
        fill="none"
        stroke="#6b6f78"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function AfterChart() {
  return (
    <svg viewBox="0 0 400 100" className="relative mt-8 h-24 w-full">
      <defs>
        <linearGradient id="afterg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,80 C40,72 80,66 120,58 C160,48 200,52 240,38 C280,26 320,30 360,16 L400,8 L400,100 L0,100 Z"
        fill="url(#afterg)"
      />
      <path
        d="M0,80 C40,72 80,66 120,58 C160,48 200,52 240,38 C280,26 320,30 360,16 L400,8"
        fill="none"
        stroke="#ec4899"
        strokeWidth="1.8"
      />
    </svg>
  );
}
