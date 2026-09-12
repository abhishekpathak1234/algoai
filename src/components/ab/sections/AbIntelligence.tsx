import { useState } from "react";
import { Brain, Cpu, Database, LineChart, PlayCircle, ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const layers = [
  {
    n: "01",
    title: "Operational Memory",
    icon: Database,
    body: "Persistent business context — entities, history, rules and prior decisions.",
    systems: ["Databases", "ERP", "CRM"],
    example: "Recalls that this customer's last three deliveries required a booking slot.",
  },
  {
    n: "02",
    title: "AI Intelligence",
    icon: Brain,
    body: "Interpret documents, conversations, events and operational data.",
    systems: ["Email", "Documents", "Support"],
    example: "Reads a PDF delivery note and extracts quantities, references and discrepancies.",
  },
  {
    n: "03",
    title: "Decision Engine",
    icon: Cpu,
    body: "Combine AI reasoning with deterministic business rules.",
    systems: ["Business rules", "Pricing", "SLA policy"],
    example: "Chooses re-slotting over escalation because the SLA still allows a same-day window.",
  },
  {
    n: "04",
    title: "Execution Engine",
    icon: PlayCircle,
    body: "Translate decisions into governed system actions.",
    systems: ["APIs", "TMS", "Commerce"],
    example: "Updates the transport order and notifies the customer in one atomic action.",
  },
  {
    n: "05",
    title: "Governance",
    icon: ShieldCheck,
    body: "Permissions, approvals, auditability and human oversight.",
    systems: ["Identity", "Approvals", "Audit log"],
    example: "Holds a credit note above threshold for a finance approver before posting.",
  },
  {
    n: "06",
    title: "Analytics",
    icon: LineChart,
    body: "Measure workflow performance and operational outcomes.",
    systems: ["Warehouse", "BI", "Observability"],
    example: "Tracks exception resolution time before and after the workflow went live.",
  },
];

export function AbIntelligence() {
  const [active, setActive] = useState(0);
  const current = layers[active]!;

  return (
    <Section id="intelligence">
      <Reveal>
        <SectionHead
          eyebrow="AlgoBridge Intelligence™ — AI Intelligence & Orchestration Platform"
          title={
            <>
              The intelligence layer
              <br />
              between your systems
              <br />
              and your workforce.
            </>
          }
          sub="AlgoBridge Intelligence connects operational context, AI reasoning, business rules and execution systems into a unified intelligence layer."
        />
      </Reveal>

      <div className="mt-12 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-2 sm:grid-cols-2">
          {layers.map((l, i) => {
            const on = i === active;
            return (
              <Reveal key={l.n} delay={40 * i}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="lift surface-card h-full w-full p-5 text-left"
                  style={{
                    borderColor: on ? "var(--accent)" : undefined,
                    background: on
                      ? "color-mix(in oklab, var(--accent) 6%, var(--surface))"
                      : undefined,
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface">
                      <l.icon className="h-4 w-4 text-accent" />
                    </span>
                    <span className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">
                      {l.n}
                    </span>
                  </span>
                  <span className="mt-4 block text-[1rem] font-semibold">{l.title}</span>
                  <span className="mt-2 block text-[0.82rem] leading-relaxed text-muted-foreground">
                    {l.body}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div
            className="sticky top-24 flex h-full flex-col justify-between rounded-3xl p-6"
            style={{ background: "var(--gradient-ink)", color: "var(--ink-foreground)" }}
          >
            <div>
              <p
                className="font-mono text-[0.6rem] tracking-[0.18em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                {current.n} — {current.title}
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed opacity-85">{current.body}</p>

              <p className="mt-7 font-mono text-[0.58rem] tracking-[0.16em] uppercase opacity-50">
                Connected systems
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {current.systems.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.08em] uppercase"
                    style={{
                      border: "1px solid oklch(1 0 0 / 0.16)",
                      background: "oklch(1 0 0 / 0.04)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[oklch(1_0_0_/_0.12)] p-4">
              <p className="font-mono text-[0.58rem] tracking-[0.16em] uppercase opacity-50">
                Example behaviour
              </p>
              <p className="mt-2 text-[0.86rem] leading-relaxed opacity-90">{current.example}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
