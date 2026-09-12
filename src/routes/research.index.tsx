import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { research, researchSections } from "@/content/research";

const title = "AlgoBridge Research — Enterprise Workflow Intelligence";
const description =
  "Research and operating perspectives on enterprise workflow intelligence, governed AI execution, digital workforce architecture and the economics of orchestration.";

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/research" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AlgoBridge Research"
        title="Enterprise intelligence, written down."
        sub="How enterprises move AI out of experimentation and into governed operational execution — workflow by workflow."
        trail={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />

      <Section>
        {researchSections.map((section) => {
          const items = research.filter((r) => r.section === section);
          if (items.length === 0) return null;
          return (
            <div key={section} className="mb-14 last:mb-0">
              <p className="border-b border-hairline pb-3 font-mono text-[0.62rem] tracking-[0.18em] text-accent uppercase">
                {section}
              </p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {items.map((r, i) => (
                  <Reveal key={r.slug} delay={60 * i}>
                    <a href={`/research/${r.slug}`} className="lift surface-card flex h-full flex-col p-6">
                      <p className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                        {r.category}
                      </p>
                      <h2 className="mt-4 text-[1.1rem] leading-snug font-semibold">{r.title}</h2>
                      <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                        {r.question}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
                        {r.topics.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.1em] text-muted-foreground uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.85rem] font-medium text-accent">
                        Read the research
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Turn a perspective into a workflow."
        sub="Bring the workflow that costs your operation the most. We map it, architect the intelligence and show where governed execution belongs."
        secondary={{ label: "View the Portfolio", href: "/portfolio" }}
      />
    </PageShell>
  );
}
