import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { resources } from "@/data/resources";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () => ({
    ...buildMeta({
      title: "Resources — Algo Realty",
      description: "Enterprise resources for real estate leaders — implementation guides, ROI calculators, playbooks, whitepapers, videos and webinars.",
      path: "/resources",
    }),
  }),
  component: ResourcesHub,
});

function ResourcesHub() {
  const kindLabel: Record<string, string> = {
    guide: "Guide",
    calculator: "Interactive",
    assessment: "Assessment",
    playbook: "Playbook",
    whitepaper: "Whitepaper",
    video: "Video",
    webinar: "Webinar",
  };
  return (
    <HubPage
      eyebrow="Resource Center"
      title={<>Playbooks for the <span className="text-emerald-grad">AI-native</span> real estate company.</>}
      intro="Deep-dive guides, calculators and playbooks from the Algo Realty team — used by builders, developers and brokerages worldwide."
      crumbs={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]}
      cards={resources.map((r) => ({
        to: `/resources/${r.slug}`,
        title: r.title,
        sub: r.short,
        meta: r.category,
        tag: kindLabel[r.kind],
      }))}
    />
  );
}
