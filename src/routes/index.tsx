import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { AbHero } from "@/components/ab/AbHero";
import { AbProblem } from "@/components/ab/sections/AbProblem";
import { AbArchitecture } from "@/components/ab/sections/AbArchitecture";
import { AbIntelligence } from "@/components/ab/sections/AbIntelligence";
import { AbFlowArchitecture } from "@/components/ab/sections/AbFlowArchitecture";
import { AbWorkforce } from "@/components/ab/sections/AbWorkforce";
import { AbLogistics } from "@/components/ab/sections/AbLogistics";
import { AbVerticals } from "@/components/ab/sections/AbVerticals";
import { AbLibrary } from "@/components/ab/sections/AbLibrary";
import { AbValue } from "@/components/ab/sections/AbValue";
import { AbSystems } from "@/components/ab/sections/AbSystems";
import { AbTransformation } from "@/components/ab/sections/AbTransformation";
import { AbResearch } from "@/components/ab/sections/AbResearch";
import { AbClosing } from "@/components/ab/sections/AbClosing";

const title = "AlgoBridge AI — Enterprise AI Intelligence & Orchestration";
const description =
  "Enterprise AI intelligence and orchestration for complex business operations. AlgoBridge connects systems, data, intelligence and workforce to transform fragmented workflows into intelligent, governed and measurable operations.";

const ogTitle = "AlgoBridge AI — Enterprise AI Workflow Automation";
const ogDescription =
  "AI-powered orchestration that automates repetitive customer and operational workflows, reduces costs, and increases operational efficiency.";
const ogImage = "https://algobridge.cc/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://algobridge.cc/" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AlgoBridge AI",
          slogan: "Bridging business systems, intelligence and execution.",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <AbHero />
        <AbProblem />
        <AbArchitecture />
        <AbIntelligence />
        <AbFlowArchitecture />
        <AbWorkforce />
        <AbVerticals />
        <AbLogistics />
        <AbLibrary />
        <AbTransformation />
        <AbValue />
        <AbSystems />
        <AbResearch />
        <AbClosing />
      </main>
    </div>
  );
}
