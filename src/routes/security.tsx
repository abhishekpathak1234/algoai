import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, FileCheck, ServerCog, Globe, KeyRound } from "lucide-react";
import { Nav, Footer } from "@/components/site/Chrome";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTABand } from "@/components/site/CTABand";
import { buildMeta, breadcrumbLd, faqLd } from "@/lib/seo";

const faqs = [
  { q: "Is Algo Realty SOC 2 certified?", a: "Yes — SOC 2 Type II aligned with continuous monitoring and annual audits." },
  { q: "Where is data stored?", a: "Region-specific data residency in India, EU and US. Multi-region deployments available for enterprise customers." },
  { q: "How is data encrypted?", a: "AES-256 at rest and TLS 1.3 in transit. Field-level encryption for PII." },
  { q: "Can we run on our own infrastructure?", a: "Yes — private cloud and on-premise deployments are available for enterprise customers." },
  { q: "How do you handle PII?", a: "Consent-first capture, redaction on request, and full data-subject-access-request workflows built in." },
];

const pillars = [
  { icon: Shield, title: "SOC 2 Type II", body: "Continuous monitoring, annual audits, evidence-based control library." },
  { icon: Lock, title: "Encryption", body: "AES-256 at rest, TLS 1.3 in transit, field-level encryption for PII." },
  { icon: FileCheck, title: "Compliance", body: "RERA-aware disclosures, DPDP, GDPR, CCPA — configurable per region." },
  { icon: ServerCog, title: "Deployment options", body: "Multi-tenant cloud, private cloud, and on-premise for enterprise." },
  { icon: Globe, title: "Data residency", body: "India, EU, US residency and multi-region orchestration." },
  { icon: KeyRound, title: "Access controls", body: "SSO (SAML/OIDC), SCIM, RBAC, audit logs and just-in-time access." },
];

export const Route = createFileRoute("/security")({
  head: () => ({
    ...buildMeta({
      title: "Security — Algo Realty",
      description: "Enterprise security for real estate — SOC 2, encryption, compliance and region-specific data residency.",
      path: "/security",
    }),
    scripts: [
      faqLd(faqs),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Security", path: "/security" }]),
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Security", path: "/security" }]} />
        <section className="relative overflow-hidden pt-8 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Trust · Security · Compliance
            </div>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[60px]">
              Enterprise-grade security. <span className="text-emerald-grad">By default.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] text-muted-foreground">
              Built for enterprise real estate — SOC 2 aligned, encrypted end-to-end, and compliant with global data-protection regulations.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-emerald">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg">{p.title}</div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> FAQ
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Security &amp; compliance questions.</h2>
            <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f) => (
                <div key={f.q} className="p-6">
                  <div className="font-display text-[16px]">{f.q}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand title="Ready for an enterprise security review?" sub="Our security team will share our latest audit reports and answer your CISO's questions." />
      </main>
      <Footer />
    </div>
  );
}
