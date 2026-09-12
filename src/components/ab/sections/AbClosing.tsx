import { ArrowRight, Compass, Layers, Rocket, Target } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";
import { SiteFooter } from "@/components/site/SiteFooter";

const why = [
  {
    icon: Target,
    title: "Workflow-first, not model-first",
    body: "We start from the operational bottleneck, not from a model demo.",
  },
  {
    icon: Layers,
    title: "Execution, not suggestions",
    body: "Workflows end in a real update inside your system of record.",
  },
  {
    icon: Compass,
    title: "Built for operations teams",
    body: "Designed around dispatchers, agents, coordinators and controllers.",
  },
  {
    icon: Rocket,
    title: "Governed from day one",
    body: "Permissions, approvals and audit trails are part of the first release.",
  },
];

export function AbClosing() {
  return (
    <>
      <Section id="why">
        <Reveal>
          <SectionHead
            eyebrow="Why AlgoBridge"
            title="AI that carries operational weight."
            sub="Most AI projects stall between insight and action. AlgoBridge is built for the part that actually changes the business — execution inside real workflows."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={60 * i}>
              <div className="lift surface-card h-full p-6">
                <w.icon className="h-4 w-4 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact" tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow text-ink-foreground/60">Start with one workflow</p>
            <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.05] font-semibold text-ink-foreground">
              Which workflow is holding
              <br />
              your operations back?
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-foreground/70">
              Bring one workflow. We will map it, design the intelligent version and show you
              exactly where AlgoBridge would execute, govern and improve it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[0.9rem] font-medium"
                style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}
              >
                Transform a Workflow
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#library"
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(1_0_0_/_0.2)] px-5 py-3.5 text-[0.9rem] font-medium text-ink-foreground transition-colors hover:border-accent"
              >
                Explore the Workflow Library
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.04)] p-6 sm:p-8">
              <p className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-foreground/50 uppercase">
                What a consultation covers
              </p>
              <ul className="mt-5 grid gap-3">
                {[
                  "The workflow, its systems and where it breaks",
                  "Where intelligence and execution would sit",
                  "Governance, approvals and audit requirements",
                  "A realistic first pilot scope and success criteria",
                ].map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2.5 text-[0.9rem] text-ink-foreground/80"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <SiteFooter />
    </>
  );
}
