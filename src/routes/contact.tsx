import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildMeta({
      title: "Contact — Algo Realty",
      description: "Talk to Algo Realty's enterprise sales, partnerships or support teams.",
      path: "/contact",
    }),
    scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: Mail, title: "Enterprise Sales", body: "For CEOs, MDs, sales directors and revenue leaders.", cta: "Book a Demo", to: "/book-demo" as const },
    { icon: MessageSquare, title: "Partnerships", body: "For channel partners, brokerages and franchise networks.", cta: "Book a Demo", to: "/book-demo" as const },
    { icon: Phone, title: "Customer Support", body: "For existing customers running Algo Realty in production.", cta: "Talk to Sales", to: "/book-demo" as const },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <section className="relative overflow-hidden pt-8 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Contact
            </div>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[60px]">
              Let's talk about <span className="text-emerald-grad">revenue.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] text-muted-foreground">
              Book a session with a senior specialist. Every demo is tailored to your business, integrations and revenue targets.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {channels.map((c) => (
                <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-emerald">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg">{c.title}</div>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">{c.body}</p>
                  <Link
                    to={c.to}
                    className="mt-6 inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-4 py-2.5 text-[13px] font-medium text-foreground hover:bg-surface"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
