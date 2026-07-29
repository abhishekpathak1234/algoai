import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/site/HubPage";
import { employees } from "@/data/employees";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/ai-employees")({
  head: () => ({
    ...buildMeta({
      title: "AI Employees for Real Estate — Algo Realty",
      description:
        "Hire AI Employees across sales, marketing, CRM, finance, operations, support and leadership. Deploy your AI Workforce in weeks.",
      path: "/ai-employees",
    }),
  }),
  component: EmployeesHub,
});

function EmployeesHub() {
  return (
    <HubPage
      eyebrow="AI Employees Marketplace"
      title={
        <>
          Hire your <span className="text-emerald-grad">AI Workforce.</span>
        </>
      }
      intro="Every AI Employee is specialised, deployable in weeks and orchestrated with your existing team, CRM and channels."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "AI Employees", path: "/ai-employees" },
      ]}
      cards={employees.map((e) => ({
        to: `/ai-employees/${e.slug}`,
        title: e.name,
        sub: e.tagline,
        meta: e.department,
        icon: <e.icon className="h-5 w-5" />,
      }))}
    />
  );
}
