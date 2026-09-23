import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";
import { getIndustry } from "@/content/industries";
import { getCaseStudy } from "@/content/portfolio";

const commerce = getIndustry("commerce")!;
const caseStudy = getCaseStudy("commerce")!;

const title = "Consumer, D2C & Commerce — AlgoBridge Enterprise AI Workflow Intelligence";
const description =
  "AlgoBridge runs governed revenue operations across consumer, D2C and commerce workflows — cart recovery, order intervention, RTO prevention, retention and support escalation.";

export const Route = createFileRoute("/consumer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/consumer" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/consumer" }],
  }),
  component: ConsumerPage,
});

function ConsumerPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Commerce & D2C · Active vertical"
        title={commerce.claim}
        sub={caseStudy.summary}
        trail={[{ label: "Home", href: "/" }, { label: "Consumer & D2C" }]}
      />

      <Section tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="The problem"
            title="Demand is there. Recovery is manual."
            sub={caseStudy.detail.problem}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-1.5">
            {caseStudy.detail.problemSignals.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline bg-surface-2 px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] uppercase"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Where AlgoBridge sits"
            title="One governed path from signal to revenue outcome."
            sub={caseStudy.approach}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="surface-card p-6">
              <p className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                Operational complexity
              </p>
              <p className="mt-2 text-[0.92rem]">{commerce.complexity}</p>
            </div>
            <div className="surface-card p-6">
              <p className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                AI opportunity
              </p>
              <p className="mt-2 text-[0.92rem]">{commerce.opportunity}</p>
            </div>
            <div className="surface-card p-6">
              <p className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                Governance requirement
              </p>
              <p className="mt-2 text-[0.92rem]">{commerce.governance}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 surface-card p-6 sm:p-8">
            <p className="eyebrow">Workflow types</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {commerce.workflows.map((w) => (
                <span
                  key={w}
                  className="rounded border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.08em] uppercase"
                >
                  {w}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-hairline pt-5 font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
              Systems involved
            </p>
            <p className="mt-2 text-[0.9rem] text-muted-foreground">
              {commerce.systems.join(" · ")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
            {caseStudy.flow.map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-hairline bg-background px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionHead eyebrow="Governance" title="Recovery stays within commercial policy." />
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {caseStudy.detail.governance.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Bring one commerce or D2C workflow."
        sub="We map the systems, the decisions and the governed execution path — then prove the operational value before scaling."
        primary={{ label: "Transform a Workflow", href: "https://calendly.com/abhishek-algobridge/30min" }}
        secondary={{ label: "See the Commerce case study", href: "/portfolio/commerce" }}
      />
    </PageShell>
  );
}
