import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader, PageCta, TrustBadge } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { getCaseStudy } from "@/content/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable — AlgoBridge" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.study.title} — AlgoBridge Portfolio`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.study.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.study.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${loaderData.study.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${loaderData.study.slug}` }],
    };
  },
  component: CaseStudyPage,
});

function Block({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
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

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline">
      <table className="w-full text-left text-[0.88rem]">
        <thead className="bg-surface-2">
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-hairline">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 align-top ${i === 0 ? "font-medium" : "text-muted-foreground"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

function CaseStudyPage() {
  const { study: c } = Route.useLoaderData();
  const d = c.detail;

  return (
    <PageShell>
      <PageHeader
        eyebrow={c.category}
        title={c.title}
        sub={c.summary}
        trail={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: c.industry },
        ]}
        meta={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Client", v: c.client },
              { k: "Status", v: c.status },
              { k: "Workflow", v: c.workflow },
              { k: "Industry", v: c.industry },
            ].map((row) => (
              <div key={row.k} className="rounded-xl border border-hairline bg-background p-4">
                <p className="font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {row.k}
                </p>
                <p className="mt-1.5 text-[0.9rem] font-medium">{row.v}</p>
              </div>
            ))}
            <div className="sm:col-span-2 lg:col-span-4">
              <TrustBadge label={c.trust} />
              {c.note && (
                <p className="mt-3 font-mono text-[0.62rem] tracking-[0.12em] text-accent uppercase">
                  {c.note}
                </p>
              )}
            </div>
          </div>
        }
      />

      <Section>
        <Block n="01" label="The business problem">
          <p className="max-w-2xl text-[1rem] leading-relaxed text-muted-foreground">{d.problem}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {d.problemSignals.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.1em] uppercase"
              >
                {s}
              </span>
            ))}
          </div>
        </Block>

        <Block n="02" label="Existing workflow">
          <Table
            head={["Step", "Operational reality"]}
            rows={d.existingWorkflow.map((w) => [w.step, w.reality])}
          />
        </Block>

        <Block n="03" label="System landscape">
          <Table
            head={["System", "Role", "Data"]}
            rows={d.systemLandscape.map((s) => [s.system, s.role, s.data])}
          />
        </Block>

        <Block n="04" label="Operational bottleneck">
          <Bullets items={d.bottleneck} />
        </Block>

        <Block n="05" label="AlgoBridge architecture">
          <div className="grid gap-2">
            {d.architecture.map((a) => (
              <div
                key={a.layer}
                className="grid gap-2 rounded-xl border border-hairline bg-surface-2 p-4 sm:grid-cols-[220px_90px_1fr] sm:items-center"
              >
                <p className="text-[0.9rem] font-semibold">{a.layer}</p>
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-accent uppercase">
                  {a.role}
                </p>
                <p className="text-[0.88rem] text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block n="06" label="Intelligence layer">
          <div className="grid gap-3 sm:grid-cols-2">
            {d.intelligence.map((i) => (
              <div key={i.label} className="surface-card p-5">
                <p className="text-[0.9rem] font-semibold">{i.label}</p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-muted-foreground">
                  {i.detail}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block n="07" label="Flow Architecture™">
          <ol className="grid gap-2">
            {d.flowStages.map((s, i) => (
              <li
                key={s.stage}
                className="flex items-start gap-4 rounded-xl border border-hairline p-4"
              >
                <span className="font-mono text-[0.62rem] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-[0.9rem] font-semibold">{s.stage}</span>
                  <span className="mt-1 block text-[0.86rem] text-muted-foreground">
                    {s.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Block>

        <Block n="08" label="Workforce">
          <Table
            head={["Workforce unit", "Operational scope"]}
            rows={d.workforceUnits.map((w) => [w.unit, w.scope])}
          />
          <div className="mt-5 flex flex-wrap gap-1.5">
            {c.actions.map((a) => (
              <span
                key={a}
                className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.1em] text-accent uppercase"
              >
                {a}
              </span>
            ))}
          </div>
        </Block>

        <Block n="09" label="Governance">
          <Bullets items={d.governance} />
        </Block>

        <Block n="10" label="Business outcome">
          <Bullets items={d.businessOutcome} />
          <p className="mt-5 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
            No quantified customer metrics are published for this engagement.
          </p>
        </Block>

        <Block n="11" label="What scales next">
          <Bullets items={d.scalesNext} />
          <a
            href={c.ctaHref}
            className="group mt-7 inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium hover:bg-surface-2"
          >
            {c.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
          </a>
        </Block>
      </Section>

      <PageCta
        eyebrow="Enterprise engagement"
        title="Have a workflow like this?"
        sub="Bring one workflow. We will map it, design the intelligent version and show where AlgoBridge would execute, govern and improve it."
        secondary={{ label: "Back to Portfolio", href: "/portfolio" }}
      />
    </PageShell>
  );
}
