import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/algobridgeai",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/algobridgeai/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/algobridgeai/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.999a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

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
      { label: "Governance & Integrations", href: "/#systems" },
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
      { label: "Portfolio & Case Studies", href: "/portfolio" },
      { label: "Industry Research & Insights", href: "/research" },
      { label: "Workflow Library", href: "/#library" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Economic Value Model", href: "/#value" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why AlgoBridge", href: "/#why" },
      { label: "Our Approach", href: "/#transformation" },
      { label: "Partners", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_3.2fr]">
          <div>
            <a href="/" aria-label="AlgoBridge AI home">
              <Logo showTagline />
            </a>
            <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-muted-foreground">
              Enterprise AI intelligence &amp; orchestration for complex business operations.
            </p>
            <a
              href="https://calendly.com/abhishek-algobridge/30min"
              target="_blank"
              rel="noopener noreferrer"
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
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
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

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <p className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground">
            © {new Date().getFullYear()} AlgoBridge.ai — Enterprise AI intelligence &amp;
            orchestration.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/privacy"
              className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground transition-colors hover:text-accent"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground transition-colors hover:text-accent"
            >
              Terms of Use
            </a>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface-2 hover:text-accent"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <p className="font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground">
            Illustrative demonstrations · no live customer data
          </p>
        </div>
      </div>
    </footer>
  );
}
