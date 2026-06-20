import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set high limits for receiving base64 image data
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API endpoint to save the uploaded image to the workspace file system
  app.post("/api/save-portrait", (req, res) => {
    try {
      const { image } = req.body;
      if (!image) {
        return res.status(400).json({ error: "Missing image payload" });
      }

      // Detect and extract base64 components
      const match = image.match(/^data:image\/([a-zA-Z+]+);base64,(.+)$/);
      if (!match) {
        return res.status(400).json({ error: "Invalid image format. Must be base64 data URL." });
      }

      const mimeType = match[1];
      const base64Data = match[2];
      const buffer = Buffer.from(base64Data, "base64");

      // Verify the output exists and write back to workspace file under src/components/ksu_portrait_real.jpg
      const targetPath = path.join(process.cwd(), "src", "components", "ksu_portrait_real.jpg");
      fs.writeFileSync(targetPath, buffer);

      console.log(`[API] Successfully saved uploaded portrait to ${targetPath}. Mime: ${mimeType}, Size: ${buffer.length} bytes`);
      return res.json({ success: true, mimeType, size: buffer.length });
    } catch (err: any) {
      console.error("[API ERROR] Failed to save portrait:", err);
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Serve Vite or static files depending on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Express + Vite server booted on port ${PORT}`);
  });
}

startServer();
