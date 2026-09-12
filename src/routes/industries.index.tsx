import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { industries } from "@/content/industries";

const title = "Industries — AlgoBridge Enterprise Workflow Intelligence";
const description =
  "AlgoBridge applies enterprise intelligence, workflow orchestration and governed execution across logistics, commerce, automotive, real estate, manufacturing, financial services, healthcare and construction operations.";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function Complexity({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className="h-1 w-5 rounded-full"
          style={{
            background: n <= level ? "var(--accent)" : "var(--color-hairline, oklch(0 0 0 / 0.12))",
          }}
        />
      ))}
    </span>
  );
}

function Group({ status }: { status: "Active vertical" | "Industry perspective" }) {
  const items = industries.filter((i) => i.status === status);
  return (
    <div className="mb-14 last:mb-0">
      <p className="border-b border-hairline pb-3 font-mono text-[0.62rem] tracking-[0.18em] text-accent uppercase">
        {status === "Active vertical" ? "Active verticals" : "Industry perspectives"}
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {items.map((ind, i) => (
          <Reveal key={ind.slug} delay={60 * i}>
            <div className="surface-card flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                    {ind.index} · {ind.status}
                  </p>
                  <h2 className="mt-3 text-[1.15rem] font-semibold">{ind.name}</h2>
                </div>
                <Complexity level={ind.complexityLevel} />
              </div>

              <p className="mt-4 text-[0.92rem] leading-relaxed text-muted-foreground">
                {ind.claim}
              </p>

              <dl className="mt-5 grid gap-4 border-t border-hairline pt-5">
                <div>
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Operational complexity
                  </dt>
                  <dd className="mt-1 text-[0.86rem]">{ind.complexity}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Workflow types
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {ind.workflows.map((w) => (
                      <span
                        key={w}
                        className="rounded border border-hairline bg-surface-2 px-2 py-0.5 font-mono text-[0.56rem] tracking-[0.08em] uppercase"
                      >
                        {w}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Systems involved
                  </dt>
                  <dd className="mt-1 text-[0.86rem] text-muted-foreground">
                    {ind.systems.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                    AI opportunity
                  </dt>
                  <dd className="mt-1 text-[0.86rem]">{ind.opportunity}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Governance requirement
                  </dt>
                  <dd className="mt-1 text-[0.86rem] text-muted-foreground">{ind.governance}</dd>
                </div>
              </dl>

              <a
                href={ind.href}
                className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.86rem] font-medium text-accent"
              >
                {ind.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function IndustriesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AlgoBridge Industries"
        title="One architecture. Applied per operation."
        sub="Intelligence, Flow Architecture™ and Workforce applied to the operations-heavy industries where workflow complexity — not data volume — is the constraint."
        trail={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <Section>
        <Group status="Active vertical" />
        <Group status="Industry perspective" />
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Your industry is an operating model, not a template."
        sub="Bring the workflow that costs your operation the most. We map the systems, the decisions and the governed execution path."
        secondary={{ label: "View the Portfolio", href: "/portfolio" }}
      />
    </PageShell>
  );
}
