import { createFileRoute, notFound } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { employeeBySlug } from "@/data/employees";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/ai-employees/$slug")({
  loader: ({ params }) => {
    const data = employeeBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "AI Employee not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/ai-employees/${params.slug}`;
    return {
      ...buildMeta({ title: data.seoTitle, description: data.seoDescription, path }),
      scripts: [
        softwareLd(data.name, data.seoDescription),
        faqLd(data.faqs),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "AI Employees", path: "/ai-employees" },
          { name: data.name, path },
        ]),
      ],
    };
  },
  component: EmployeeRoute,
});

function EmployeeRoute() {
  const { data } = Route.useLoaderData();
  return (
    <SolutionPage
      data={data}
      kind="AI Employee"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "AI Employees", path: "/ai-employees" },
        { name: data.name, path: `/ai-employees/${data.slug}` },
      ]}
    />
  );
}
