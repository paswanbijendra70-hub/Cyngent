import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload size for base64 images
  app.use(express.json({ limit: '10mb' }));

  // Handle logo upload
  app.post('/api/upload-logo', (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: 'No image provided' });
      }

      // Extract base64 data
      const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9+-]+;base64,/, "");
      
      // Save it directly to the public folder so it's permanent
      const publicFilePath = path.join(process.cwd(), 'public', 'download.webp');
      fs.writeFileSync(publicFilePath, base64Data, 'base64');

      // Also try to copy to dist if it exists
      const distFilePath = path.join(process.cwd(), 'dist', 'download.webp');
      if (fs.existsSync(path.dirname(distFilePath))) {
        fs.writeFileSync(distFilePath, base64Data, 'base64');
      }

      res.json({ success: true, timestamp: Date.now() });
    } catch (error) {
      console.error('Error saving logo:', error);
      res.status(500).json({ error: 'Failed to save logo' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
