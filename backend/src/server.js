import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;

// 1. SECURITY HEADERS
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
    "connect-src 'self' http://localhost:3000 ws://localhost:3000; " +
    "style-src 'self' 'unsafe-inline'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    // Add res.cloudinary.com here 👇
    "img-src 'self' data: blob: https://res.cloudinary.com;" 
  );
  next();
});

// 2. MIDDLEWARES
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: ENV.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// 3. API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 4. FRONTEND SERVING
const frontendPath = path.join(__dirname, "../frontend/dist");

// Serve static assets (js, css, images)
app.use(express.static(frontendPath));

// Catch-all middleware for SPA Routing
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
      if (err) {
        // If index.html is missing (e.g. no build yet), move to next middleware
        next();
      }
    });
  } else {
    next();
  }
});



// 5. START SERVER
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  connectDB();
});