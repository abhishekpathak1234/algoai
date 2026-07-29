import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { blogPostBySlug, blogPosts, blogCategoryBySlug } from "@/data/blog";
import { buildMeta, breadcrumbLd, articleLd } from "@/lib/seo";

const templatedSections = (title: string, category: string) => [
  {
    title: "Why this matters now",
    body: `Enterprise real estate is being re-shaped by AI Workforces. The teams that adapt first are already recovering lost pipeline, reducing payroll pressure and scaling without hiring. This piece unpacks the ${category.toLowerCase()} implications for CEOs, sales directors and revenue leaders.`,
  },
  {
    title: "The operating model",
    body: `The best-in-class teams treat AI as an employee, not a tool. An AI Employee owns an outcome — qualifying every lead, booking every meeting, updating every CRM record — inside a department with a defined scope and reporting line. That framing changes everything about how ${title.toLowerCase()} is executed.`,
  },
  {
    title: "The playbook",
    body: `Start where the leverage is highest. Sequence the AI Workforce by revenue impact — response time, conversion, payroll — not by feature. Instrument every step with the same rigor you would apply to a new sales hire. Report weekly.`,
  },
  {
    title: "Measuring what matters",
    body: `Track response time, site-visit show-up, booking conversion, payroll reduction and recovered pipeline. These are the metrics that move the P&L. Vanity metrics (call counts, message volumes) belong in operational dashboards, not board reports.`,
  },
  {
    title: "Common pitfalls",
    body: `CRM data hygiene, playbook drift, over-automation and weak change management. Each has a proven mitigation — and each is worth solving before scale.`,
  },
  {
    title: "What good looks like",
    body: `A single executive command center. Response times under 5 seconds. Site-visit show-up above 70%. Multi-lingual coverage across every channel. Pipeline you can trust to the rupee. And a sales team focused on closing.`,
  },
];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const data = blogPostBySlug(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Post not found" }, { name: "robots", content: "noindex" }] };
    const { data } = loaderData;
    const path = `/blog/${params.slug}`;
    return {
      ...buildMeta({
        title: `${data.title} — Algo Realty`,
        description: data.excerpt,
        path,
        ogType: "article",
      }),
      scripts: [
        articleLd({ title: data.title, description: data.excerpt, path, category: data.category, datePublished: data.published }),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: data.title, path },
        ]),
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { data } = Route.useLoaderData();
  const cat = blogCategoryBySlug(data.category);
  const related = blogPosts
    .filter((p) => p.category === data.category && p.slug !== data.slug)
    .slice(0, 3)
    .map((p) => ({ to: `/blog/${p.slug}`, title: p.title, sub: p.excerpt }));

  return (
    <ArticlePage
      eyebrow="Article"
      title={data.title}
      intro={data.excerpt}
      readTime={data.readTime}
      category={cat?.name ?? data.category}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: data.title, path: `/blog/${data.slug}` },
      ]}
      sections={templatedSections(data.title, cat?.name ?? data.category)}
      related={related}
    />
  );
}
