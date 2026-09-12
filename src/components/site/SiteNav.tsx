import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Layers,
  Workflow,
  Truck,
  Building2,
  Target,
  Calculator,
  ShieldCheck,
  Cloud,
  BookOpen,
  Route as RouteIcon,
  Users,
  Mail,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";

type Item = {
  label: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  group?: string;
};

type MenuDef = {
  label: string;
  href: string;
  eyebrow?: string;
  tagline?: string;
  intro?: string;
  columns?: 1 | 2;
  items?: Item[];
  explore?: { label: string; href: string; note?: string };
  footer?: { text: string; ctaLabel: string; href: string };
};

const menus: MenuDef[] = [
  {
    label: "Platform",
    href: "/#architecture",
    eyebrow: "The AlgoBridge Platform",
    tagline: "Think · Orchestrate · Execute",
    intro:
      "One enterprise intelligence and orchestration layer between your systems and the work being executed.",
    columns: 2,
    items: [
      {
        label: "AlgoBridge Intelligence™",
        desc: "Operational memory, AI reasoning, decision engine, governance, analytics.",
        href: "/#intelligence",
        icon: Sparkles,
        group: "Think",
      },
      {
        label: "AlgoBridge Flow Architecture™",
        desc: "Discover · Remember · Understand · Decide · Execute · Govern · Learn.",
        href: "/#flow-architecture",
        icon: Workflow,
        group: "Orchestrate",
      },
      {
        label: "AlgoBridge Workforce™",
        desc: "Digital workers that execute governed business workflows.",
        href: "/#workforce",
        icon: Users,
        group: "Execute",
      },
      {
        label: "Platform Architecture",
        desc: "Systems → Intelligence → Flow → Workforce → Execution → Outcomes.",
        href: "/#architecture",
        icon: Layers,
        group: "Think",
      },
      {
        label: "Enterprise Systems",
        desc: "CRM, ERP, Commerce, TMS, WMS, Support, Email, APIs, Databases.",
        href: "/#systems",
        icon: Cloud,
        group: "Orchestrate",
      },
      {
        label: "Governance & Control",
        desc: "Permissioned actions, approvals, human oversight, audit logs.",
        href: "/#governance",
        icon: ShieldCheck,
        group: "Execute",
      },
    ],
    explore: {
      label: "Explore the Platform",
      href: "/#architecture",
      note: "An intelligence layer over the systems you already run.",
    },
    footer: {
      text: "Start with one workflow. Prove the value. Scale across the business.",
      ctaLabel: "Transform a Workflow",
      href: "/#contact",
    },
  },
  {
    label: "Solutions",
    href: "/#transformation",
    eyebrow: "Enterprise Engagements",
    tagline: "Transform · integrate · optimize",
    intro:
      "How AlgoBridge engages: diagnose the workflow, architect the intelligence, integrate the systems, deploy governed execution and optimize continuously.",
    columns: 2,
    items: [
      {
        label: "Workflow Transformation",
        desc: "Discover · Prototype · Deploy · Measure · Scale.",
        href: "/#transformation",
        icon: Workflow,
        group: "Transform",
      },
      {
        label: "Intelligence Audit",
        desc: "Assess operational context, data and decision quality.",
        href: "/#intelligence",
        icon: Sparkles,
        group: "Transform",
      },
      {
        label: "Workflow Architecture",
        desc: "Design the governed path from event to outcome.",
        href: "/#flow-architecture",
        icon: RouteIcon,
        group: "Transform",
      },
      {
        label: "Systems Integration",
        desc: "CRM, ERP, TMS, WMS, commerce, documents and APIs.",
        href: "/#systems",
        icon: Cloud,
        group: "Deploy",
      },
      {
        label: "Workforce Deployment",
        desc: "Introduce governed digital workers into live operations.",
        href: "/#workforce",
        icon: Users,
        group: "Deploy",
      },
      {
        label: "Enterprise AI Engineering",
        desc: "Private AI, retrieval, domain intelligence and orchestration.",
        href: "/#engineering",
        icon: Layers,
        group: "Deploy",
      },
    ],
    explore: {
      label: "Explore Workflow Transformation",
      href: "/#transformation",
      note: "Start with one workflow. Prove the value. Scale.",
    },
    footer: {
      text: "Bring the workflow that costs your operation the most.",
      ctaLabel: "Transform a Workflow",
      href: "/#contact",
    },
  },
  {
    label: "Industries",
    href: "/#commerce",
    eyebrow: "Vertical Operating Solutions",
    tagline: "One platform · applied per industry",
    intro:
      "Active verticals are deployed operating solutions. Industry perspectives are architectural viewpoints, not customer deployments.",
    columns: 2,

    items: [
      {
        label: "Commerce & D2C",
        desc: "Orders, revenue recovery, customer operations, RTO, retention.",
        href: "/#commerce",
        icon: Target,
        group: "Active verticals",
      },
      {
        label: "Automotive",
        desc: "Lead intent, appointments, inventory, service and retention.",
        href: "/#auto",
        icon: RouteIcon,
        group: "Active verticals",
      },
      {
        label: "Logistics & Supply Chain",
        desc: "Shipment intelligence, dispatch, exceptions, customer updates.",
        href: "/#logistics",
        icon: Truck,
        badge: "Control tower",
        group: "Active verticals",
      },
      {
        label: "Real Estate",
        desc: "Lead intelligence, property matching, site visits, documents.",
        href: "/#real-estate",
        icon: Building2,
        group: "Active verticals",
      },
      {
        label: "Manufacturing",
        desc: "Perspective on production, quality and supply workflows.",
        href: "/industries/manufacturing",
        icon: Layers,
        group: "Industry perspectives",
      },
      {
        label: "Financial Services",
        desc: "Perspective on servicing, compliance and document workflows.",
        href: "/industries/financial-services",
        icon: ShieldCheck,
        group: "Industry perspectives",
      },
      {
        label: "Healthcare",
        desc: "Perspective on coordination, records and back-office workflows.",
        href: "/industries/healthcare",
        icon: Sparkles,
        group: "Industry perspectives",
      },
      {
        label: "Construction & Infrastructure",
        desc: "Perspective on project, procurement and site workflows.",
        href: "/industries/construction",
        icon: Building2,
        group: "Industry perspectives",
      },
      {
        label: "Workflow Library",
        desc: "See how a real event moves from trigger to governed outcome.",
        href: "/#library",
        icon: BookOpen,
        group: "Explore further",
      },
      {
        label: "Business Value Model",
        desc: "Model the operational capacity a governed workflow recovers.",
        href: "/#value",
        icon: Calculator,
        group: "Explore further",
      },
    ],
    explore: {
      label: "Explore the Industries",
      href: "/#commerce",
      note: "Vertical applications of the same AlgoBridge platform.",
    },

    footer: {
      text: "Bring the workflow that costs your operation the most.",
      ctaLabel: "Transform a Workflow",
      href: "/#contact",
    },
  },
  {
    label: "Resources",
    href: "/#library",
    eyebrow: "Resources",
    tagline: "Architecture · governance · value",
    intro: "How enterprise teams design, govern and measure intelligent workflows.",
    columns: 2,
    items: [
      {
        label: "Portfolio",
        desc: "Enterprise workflow engagements, NDA-safe.",
        href: "/portfolio",
        icon: Layers,
        group: "Proof",
      },
      {
        label: "Case Studies",
        desc: "Problem, architecture and measured outcome per workflow.",
        href: "/portfolio",
        icon: Workflow,
        group: "Proof",
      },
      {
        label: "Industry Research",
        desc: "Enterprise workflow intelligence research and perspectives.",
        href: "/research",
        icon: BookOpen,
        group: "Research",
      },
      {
        label: "Insights",
        desc: "Strategic thinking on intelligence, flow and governed execution.",
        href: "/research",
        icon: Sparkles,
        group: "Research",
      },
      {
        label: "Workflow Library",
        desc: "Triggers moving through the Flow Architecture to outcomes.",
        href: "/#library",
        icon: BookOpen,
        group: "Frameworks",
      },
      {
        label: "Architecture",
        desc: "Systems → intelligence → flow → workforce → outcomes.",
        href: "/#architecture",
        icon: Layers,
        group: "Frameworks",
      },
      {
        label: "Economic Value Model",
        desc: "Model illustrative annualized operational value.",
        href: "/#value",
        icon: Calculator,
        group: "Frameworks",
      },
      {
        label: "Governance Model",
        desc: "Permissions, approvals, oversight and auditability.",
        href: "/#governance",
        icon: ShieldCheck,
        group: "Frameworks",
      },
      {
        label: "Deployment Options",
        desc: "Cloud, private cloud and on-premise execution.",
        href: "/#systems",
        icon: Cloud,
        group: "Frameworks",
      },
    ],
    explore: { label: "Explore Resources", href: "/#library" },
    footer: {
      text: "Tell us the workflow and we'll map the architecture behind it.",
      ctaLabel: "Talk to AlgoBridge",
      href: "/#contact",
    },
  },
  {
    label: "Company",
    href: "/#why",
    eyebrow: "Company",
    tagline: "Thesis · engagement · contact",
    intro: "An enterprise intelligence and orchestration company, not an AI agency.",
    items: [
      {
        label: "Why AlgoBridge",
        desc: "The workflow — not the data — is the problem.",
        href: "/#why",
        icon: Sparkles,
        group: "About",
      },
      {
        label: "Deployment Model",
        desc: "Discover, prototype, deploy, measure, then scale.",
        href: "/#transformation",
        icon: RouteIcon,
        group: "About",
      },

      {
        label: "Contact",
        desc: "Talk to an AlgoBridge expert about one workflow.",
        href: "/#contact",
        icon: Mail,
        group: "Partner",
      },
    ],
    explore: { label: "Explore Company", href: "/#why" },
    footer: {
      text: "Start with one workflow. Prove the value. Scale.",
      ctaLabel: "Transform a Workflow",
      href: "/#contact",
    },
  },
];

