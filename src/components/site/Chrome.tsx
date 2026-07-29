import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { solutions } from "@/data/solutions";
import { integrations } from "@/data/integrations";
import { resources } from "@/data/resources";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CALENDLY_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const industries = [
  { to: "/industries/builders", label: "Builders" },
  { to: "/industries/developers", label: "Developers" },
  { to: "/industries/agencies", label: "Agencies" },
  { to: "/industries/brokerages", label: "Brokerages" },
  { to: "/industries/property-management", label: "Property Management" },
  { to: "/industries/commercial", label: "Commercial" },
  { to: "/industries/luxury", label: "Luxury" },
  { to: "/industries/channel-partners", label: "Channel Partners" },
] as const;

function Menu({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 transition hover:text-foreground">{label}</button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="glass max-h-[70vh] overflow-y-auto rounded-xl p-2">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block rounded-lg px-3 py-2 text-[13px] text-foreground/80 transition hover:bg-surface hover:text-foreground"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const solutionItems = solutions
    .slice(0, 10)
    .map((s) => ({ to: `/solutions/${s.slug}`, label: s.name }));
  const integrationItems = integrations
    .slice(0, 12)
    .map((i) => ({ to: `/integrations/${i.slug}`, label: i.name }));
  const resourceItems = resources
    .slice(0, 10)
    .map((r) => ({ to: `/resources/${r.slug}`, label: r.title }));

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-[1280px] px-6">
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <Link to="/" className="mr-6 flex items-center" aria-label="Algo Realty home">
            <BrandLogo variant="header" />
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex"
          >
            <Menu label="Solutions" items={solutionItems} />
            <Link to="/ai-employees" className="transition hover:text-foreground">
              AI Employees
            </Link>
            <Menu
              label="Industries"
              items={industries.map((i) => ({ to: i.to, label: i.label }))}
            />
            <Menu label="Integrations" items={integrationItems} />
            <Menu label="Resources" items={resourceItems} />
            <Link to="/pricing" className="transition hover:text-foreground">
              Pricing
            </Link>
          </nav>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-[14px] bg-foreground px-4 py-2 text-[13px] font-medium text-background transition hover:bg-foreground/90"
          >
            Book Demo
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const cols: { t: string; items: { label: string; to: string }[] }[] = [
    {
      t: "Solutions",
      items: solutions.slice(0, 8).map((s) => ({ label: s.name, to: `/solutions/${s.slug}` })),
    },
    {
      t: "Industries",
      items: industries.map((i) => ({ label: i.label, to: i.to })),
    },
    {
      t: "Resources",
      items: [
        { label: "Blog", to: "/blog" },
        { label: "Case Studies", to: "/case-studies" },
        { label: "ROI Calculator", to: "/resources/roi-calculator" },
        { label: "Implementation Guide", to: "/resources/implementation-guide" },
        { label: "Executive Playbook", to: "/resources/executive-playbook" },
        { label: "All Resources", to: "/resources" },
      ],
    },
    {
      t: "Company",
      items: [
        { label: "About", to: "/about" },
        { label: "Pricing", to: "/pricing" },
        { label: "Security", to: "/security" },
        { label: "Contact", to: "/contact" },
        { label: "Book Demo", to: CALENDLY_URL },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              AI Workforce for Real Estate. A product by AlgoBridge — deployed across leading
              developers, brokerages and enterprises worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-foreground/80 transition hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-emerald" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 transition hover:text-foreground"
              >
                <Calendar className="h-3.5 w-3.5 text-emerald" />
                Book a Strategy Call
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.t}>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {c.t}
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.items.map((x) =>
                    x.to.startsWith("http") ? (
                      <li key={x.label}>
                        <a
                          href={x.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 transition hover:text-foreground"
                        >
                          {x.label}
                        </a>
                      </li>
                    ) : (
                      <li key={x.label}>
                        <Link
                          to={x.to}
                          className="text-foreground/80 transition hover:text-foreground"
                        >
                          {x.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Algo Realty · An AlgoBridge Company</div>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/legal/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/security" className="hover:text-foreground">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
