import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { caseStudyBySlug, caseStudies, type CaseStudy } from "@/data/caseStudies";
import { buildMeta, breadcrumbLd, articleLd } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const data = caseStudyBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/case-studies/${params.slug}`;
    return {
      ...buildMeta({
        title: `${data.company} — Case Study — Algo Realty`,
        description: data.short,
        path,
        ogType: "article",
      }),
      scripts: [
        articleLd({ title: data.company, description: data.short, path, category: data.industry }),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: data.company, path },
        ]),
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { data } = Route.useLoaderData() as { data: CaseStudy };
  const related = caseStudies.filter((c) => c.slug !== data.slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: data.company, path: `/case-studies/${data.slug}` },
        ]} />
        <section className="relative overflow-hidden pt-10 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Case Study · Illustrative
            </div>
            <h1 className="mt-6 font-display text-[40px] font-medium leading-[1.06] tracking-tight md:text-[56px]">
              {data.company}
            </h1>
            <div className="mt-3 text-[13px] text-muted-foreground">{data.tag}</div>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">{data.short}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Block title="Challenge" body={data.challenge} />
              <Block title="Solution" body={data.solution} />
              <Block title="Illustrative Impact" body="Metrics reflect an illustrative deployment across residential and enterprise portfolios." />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface/30 py-16">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Impact</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.impact.map((m: { label: string; value: string; sub?: string }) => (
                <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-mono text-3xl">{m.value}</span>
                    {m.sub && (
                      <span className="inline-flex items-center gap-1 text-[11.5px] text-emerald">
                        <TrendingUp className="h-3 w-3" /> {m.sub}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="glass rounded-2xl p-10">
              <Quote className="h-6 w-6 text-emerald" />
              <p className="mt-4 font-display text-[22px] leading-relaxed md:text-[26px]">
                "{data.quote}"
              </p>
              <div className="mt-6 text-[13px] text-muted-foreground">{data.quoteBy}</div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-[1280px] px-6">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">More case studies</div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} to="/case-studies/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-border-strong">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{r.industry}</div>
                    <div className="mt-3 font-display text-[16px]">{r.company}</div>
                    <p className="mt-2 text-[13px] text-muted-foreground">{r.short}</p>
                    <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{title}</div>
      <p className="mt-3 text-[14px] leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
