import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { solutions } from "@/data/solutions";
import { employees } from "@/data/employees";
import { integrations } from "@/data/integrations";
import { resources } from "@/data/resources";
import { blogPosts, blogCategories } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/solutions", changefreq: "weekly", priority: "0.9" },
    { path: "/ai-employees", changefreq: "weekly", priority: "0.9" },
    { path: "/industries", changefreq: "weekly", priority: "0.9" },
    { path: "/integrations", changefreq: "weekly", priority: "0.8" },
    { path: "/resources", changefreq: "weekly", priority: "0.8" },
    { path: "/blog", changefreq: "daily", priority: "0.8" },
    { path: "/case-studies", changefreq: "weekly", priority: "0.8" },
    { path: "/pricing", changefreq: "monthly", priority: "0.9" },
    { path: "/security", changefreq: "monthly", priority: "0.6" },
    { path: "/about", changefreq: "monthly", priority: "0.6" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
    { path: "/book-demo", changefreq: "monthly", priority: "0.9" },
    { path: "/legal/privacy", changefreq: "yearly", priority: "0.3" },
    { path: "/legal/terms", changefreq: "yearly", priority: "0.3" },
  ];

  for (const s of solutions)
    entries.push({ path: `/solutions/${s.slug}`, changefreq: "monthly", priority: "0.8" });
  for (const e of employees)
    entries.push({ path: `/ai-employees/${e.slug}`, changefreq: "monthly", priority: "0.8" });
  for (const i of integrations)
    entries.push({ path: `/integrations/${i.slug}`, changefreq: "monthly", priority: "0.7" });
  for (const r of resources)
    entries.push({ path: `/resources/${r.slug}`, changefreq: "monthly", priority: "0.7" });
  for (const c of caseStudies)
    entries.push({ path: `/case-studies/${c.slug}`, changefreq: "monthly", priority: "0.7" });
  for (const b of blogPosts)
    entries.push({ path: `/blog/${b.slug}`, changefreq: "monthly", priority: "0.6" });
  for (const c of blogCategories)
    entries.push({ path: `/blog/category/${c.slug}`, changefreq: "weekly", priority: "0.5" });

  const industryPaths = [
    "builders",
    "developers",
    "agencies",
    "brokerages",
    "property-management",
    "commercial",
    "luxury",
    "channel-partners",
  ];
  for (const p of industryPaths)
    entries.push({ path: `/industries/${p}`, changefreq: "monthly", priority: "0.8" });

  return entries;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = buildEntries().map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
