import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { caseStudies } from "@/data/caseStudies";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    ...buildMeta({
      title: "Case Studies — Algo Realty",
      description:
        "Illustrative enterprise deployments of Algo Realty's AI Workforce across builders, developers, brokerages, property management and commercial real estate.",
      path: "/case-studies",
    }),
  }),
  component: CaseStudiesHub,
});

function CaseStudiesHub() {
  return (
    <HubPage
      eyebrow="Case Studies"
      title={
        <>
          How leaders deploy <span className="text-emerald-grad">AI Workforces.</span>
        </>
      }
      intro="Illustrative deployments across the real estate industry — the challenge, the solution, the impact."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
      ]}
      cards={caseStudies.map((c) => ({
        to: `/case-studies/${c.slug}`,
        title: c.company,
        sub: c.short,
        meta: c.industry,
        tag: "Illustrative",
      }))}
    />
  );
}
