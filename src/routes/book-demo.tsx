import { createFileRoute } from "@tanstack/react-router";
import { BookDemoFlow } from "@/components/site/BookDemoFlow";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    ...buildMeta({
      title: "Book an Enterprise Demo — Algo Realty",
      description: "Book a tailored enterprise demo of Algo Realty's AI Workforce for real estate. Under 60 seconds.",
      path: "/book-demo",
    }),
    scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Book Demo", path: "/book-demo" }])],
  }),
  component: BookDemoFlow,
});
