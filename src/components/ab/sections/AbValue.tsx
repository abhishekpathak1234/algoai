import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const outcomes = [
  {
    k: "01",
    t: "Workflow Visibility",
    d: "Understand where work moves, where it waits, and where operational friction occurs.",
  },
  {
    k: "02",
    t: "Capacity Recovery",
    d: "Identify repetitive coordination and execution work that can be absorbed by governed AI workflows.",
  },
  {
    k: "03",
    t: "Governed Execution",
    d: "Ensure decisions and actions follow business rules, permissions, approvals and audit requirements.",
  },
  {
    k: "04",
    t: "Measured Outcomes",
    d: "Track improvements in throughput, cycle time, exception handling, operational cost and customer experience.",
  },
];

export function AbValue() {
  return (
    <Section id="value" tone="muted">
      <Reveal>
        <SectionHead
          eyebrow="Enterprise Workflow Value"
          title="Model the value of better operations."
          sub="AlgoBridge identifies operational friction across complex workflows and establishes where intelligent orchestration can create measurable business value."
        />
      </Reveal>

      <div className="mt-12 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT — illustrative value headline */}
        <Reveal>
          <div className="surface-card flex h-full flex-col p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="inline-flex items-center gap-2 eyebrow">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Enterprise operational impact
              </p>
              <span className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.16em] text-muted-foreground uppercase">
                Operational model
              </span>
            </div>

            <p className="mt-6 font-display text-[1.7rem] leading-tight font-semibold">
              Make complex operations measurable.
            </p>
            <p className="mt-3 text-[0.86rem] leading-relaxed text-muted-foreground">
              AlgoBridge establishes an operational baseline, identifies workflow friction, and
              measures the impact of intelligent orchestration across systems, teams and governed
              execution.
            </p>

            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o.k} className="bg-surface px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.62rem] tracking-[0.16em] text-accent">
                      {o.k}
                    </span>
                    <p className="font-display text-[0.82rem] leading-none font-semibold tracking-wide uppercase">
                      {o.t}
                    </p>
                  </div>
                  <p className="mt-2 text-[0.74rem] leading-relaxed text-muted-foreground">
                    {o.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-hairline bg-surface-2 px-4 py-4">
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-accent uppercase">
                Measured against your baseline
              </p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                Business impact is established using the customer's actual workflow, operational
                data and existing systems.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — enterprise flow */}
        <Reveal delay={80}>
          <div
            className="flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8"
            style={{ background: "var(--gradient-ink)" }}
          >
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ink-foreground/50 uppercase">
                The flow that creates the value
              </p>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-ink-foreground/60">
                AlgoBridge connects the systems, data, intelligence and workforce already inside your
                enterprise to transform fragmented workflows into intelligent, governed and
                measurable operations.
              </p>
            </div>

            <div className="mt-6 grid gap-1.5">
              {[
                { k: "01", t: "Systems", d: "Existing business systems connected as operational signals." },
                { k: "02", t: "Intelligence", d: "AlgoBridge Intelligence™ reads, remembers and understands the flow." },
                { k: "03", t: "Flow", d: "AlgoBridge Flow Architecture™ orchestrates decisions and execution." },
                { k: "04", t: "Workforce", d: "AlgoBridge Workforce™ executes governed, permissioned actions." },
                { k: "05", t: "Governance", d: "Every action remains observable, approvable and auditable." },
                { k: "06", t: "Outcomes", d: "Operational value measured against the customer's baseline." },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex items-start gap-3 rounded-xl border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.03)] px-4 py-3"
                >
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
                    {s.k}
                  </span>
                  <div>
                    <p className="font-mono text-[0.7rem] tracking-[0.16em] text-ink-foreground uppercase">
                      {s.t}
                    </p>
                    <p className="mt-1 text-[0.72rem] leading-relaxed text-ink-foreground/50">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <div className="mt-4 flex flex-col gap-5 rounded-3xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-[1.05rem] font-semibold">
              Start with one workflow. Prove the operational value. Scale across the business.
            </p>
            <p className="mt-2 text-[0.82rem] text-muted-foreground">
              Every workflow remains permissioned, governed and measurable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-[0.9rem] font-medium text-ink-foreground transition-opacity hover:opacity-90"
            >
              Transform a Workflow
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-3.5 text-[0.9rem] font-medium transition-colors hover:bg-surface-2"
            >
              Talk to an AlgoBridge Expert
              <ArrowRight className="h-4 w-4 text-accent" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
