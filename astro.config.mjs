// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://FernadoOXD.github.io",
  base: "/Blog-Dev-Web",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
