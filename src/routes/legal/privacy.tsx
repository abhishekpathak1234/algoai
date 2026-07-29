import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    ...buildMeta({
      title: "Privacy Policy — Algo Realty",
      description: "How Algo Realty collects, uses and protects personal information.",
      path: "/legal/privacy",
    }),
    scripts: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/legal/privacy" },
      ]),
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <ArticlePage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how Algo Realty collects, uses, discloses and protects personal information."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/legal/privacy" },
      ]}
      sections={[
        {
          title: "Information we collect",
          body: "Business contact information, workflow and conversation data, product usage telemetry, and payment metadata.",
        },
        {
          title: "How we use information",
          body: "To provide the service, improve our products, prevent abuse, comply with legal obligations and communicate about the service.",
        },
        {
          title: "Sharing",
          body: "We share data with sub-processors bound by data-protection agreements, and with authorities when required by law.",
        },
        {
          title: "Retention",
          body: "We retain data for the duration of your subscription and as required by law. Customers can request deletion at any time.",
        },
        {
          title: "Your rights",
          body: "Rights of access, correction, deletion and portability are supported, subject to jurisdictional law (GDPR, DPDP, CCPA).",
        },
        {
          title: "Contact",
          body: "Email privacy@algorealty.example to exercise rights or ask questions.",
        },
      ]}
    />
  );
}
