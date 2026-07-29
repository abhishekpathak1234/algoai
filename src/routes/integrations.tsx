import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { integrations } from "@/data/integrations";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    ...buildMeta({
      title: "Integrations — Algo Realty",
      description:
        "Native, bi-directional integrations with Salesforce, HubSpot, LeadSquared, Zoho, WhatsApp Business, Google, Meta, 99acres, Housing and more.",
      path: "/integrations",
    }),
  }),
  component: IntegrationsHub,
});

function IntegrationsHub() {
  return (
    <HubPage
      eyebrow="Integrations"
      title={
        <>
          Native across your <span className="text-emerald-grad">entire stack.</span>
        </>
      }
      intro="Bi-directional, real-time integrations with your CRM, telephony, WhatsApp, ad platforms, portals and calendars — enterprise-grade security by default."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations" },
      ]}
      cards={integrations.map((i) => ({
        to: `/integrations/${i.slug}`,
        title: i.name,
        sub: i.short,
        meta: i.category,
      }))}
    />
  );
}
