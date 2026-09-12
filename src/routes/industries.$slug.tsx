import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { getIndustry } from "@/content/industries";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry?.perspective) throw notFound();
    return { industry, perspective: industry.perspective };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Industry unavailable — AlgoBridge" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.industry.name} — AlgoBridge Industry Perspective`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.perspective.intro },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.perspective.intro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${loaderData.industry.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/industries/${loaderData.industry.slug}` }],
    };
  },
  component: IndustryPage,
});

function Block({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-hairline py-10 md:grid-cols-[220px_1fr] md:gap-10">
        <div>
          <p className="font-mono text-[0.62rem] tracking-[0.16em] text-accent uppercase">{n}</p>
          <h2 className="mt-2 text-[0.95rem] font-semibold tracking-tight uppercase">{label}</h2>
        </div>
        <div>{children}</div>
      </div>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          {i}
        </li>
      ))}
    </ul>
  );
}

function Pairs({ items }: { items: { heading: string; detail: string }[] }) {
  return (
    <div className="grid gap-2">
      {items.map((it) => (
        <div
          key={it.heading}
          className="grid gap-1.5 rounded-xl border border-hairline bg-surface-2 p-4 sm:grid-cols-[220px_1fr] sm:gap-5"
        >
          <p className="text-[0.9rem] font-semibold">{it.heading}</p>
          <p className="text-[0.88rem] leading-relaxed text-muted-foreground">{it.detail}</p>
        </div>
      ))}
    </div>
  );
}

function IndustryPage() {
  const { industry, perspective } = Route.useLoaderData();

  return (
    <PageShell>
      <PageHeader
        eyebrow={`Industry perspective · ${industry.index}`}
        title={industry.name}
        sub={industry.claim}
        trail={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        meta={
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Operational complexity", v: industry.complexity },
              { k: "AI opportunity", v: industry.opportunity },
              { k: "Governance requirement", v: industry.governance },
            ].map((row) => (
              <div key={row.k} className="rounded-xl border border-hairline bg-background p-4">
                <p className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {row.k}
                </p>
                <p className="mt-1.5 text-[0.88rem]">{row.v}</p>
              </div>
            ))}
          </div>
        }
      />

      <Section>
        <Reveal>
          <p className="max-w-3xl text-[1.15rem] leading-relaxed">{perspective.intro}</p>
        </Reveal>

        <div className="mt-10">
          <Block n="01" label="Operating reality">
            <Pairs
              items={perspective.operatingReality.map((o) => ({ heading: o.label, detail: o.detail }))}
            />
          </Block>
          <Block n="02" label="Applicable workflows">
            <Pairs
              items={perspective.applicableWorkflows.map((w) => ({
                heading: w.workflow,
                detail: w.detail,
              }))}
            />
          </Block>
          <Block n="03" label="Architecture fit">
            <Pairs
              items={perspective.architectureFit.map((a) => ({ heading: a.layer, detail: a.detail }))}
            />
          </Block>
          <Block n="04" label="Governance">
            <Bullets items={perspective.governance} />
          </Block>
          <Block n="05" label="Where to start">
            <Bullets items={perspective.startHere} />
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/portfolio"
                className="group inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
              >
                See comparable workflows
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/research"
                className="group inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
              >
                Read the research
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Block>
        </div>
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title={`Bring one ${industry.name.toLowerCase()} workflow.`}
        sub="We map the systems, the decisions and the governed execution path — then prove the operational value before scaling."
        secondary={{ label: "All industries", href: "/industries" }}
      />
    </PageShell>
  );
}
