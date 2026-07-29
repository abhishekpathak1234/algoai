import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { blogPosts, blogCategories } from "@/data/blog";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    ...buildMeta({
      title: "Blog — Algo Realty",
      description: "Insights on AI, sales, marketing, CRM, automation and revenue intelligence for enterprise real estate.",
      path: "/blog",
    }),
  }),
  component: BlogHub,
});

function BlogHub() {
  return (
    <HubPage
      eyebrow="Knowledge Center"
      title={<>Playbooks for <span className="text-emerald-grad">AI-first</span> real estate.</>}
      intro="Deep, practical writing from the Algo Realty team — for CEOs, MDs, sales directors, marketing leaders and CRM heads."
      crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      categories={blogCategories.map((c) => c.name)}
      cards={blogPosts.slice(0, 60).map((p) => ({
        to: `/blog/${p.slug}`,
        title: p.title,
        sub: p.excerpt,
        meta: p.category,
        tag: p.readTime,
      }))}
    />
  );
}
