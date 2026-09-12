import { useState } from "react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const stages = [
  {
    n: "01",
    title: "Discover",
    body: "Map workflows, systems, data, bottlenecks and business opportunities.",
    systems: ["Process maps", "System inventory", "Volume data"],
    example: "Quantifies 380 manual exception touches per week across dispatch and support.",
  },
  {
    n: "02",
    title: "Remember",
    body: "Create persistent operational memory and business context.",
    systems: ["Databases", "ERP", "CRM"],
    example: "Builds a customer-and-lane memory used by every later decision.",
  },
  {
    n: "03",
    title: "Understand",
    body: "Interpret documents, conversations, events and operational intent.",
    systems: ["Email", "Documents", "Support", "Telematics"],
    example: "Reads a driver message and classifies it as a delivery-window risk.",
  },
  {
    n: "04",
    title: "Decide",
    body: "Combine AI reasoning with deterministic business rules and decision logic.",
    systems: ["Business rules", "SLA policy", "Pricing"],
    example: "Selects re-slot + proactive notification over escalation.",
  },
  {
    n: "05",
    title: "Execute",
    body: "Synchronize live actions across applications, APIs, databases, legacy systems and operational platforms.",
    systems: ["APIs", "TMS", "ERP", "Commerce"],
    example: "Writes the new slot to the TMS and sends the customer update.",
  },
  {
    n: "06",
    title: "Govern",
    body: "Apply permissions, approvals, human oversight, security and auditability.",
    systems: ["Identity", "Approvals", "Audit log"],
    example: "Requires a supervisor approval for any commercial concession.",
  },
  {
    n: "07",
    title: "Learn",
    body: "Capture outcomes and continuously improve workflow performance.",
    systems: ["Analytics", "Observability", "Warehouse"],
    example: "Feeds resolution outcomes back into decision thresholds.",
  },
];

export function AbFlowArchitecture() {
  const [active, setActive] = useState<number>(0);

  return (
    <Section id="flow-architecture" tone="ink">
      <Reveal>
        <SectionHead
          invert
          eyebrow="AlgoBridge Flow Architecture™ — AI Workflow Transformation Framework"
          title={
            <>
              From workflow friction
              <br />
              to intelligent execution.
            </>
          }
          sub="A seven-stage framework used to discover, design, execute, govern and continuously improve intelligent workflows."
        />
      </Reveal>

      <div className="mt-12 grid gap-2">
        {stages.map((s, i) => {
          const on = i === active;
          return (
            <Reveal key={s.n} delay={40 * i}>
              <div
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                role="button"
                className="cursor-pointer rounded-2xl px-5 py-4 transition-all duration-500 outline-none"
                style={{
                  background: on
                    ? "color-mix(in oklab, var(--accent) 16%, transparent)"
                    : "oklch(1 0 0 / 0.035)",
                  border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
                }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className="font-mono text-[0.68rem] tracking-[0.16em]"
                    style={{ color: on ? "var(--accent)" : "oklch(0.9 0.01 160 / 0.45)" }}
                  >
                    {s.n}
                  </span>
                  <h3 className="font-display text-[1.15rem] font-semibold text-ink-foreground">
                    {s.title}
                  </h3>
                  <p
                    className="text-[0.86rem] leading-relaxed text-ink-foreground/60"
                    style={{ flex: "1 1 320px" }}
                  >
                    {s.body}
                  </p>
                </div>

                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <div className="mt-4 grid gap-4 border-t border-[oklch(1_0_0_/_0.12)] pt-4 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[0.58rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
                          Related systems
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {s.systems.map((sy) => (
                            <span
                              key={sy}
                              className="rounded-full px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.08em] text-ink-foreground/80 uppercase"
                              style={{
                                border: "1px solid oklch(1 0 0 / 0.16)",
                                background: "oklch(1 0 0 / 0.04)",
                              }}
                            >
                              {sy}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-mono text-[0.58rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
                          Example action
                        </p>
                        <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-foreground/85">
                          {s.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
