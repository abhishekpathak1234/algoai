import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Production is proxied at https://algobridge.cc/realty (dedicated Vercel
    // project + rewrite, same pattern as /auto and /partner) — every route,
    // <Link>, and redirect must resolve under this prefix.
    basepath: "/realty",
  });

  return router;
};
