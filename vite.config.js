import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

const dynamicRoutes = [
  "/",
  "/privacy-policy",
  "/terms-of-services",
  "/login",
  "/signup",
  "/forgot-password",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://trevo.vercel.app",
      dynamicRoutes,
      robots: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
  },
});