import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { getResearch } from "@/content/research";

export const Route = createFileRoute("/research/$slug")({
  loader: ({ params }) => {
    const item = getResearch(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Research unavailable — AlgoBridge" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.item.title} — AlgoBridge Research`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.item.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.item.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/research/${loaderData.item.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/research/${loaderData.item.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.item.title,
            description: loaderData.item.summary,
            author: { "@type": "Organization", name: "AlgoBridge AI" },
          }),
        },
      ],
    };
  },
  component: ResearchArticle,
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

function Pairs({
  items,
}: {
  items: { label?: string; stage?: string; detail: string }[];
}) {
  return (
    <div className="grid gap-2">
      {items.map((it) => {
        const heading = it.label ?? it.stage ?? "";
        return (
          <div
            key={heading}
            className="grid gap-1.5 rounded-xl border border-hairline bg-surface-2 p-4 sm:grid-cols-[220px_1fr] sm:gap-5"
          >
            <p className="text-[0.9rem] font-semibold">{heading}</p>
            <p className="text-[0.88rem] leading-relaxed text-muted-foreground">{it.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

function ResearchArticle() {
  const { item } = Route.useLoaderData();
  const a = item.article;

  return (
    <PageShell>
      <PageHeader
        eyebrow={item.category}
        title={item.title}
        sub={item.question}
        trail={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: item.section },
        ]}
        meta={
          <div className="flex flex-wrap gap-1.5">
            {item.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline bg-background px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.12em] text-muted-foreground uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        }
      />

      <Section>
        <Reveal>
          <p className="max-w-3xl text-[1.15rem] leading-relaxed">{a.executiveSummary}</p>
        </Reveal>

        <div className="mt-10">
          <Block n="01" label="Why it matters">
            <Bullets items={a.whyItMatters} />
          </Block>
          <Block n="02" label="Current operating model">
            <Pairs items={a.currentOperatingModel} />
          </Block>
          <Block n="03" label="Where AI intervenes">
            <Pairs items={a.whereAiIntervenes} />
          </Block>
          <Block n="04" label="Flow Architecture™">
            <ol className="grid gap-2">
              {a.flowArchitecture.map((s, i) => (
                <li key={s.stage} className="flex items-start gap-4 rounded-xl border border-hairline p-4">
                  <span className="font-mono text-[0.62rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[0.9rem] font-semibold">{s.stage}</span>
                    <span className="mt-1 block text-[0.86rem] text-muted-foreground">{s.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Block>
          <Block n="05" label="Governance">
            <Bullets items={a.governance} />
          </Block>
          <Block n="06" label="Operational economics">
            <Bullets items={a.economics} />
            <p className="mt-5 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
              Values shown in USD and illustrative of workflow structure, not guaranteed results.
            </p>
          </Block>
          <Block n="07" label="Implementation path">
            <Pairs items={a.implementation} />
          </Block>
          <Block n="08" label="Executive takeaways">
            <Bullets items={a.takeaways} />
          </Block>
          <Block n="09" label="Related workflows">
            <div className="flex flex-wrap gap-2">
              {a.relatedWorkflows.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
                >
                  {r.label}
                  <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </Block>
        </div>
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Apply this to your operation."
        sub="Bring one workflow. We will map the intelligence, the governed execution path and the operational outcome."
        secondary={{ label: "Back to Research", href: "/research" }}
      />
    </PageShell>
  );
}
