import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // Required for React support
    tailwindcss(), // Tailwind CSS v4.0 Vite plugin
  ],
});
