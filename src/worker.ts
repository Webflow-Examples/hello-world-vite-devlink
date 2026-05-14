import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>().basePath(__WF_BASE_PATH__);

app.get("/api/hello", (ctx) => {
  return ctx.json({
    message: "Hello world from Webflow Cloud!",
    timestamp: new Date().toISOString(),
  });
});

app.all("*", async (ctx) => {
  try {
    if (ctx.env.ASSETS) {
      const url = new URL(ctx.req.url);
      url.pathname = url.pathname.slice(__WF_BASE_PATH__.length) || "/";
      return await ctx.env.ASSETS.fetch(url.toString());
    }
  } catch (e) {
    // fallthrough to not found
  }

  return ctx.notFound();
});

export default app;
