import { CalendarCheck, Clock, Database, PhoneMissed, TrendingUp, Wallet } from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

const costs = [
  {
    Icon: Clock,
    t: "Slow Response",
    d: "Leads expect responses within minutes. Delayed follow-up reduces conversion opportunities.",
  },
  {
    Icon: TrendingUp,
    t: "Lead Leakage",
    d: "Marketing generates demand. Sales loses it in the handoff.",
  },
  { Icon: Database, t: "Manual CRM", d: "Teams spend hours updating CRM instead of selling." },
  {
    Icon: PhoneMissed,
    t: "Missed Calls",
    d: "Every unanswered inquiry may represent a lost opportunity.",
  },
  {
    Icon: CalendarCheck,
    t: "Site Visits",
    d: "Scheduling and confirmation delays reduce attendance.",
  },
  { Icon: Wallet, t: "Collections", d: "Manual payment reminders increase operational effort." },
];

export function CostOfDelay() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>The Cost of Delay</Eyebrow>
            <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
              Every Minute
              <br />
              Costs Revenue.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Real estate companies spend millions generating demand. Most revenue is lost after the
              lead arrives.
            </p>
          </div>

          <ol className="relative">
            <div className="absolute left-[62px] top-0 h-full w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />
            {costs.map(({ Icon, t, d }, i) => (
              <li
                key={t}
                className="relative grid grid-cols-[80px_1fr] items-start gap-8 border-b border-border py-10 last:border-0"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface backdrop-blur">
                    <Icon className="h-4 w-4 text-foreground/85" />
                  </div>
                </div>
                <div>
                  <div className="font-display text-[30px] font-medium leading-tight tracking-[-0.02em] md:text-[36px]">
                    {t}
                  </div>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
