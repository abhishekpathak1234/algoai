import { createFileRoute, notFound } from "@tanstack/react-router";
import { IntegrationPage } from "@/components/site/IntegrationPage";
import { integrationBySlug } from "@/data/integrations";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/integrations/$slug")({
  loader: ({ params }) => {
    const data = integrationBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Integration not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/integrations/${params.slug}`;
    return {
      ...buildMeta({ title: data.seoTitle, description: data.seoDescription, path }),
      scripts: [
        softwareLd(`${data.name} integration for Algo Realty`, data.seoDescription),
        faqLd(data.faqs),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
          { name: data.name, path },
        ]),
      ],
    };
  },
  component: IntegrationRoute,
});

function IntegrationRoute() {
  const { data } = Route.useLoaderData();
  return (
    <IntegrationPage
      data={data}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations" },
        { name: data.name, path: `/integrations/${data.slug}` },
      ]}
    />
  );
}
