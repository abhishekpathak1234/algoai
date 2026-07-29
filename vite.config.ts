// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deployment target is Vercel (dedicated project), not the Cloudflare
  // Worker the wrapper defaults to — without this, `npm run build` emits a
  // Cloudflare Worker bundle that Vercel's build step doesn't know how to run.
  nitro: {
    preset: "vercel",
  },
  // Production is proxied at https://algobridge.cc/realty (same pattern as
  // /partner), so every asset URL must be emitted with that prefix — matches
  // the router's basepath in src/router.tsx.
  vite: {
    base: "/realty/",
  },
});
