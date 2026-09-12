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

const title = "AlgoBridge AI — AI workflow & workforce intelligence for enterprise operations";
const description =
  "AlgoBridge AI connects business systems, operational data and AI workforce units into governed workflows that execute real work across commerce, automotive, logistics and real estate operations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
