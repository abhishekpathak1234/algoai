import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    ...buildMeta({
      title: "Terms of Service — Algo Realty",
      description: "The terms governing use of Algo Realty's services.",
      path: "/legal/terms",
    }),
    scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Terms", path: "/legal/terms" }])],
  }),
  component: Terms,
});

function Terms() {
  return (
    <ArticlePage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern access to and use of Algo Realty's platform, websites and services."
      crumbs={[{ name: "Home", path: "/" }, { name: "Terms", path: "/legal/terms" }]}
      sections={[
        { title: "Acceptance of terms", body: "By using Algo Realty you agree to these terms and any applicable order form or master agreement." },
        { title: "Subscription", body: "Access is granted for the term and scope in your order form. Payments are due per the agreed schedule." },
        { title: "Acceptable use", body: "You will not use the service to engage in illegal activity, violate third-party rights or disrupt the platform." },
        { title: "Intellectual property", body: "Algo Realty retains all rights in the platform. You retain rights in customer data." },
        { title: "Limitation of liability", body: "To the maximum extent permitted by law, liability is limited to fees paid in the prior 12 months." },
        { title: "Governing law", body: "These terms are governed by the laws stated in your order form." },
      ]}
    />
  );
}
