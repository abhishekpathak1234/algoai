import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Users,
  Layers,
  Home,
  Crown,
  Signal,
  Cog,
  Briefcase,
} from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Algo Realty" },
      {
        name: "description",
        content:
          "AI Workforce tailored for every real estate business — builders, developers, brokerages, agencies, property management, commercial, luxury and channel partners.",
      },
      { property: "og:title", content: "Industries — Algo Realty" },
      {
        property: "og:description",
        content: "Explore dedicated AI Workforce deployments for every segment of real estate.",
      },
    ],
  }),
  component: IndustriesIndex,
});

const items = [
  {
    to: "/industries/builders",
    label: "Builders",
    icon: Building2,
    sub: "Automate lead-to-booking for residential builders.",
  },
  {
    to: "/industries/developers",
    label: "Developers",
    icon: Layers,
    sub: "Scale multi-project portfolios without scaling teams.",
  },
  {
    to: "/industries/agencies",
    label: "Agencies",
    icon: Briefcase,
    sub: "Close more deals with less manual work.",
  },
  {
    to: "/industries/brokerages",
    label: "Brokerages",
    icon: Users,
    sub: "Give every broker their own AI team.",
  },
  {
    to: "/industries/property-management",
    label: "Property Management",
    icon: Home,
    sub: "Automate tenants, maintenance and rent.",
  },
  {
    to: "/industries/commercial",
    label: "Commercial",
    icon: Signal,
    sub: "Enterprise workforce for institutional portfolios.",
  },
  {
    to: "/industries/luxury",
    label: "Luxury",
    icon: Crown,
    sub: "White-glove concierge for HNW clients.",
  },
  {
    to: "/industries/channel-partners",
    label: "Channel Partners",
    icon: Cog,
    sub: "Grow channel sales with AI.",
  },
];

function IndustriesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-36 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Industries
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
              An AI Workforce for every part of{" "}
              <span className="text-emerald-grad">real estate.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] text-muted-foreground">
              Explore how Algo Realty is deployed inside builders, developers, brokerages, agencies,
              property management, commercial, luxury and channel partner networks.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-emerald)] text-[#05100C]">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="font-display text-lg">{i.label}</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-2 text-[13.5px] text-muted-foreground">{i.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
