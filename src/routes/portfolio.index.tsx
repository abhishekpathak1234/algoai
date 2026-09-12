import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta, TrustBadge } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { caseStudies, portfolioFilters } from "@/content/portfolio";

const title = "AlgoBridge Portfolio — Enterprise AI Workflow Transformations";
const description =
  "Selected enterprise workflow transformations, intelligent operating systems and AI-native solutions built around complex business problems.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.filters.includes(filter));

  return (
    <PageShell>
      <PageHeader
        eyebrow="AlgoBridge Portfolio"
        title="Enterprise workflows, transformed."
        sub="Built around real operational problems. From logistics exceptions to commerce recovery and real estate operations, AlgoBridge applies the same intelligence and orchestration architecture to different enterprise workflows."
        trail={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        meta={
          <div className="flex flex-wrap gap-2">
            {portfolioFilters.map((f) => {
              const count =
                f === "All" ? caseStudies.length : caseStudies.filter((c) => c.filters.includes(f)).length;
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-3.5 py-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase transition-colors ${
                    active
                      ? "border-accent bg-background text-accent"
                      : "border-hairline text-muted-foreground hover:bg-background"
                  }`}
                >
                  {f}
                  <span className="ml-1.5 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        }
      />

      <Section>
        {shown.length === 0 ? (
          <div className="surface-card p-8">
            <p className="font-mono text-[0.62rem] tracking-[0.16em] text-accent uppercase">
              No published engagement yet
            </p>
            <h2 className="mt-4 text-xl font-semibold">
              We do not publish work we cannot stand behind.
            </h2>
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-muted-foreground">
              The AlgoBridge architecture applies to {filter.toLowerCase()} operations, but no
              engagement in this category is published yet. Explore how the architecture would apply,
              or bring us the workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/industries"
                className="rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
              >
                Explore Industries
              </a>
              <a
                href="https://calendly.com/abhishek-algobridge/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-4 py-2.5 text-[0.85rem] font-medium text-ink-foreground"
              >
                Transform a Workflow
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {shown.map((c, i) => (
              <Reveal key={c.slug} delay={60 * i}>
                <article className="surface-card overflow-hidden">
                  <div className="grid lg:grid-cols-[1.15fr_1fr]">
                    <div className="border-b border-hairline p-6 sm:p-8 lg:border-r lg:border-b-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                          {c.category}
                        </p>
                        <TrustBadge label={c.trust} />
                      </div>
                      <h2 className="mt-5 text-[clamp(1.25rem,2.4vw,1.7rem)] leading-[1.12] font-semibold">
                        {c.title}
                      </h2>
                      <div className="mt-5 grid gap-1">
                        <p className="text-[0.9rem] font-medium">{c.client}</p>
                        <p className="font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase">
                          {c.status}
                        </p>
                        {c.note && (
                          <p className="font-mono text-[0.62rem] tracking-[0.12em] text-accent uppercase">
                            {c.note}
                          </p>
                        )}
                      </div>
                      <p className="mt-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                        {c.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-1.5">
                        {c.flow.map((f, idx) => (
                          <span key={f} className="flex items-center gap-1.5">
                            {idx > 0 && <span className="text-[0.65rem] text-accent">→</span>}
                            <span className="rounded border border-hairline bg-surface-2 px-2 py-1 font-mono text-[0.58rem] tracking-[0.08em] uppercase">
                              {f}
                            </span>
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={`/portfolio/${c.slug}`}
                          className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[0.85rem] font-medium text-ink-foreground"
                        >
                          Read the case study
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                          href={c.ctaHref}
                          className="group inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
                        >
                          {c.ctaLabel}
                          <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-2">
                      {[
                        { k: "Industry", v: c.industry },
                        { k: "Workflow", v: c.workflow },
                        { k: "Systems", v: c.systems.join(" · ") },
                        { k: "Workforce", v: c.workforce.join(" · ") },
                        { k: "AlgoBridge approach", v: c.approach },
                        { k: "Outcome", v: c.outcome },
                      ].map((row) => (
                        <div
                          key={row.k}
                          className="border-b border-hairline p-6 last:border-b-0 sm:[&:nth-last-child(-n+1)]:border-b-0"
                        >
                          <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                            {row.k}
                          </dt>
                          <dd className="mt-2 text-[0.9rem] leading-relaxed">{row.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Have a workflow like this?"
        sub="Bring one workflow. We will map it, design the intelligent version and show you exactly where AlgoBridge would execute, govern and improve it."
        secondary={{ label: "Explore Research", href: "/research" }}
      />
    </PageShell>
  );
}
