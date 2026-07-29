import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...buildMeta({
      title: "About — Algo Realty",
      description: "Algo Realty is the AI Workforce for real estate — a product by AlgoBridge, deployed across leading builders, developers and brokerages worldwide.",
      path: "/about",
    }),
    scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
        <section className="relative overflow-hidden pt-8 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> About Algo Realty
            </div>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[60px]">
              The AI Workforce for <span className="text-emerald-grad">real estate.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
              Algo Realty is a product by AlgoBridge. We build AI Employees that run alongside real estate teams — increasing revenue, reducing lead leakage and scaling operations without scaling headcount.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-[1080px] gap-8 px-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Our Mission</div>
              <h2 className="mt-4 font-display text-3xl">Give every real estate company an AI Workforce.</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Real estate is a $326 trillion asset class. It's operated on WhatsApp threads, spreadsheets and short-staffed telecalling floors. We're changing that.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Our Belief</div>
              <h2 className="mt-4 font-display text-3xl">AI is an employee, not a tool.</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Every AI Employee at Algo Realty owns an outcome. Not a workflow. Not a feature. An outcome — the same way a great human employee does.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="glass rounded-2xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Backed by AlgoBridge</div>
                  <div className="mt-2 font-display text-xl">The AI infrastructure company behind Algo Realty, Algo Auto and Algo Easy.</div>
                </div>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald hover:brightness-110"
                >
                  Book Enterprise Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
