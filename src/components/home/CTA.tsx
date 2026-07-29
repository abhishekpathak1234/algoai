import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

export function CTA() {
  return (
    <section id="demo" className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-surface/40 px-6 py-24 text-center md:px-16 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-40 -z-0 h-[500px] bg-signature opacity-20 blur-[120px]" />
          <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="relative">
            <Eyebrow>Enterprise Demo</Eyebrow>
            <h2 className="mt-8 font-display text-[56px] font-medium leading-[0.94] tracking-[-0.045em] md:text-[92px] lg:text-[112px]">
              Stop Hiring.
              <br />
              <span className="text-signature">Start Deploying AI Employees.</span>
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[13.5px] font-medium text-background transition hover:brightness-95"
              >
                Book Enterprise Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#workforce"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-[13.5px] font-medium text-foreground transition hover:border-border-strong hover:bg-background"
              >
                Explore AI Workforce
              </a>
            </div>
            <p className="mt-8 text-[12.5px] text-muted-foreground">
              Deploy your first AI Workforce in weeks — not months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
