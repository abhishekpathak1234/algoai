import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const footerCols = [
  {
    title: "Industries",
    links: [
      { label: "Commerce & D2C", href: "/#commerce" },
      { label: "Automotive", href: "/#auto" },
      { label: "Logistics & Supply Chain", href: "/#logistics" },
      { label: "Real Estate", href: "/#real-estate" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction & Infrastructure", href: "/industries/construction" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "AlgoBridge Intelligence™", href: "/#intelligence" },
      { label: "AlgoBridge Flow Architecture™", href: "/#flow-architecture" },
      { label: "AlgoBridge Workforce™", href: "/#workforce" },
      { label: "Enterprise Architecture", href: "/#architecture" },
      { label: "Governance", href: "/#systems" },
      { label: "Integrations", href: "/#systems" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Workflow Transformation", href: "/#transformation" },
      { label: "Intelligence Audit", href: "/#intelligence" },
      { label: "Workflow Architecture", href: "/#flow-architecture" },
      { label: "Systems Integration", href: "/#systems" },
      { label: "Workforce Deployment", href: "/#workforce" },
      { label: "Enterprise AI Engineering", href: "/#engineering" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Industry Research", href: "/research" },
      { label: "Workflow Library", href: "/#library" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Economic Value Model", href: "/#value" },
      { label: "Insights", href: "/research" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why AlgoBridge", href: "/#why" },
      { label: "Our Approach", href: "/#transformation" },
      { label: "Partners", href: "/#contact" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_3.2fr]">
          <div>
            <Logo showTagline />
            <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-muted-foreground">
              Enterprise AI intelligence &amp; orchestration for complex business operations.
            </p>
            <a
              href="/#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-accent"
            >
              Transform a Workflow
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {footerCols.map((c) => (
              <div key={c.title}>
                <p className="font-mono text-[0.62rem] tracking-[0.18em] text-foreground/80 uppercase">
                  {c.title}
                </p>
                <ul className="mt-5 grid gap-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.88rem] text-muted-foreground transition-colors hover:text-accent"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6">
          <p className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground">
            © {new Date().getFullYear()} AlgoBridge.ai — Enterprise AI intelligence &amp;
            orchestration.
          </p>
          <p className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground">
            Illustrative demonstrations · no live customer data
          </p>
        </div>
      </div>
    </footer>
  );
}
