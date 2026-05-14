import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

// When running locally, the app is served on `/`; when running in Webflow Cloud, the app will
// be served on the configured Webflow Cloud mount path.
//
// Webflow Cloud will re-write this configuration such that:
// - __WF_BASE_PATH__ is base path of the app (without a trailing slash; useful for configuring
//   the basePath in Hono)
// - __WF_BASE_URL__ is the base URL of the app (with a trailing slash; useful for constructing
//   URLs in client-side code)

export default defineConfig({
  base: "/",
  define: {
    __WF_BASE_PATH__: '"/"',
    __WF_BASE_URL__: '"/"',
  },
  plugins: [cloudflare()],
});
