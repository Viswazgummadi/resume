// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rs01/", // <-- IMPORTANT: Add this line (e.g., "/my-resume-site/")
});
