import { createFileRoute, notFound } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { solutionBySlug } from "@/data/solutions";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const data = solutionBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Solution not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/solutions/${params.slug}`;
    return {
      ...buildMeta({ title: data.seoTitle, description: data.seoDescription, path }),
      scripts: [
        softwareLd(data.name, data.seoDescription),
        faqLd(data.faqs),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: data.name, path },
        ]),
      ],
    };
  },
  component: SolutionRoute,
});

function SolutionRoute() {
  const { data } = Route.useLoaderData();
  return (
    <SolutionPage
      data={data}
      kind="Solution"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
        { name: data.name, path: `/solutions/${data.slug}` },
      ]}
    />
  );
}
