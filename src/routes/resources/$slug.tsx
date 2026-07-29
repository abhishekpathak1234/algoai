import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { ROICalculator } from "@/components/site/ROICalculator";
import { resourceBySlug, resources } from "@/data/resources";
import { buildMeta, breadcrumbLd, articleLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const data = resourceBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Resource not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/resources/${params.slug}`;
    return {
      ...buildMeta({
        title: `${data.title} — Algo Realty`,
        description: data.short,
        path,
        ogType: "article",
      }),
      scripts: [
        articleLd({ title: data.title, description: data.short, path, category: data.category }),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: data.title, path },
        ]),
      ],
    };
  },
  component: ResourceRoute,
});

function ResourceRoute() {
  const { data } = Route.useLoaderData();
  const related = resources
    .filter((r) => r.slug !== data.slug)
    .slice(0, 3)
    .map((r) => ({ to: `/resources/${r.slug}`, title: r.title, sub: r.short }));

  return (
    <ArticlePage
      eyebrow="Resource"
      title={data.title}
      intro={data.short}
      readTime={data.readTime}
      category={data.category}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: data.title, path: `/resources/${data.slug}` },
      ]}
      sections={data.kind === "calculator" ? undefined : data.sections}
      related={related}
    >
      {data.kind === "calculator" && (
        <div className="mt-12">
          <ROICalculator />
        </div>
      )}
      {data.kind === "assessment" && (
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-[14px] text-muted-foreground">
          The AI Readiness Assessment is delivered as a private, guided session with your executive team. Book a demo to run it.
        </div>
      )}
    </ArticlePage>
  );
}
