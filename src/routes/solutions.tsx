import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { solutions } from "@/data/solutions";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    ...buildMeta({
      title: "AI Solutions for Real Estate — Algo Realty",
      description:
        "Explore Algo Realty's AI Solutions — AI Sales Executive, AI Telecaller, AI WhatsApp, AI CRM, AI Collections, Voice AI, Revenue Intelligence and more.",
      path: "/solutions",
    }),
  }),
  component: SolutionsHub,
});

function SolutionsHub() {
  return (
    <HubPage
      eyebrow="Solutions"
      title={
        <>
          An AI Employee for every part of the{" "}
          <span className="text-emerald-grad">revenue engine.</span>
        </>
      }
      intro="Deploy specialised AI Employees across sales, marketing, CRM, finance and operations — each with a clear scope, playbook and reporting line."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
      ]}
      cards={solutions.map((s) => ({
        to: `/solutions/${s.slug}`,
        title: s.name,
        sub: s.tagline,
        meta: s.category,
        icon: <s.icon className="h-5 w-5" />,
      }))}
    />
  );
}