function ItemLink({ it, onNavigate }: { it: Item; onNavigate: () => void }) {
  return (
    <a
      href={it.href}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-hairline hover:bg-surface-2"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-background">
        <it.icon className="h-4 w-4 text-accent" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="text-[0.9rem] font-medium">{it.label}</span>
          {it.badge && (
            <span className="rounded-full border border-hairline px-1.5 py-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-accent uppercase">
              {it.badge}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted-foreground">
          {it.desc}
        </span>
      </span>
    </a>
  );
}

function Panel({ menu, onNavigate }: { menu: MenuDef; onNavigate: () => void }) {
  const groups = Array.from(new Set((menu.items ?? []).map((i) => i.group ?? "")));
  const grouped = groups[0] !== "";

  return (
    <div
      className="surface-card w-[min(92vw,660px)] p-5"
      style={{ boxShadow: "var(--shadow-lift)" }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        {menu.eyebrow && <p className="eyebrow">{menu.eyebrow}</p>}
        {menu.tagline && (
          <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
            {menu.tagline}
          </p>
        )}
      </div>
      {menu.intro && (
        <p className="mt-2 max-w-[52ch] text-sm text-muted-foreground">{menu.intro}</p>
      )}

      {grouped ? (
        <div className={`mt-4 grid gap-4 ${menu.columns === 2 ? "sm:grid-cols-2" : ""}`}>
          {groups.map((g) => (
            <div key={g}>
              <p className="border-b border-hairline pb-2 font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                {g}
              </p>
              <div className="mt-1.5 grid gap-1">
                {menu
                  .items!.filter((i) => (i.group ?? "") === g)
                  .map((it) => (
                    <ItemLink key={it.label} it={it} onNavigate={onNavigate} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`mt-4 grid gap-1.5 ${menu.columns === 2 ? "sm:grid-cols-2" : ""}`}>
          {menu.items?.map((it) => (
            <ItemLink key={it.label} it={it} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      {menu.explore && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-surface-2 px-4 py-3">
          <a
            href={menu.explore.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-1.5 text-[0.82rem] font-medium"
          >
            {menu.explore.label}
            <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
          </a>
          {menu.explore.note && (
            <p className="text-[0.75rem] text-muted-foreground">{menu.explore.note}</p>
          )}
        </div>
      )}

      {menu.footer && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-3">
          <p className="text-[0.8rem] text-muted-foreground">{menu.footer.text}</p>
          <a
            href={menu.footer.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-accent"
          >
            {menu.footer.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 140);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || active
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="AlgoBridge AI home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {menus.map((m) => {
            const isOpen = active === m.label;
            const hasPanel = !!m.items?.length;
            return (
              <li
                key={m.label}
                className="relative"
                onMouseEnter={() => (hasPanel ? openMenu(m.label) : scheduleClose())}
                onMouseLeave={scheduleClose}
              >
                <a
                  href={m.href}
                  aria-expanded={hasPanel ? isOpen : undefined}
                  onFocus={() => hasPanel && openMenu(m.label)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.875rem] transition-colors ${
                    isOpen
                      ? "bg-surface-2 text-foreground"
                      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  {m.label}
                  {hasPanel && (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                  )}
                </a>

                {hasPanel && (
                  <div
                    className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <Panel menu={m} onNavigate={() => setActive(null)} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#architecture"
            className="rounded-full border border-hairline px-4 py-2.5 text-[0.85rem] font-medium whitespace-nowrap transition-colors hover:bg-surface-2"
          >
            Explore the Platform
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[0.85rem] font-medium whitespace-nowrap text-ink-foreground transition-opacity hover:opacity-90"
          >
            Transform a Workflow
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-full border border-hairline p-2.5 lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-hairline bg-background px-5 pb-6 lg:hidden">
          <ul className="grid gap-1 py-3">
            {menus.map((m) => {
              const hasPanel = !!m.items?.length;
              const isOpen = mobileOpen === m.label;
              return (
                <li key={m.label} className="border-b border-hairline last:border-b-0">
                  {hasPanel ? (
                    <>
                      <button
                        onClick={() => setMobileOpen(isOpen ? null : m.label)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-1 py-3 text-sm"
                      >
                        {m.label}
                        <ChevronDown
                          className="h-4 w-4 text-muted-foreground transition-transform duration-300"
                          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                        />
                      </button>
                      <div
                        className="grid transition-all duration-400 ease-out"
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="overflow-hidden">
                          <ul className="grid gap-1 pb-3">
                            {m.items!.map((it) => (
                              <li key={it.label}>
                                <a
                                  href={it.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-start gap-3 rounded-lg px-2 py-2.5 hover:bg-surface-2"
                                >
                                  <it.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                  <span>
                                    <span className="block text-[0.85rem] font-medium">
                                      {it.label}
                                    </span>
                                    <span className="block text-[0.78rem] leading-snug text-muted-foreground">
                                      {it.desc}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                          {m.explore && (
                            <a
                              href={m.explore.href}
                              onClick={() => setOpen(false)}
                              className="mb-3 flex items-center gap-1.5 rounded-lg border border-hairline bg-surface-2 px-3 py-2.5 text-[0.82rem] font-medium"
                            >
                              {m.explore.label}
                              <ArrowRight className="h-3.5 w-3.5 text-accent" />
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={m.href}
                      onClick={() => setOpen(false)}
                      className="block px-1 py-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {m.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-ink-foreground"
          >
            Transform a Workflow
          </a>
        </div>
      )}
    </header>
  );
}
