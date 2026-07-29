import { createFileRoute, notFound } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { blogCategoryBySlug, blogPostsByCategory } from "@/data/blog";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/blog/category/$slug")({
  loader: ({ params }) => {
    const cat = blogCategoryBySlug(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const { cat } = loaderData;
    const path = `/blog/category/${params.slug}`;
    return {
      ...buildMeta({
        title: `${cat.name} — Algo Realty Blog`,
        description: cat.description,
        path,
      }),
      scripts: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: cat.name, path },
        ]),
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const posts = blogPostsByCategory(cat.slug);
  return (
    <HubPage
      eyebrow={`Category · ${cat.name}`}
      title={
        <>
          {cat.name} <span className="text-emerald-grad">insights.</span>
        </>
      }
      intro={cat.description}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: cat.name, path: `/blog/category/${cat.slug}` },
      ]}
      cards={posts.map((p) => ({
        to: `/blog/${p.slug}`,
        title: p.title,
        sub: p.excerpt,
        meta: cat.name,
        tag: p.readTime,
      }))}
    />
  );
}
