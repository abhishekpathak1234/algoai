import { createFileRoute } from "@tanstack/react-router";
import { PricingPage, pricingFaqs } from "@/components/site/PricingPage";
import { buildMeta, breadcrumbLd, faqLd, jsonLd } from "@/lib/seo";
import { tiers } from "@/data/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...buildMeta({
      title: "Pricing — Algo Realty",
      description: "Enterprise pricing for Algo Realty's AI Workforce. Annual, per-employee pricing with multi-year discounts and named executive support.",
      path: "/pricing",
      ogType: "product",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Algo Realty AI Workforce",
        description: "Enterprise AI Workforce for real estate.",
        offers: tiers.map((t) => ({
          "@type": "Offer",
          name: t.name,
          priceCurrency: "USD",
          price: "0",
          description: t.tagline,
          availability: "https://schema.org/InStock",
        })),
      }),
      faqLd(pricingFaqs),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]),
    ],
  }),
  component: PricingPage,
});
