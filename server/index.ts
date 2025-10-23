import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite"; // removed serveStatic (we'll handle it manually)

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// ✅ Handle raw body for webhooks etc.
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// ✅ Logging middleware for /api routes
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // ✅ Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // ✅ Setup frontend serving
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // 🟢 In production (Render), serve the built frontend
    const publicPath = path.join(__dirname, "public");
    app.use(express.static(publicPath));

    // 🟢 Catch-all route for SPA
    app.get("*", (_req, res) => {
      res.sendFile(path.join(publicPath, "index.html"));
    });
  }

  // ✅ Start server on Render's port
  const port = process.env.PORT || 10000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`✅ Server running at http://0.0.0.0:${port}`);
  });
})();
