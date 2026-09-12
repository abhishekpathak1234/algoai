import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const stages = [
  {
    n: "01",
    name: "Discover",
    body: "Understand the workflow, systems, data, bottlenecks and economics.",
    output: "Workflow map · opportunity assessment",
  },
  {
    n: "02",
    name: "Prototype",
    body: "Build a functional intelligence and orchestration prototype around the selected workflow.",
    output: "Working prototype · decision logic",
  },
  {
    n: "03",
    name: "Deploy",
    body: "Connect enterprise systems and introduce governed workforce execution.",
    output: "Live governed workflow",
  },
  {
    n: "04",
    name: "Measure",
    body: "Track throughput, response time, capacity, accuracy, risk and economic impact.",
    output: "Operational baseline vs. outcome",
  },
  {
    n: "05",
    name: "Scale",
    body: "Extend the architecture across additional workflows, teams and business units.",
    output: "Enterprise operations layer",
  },
];

const capabilities = [
  {
    group: "Intelligence",
    items: [
      "Private enterprise AI",
      "Retrieval (RAG)",
      "Domain-specific intelligence",
      "Model routing",
    ],
  },
  {
    group: "Execution",
    items: [
      "Digital workers",
      "Deterministic processing",
      "API orchestration",
      "Event-driven runtimes",
    ],
  },
  {
    group: "Systems",
    items: [
      "Enterprise databases",
      "Legacy system integration",
      "Private / on-premise deployment",
      "Observability",
    ],
  },
];

export function AbTransformation() {
  return (
    <>
      <Section id="transformation" tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="Workflow Transformation — Enterprise Deployment Model"
            title={
              <>
                Start with one workflow.
                <br />
                Prove the value. Scale
                <br />
                across the business.
              </>
            }
            sub="A staged deployment model that establishes an operational baseline, proves measurable impact on a single workflow, then extends the same architecture across the enterprise."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={70 * i}>
              <div className="lift surface-card h-full p-6">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-accent">
                  {s.n}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <p className="mt-4 border-t border-hairline pt-3 font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {s.output}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://calendly.com/abhishek-algobridge/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-[0.9rem] font-medium text-ink-foreground transition-opacity hover:opacity-90"
            >
              Transform a Workflow
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#value"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-3.5 text-[0.9rem] font-medium transition-colors hover:bg-surface-2"
            >
              Model the Value
              <ArrowRight className="h-4 w-4 text-accent" />
            </a>
          </div>
        </Reveal>
      </Section>

      <Section id="engineering">
        <Reveal>
          <SectionHead
            eyebrow="Enterprise AI Engineering — A Capability, Not the Category"
            title="Build the AI system your workflow actually needs."
            sub="AlgoBridge combines existing AI models, enterprise data, domain intelligence, deterministic systems and workflow orchestration to build production-ready AI-native solutions around specific operational problems."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.group} delay={70 * i}>
              <div className="surface-card h-full p-6">
                <p className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                  {c.group}
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-10 surface-card p-6 sm:p-8">
            <p className="eyebrow">How an engineered workflow is assembled</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
              {[
                "Operational problem",
                "Enterprise data",
                "Domain intelligence",
                "Decision logic",
                "Governed execution",
                "Measured outcome",
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-hairline bg-background px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowDown
                      className="h-3.5 w-3.5 -rotate-90 text-muted-foreground/60"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-hairline pt-5 text-[0.85rem] leading-relaxed text-muted-foreground">
              AlgoBridge does not claim proprietary foundation models or research programs. Every
              capability listed here is deployable today on enterprise infrastructure, with security
              and governance controls designed for enterprise deployment.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
