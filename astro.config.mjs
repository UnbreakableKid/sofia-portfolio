import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    astroI18next(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      noExternal: [
        "@radix-ui/react-tabs",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-accordion",
        "@radix-ui/react-progress",
      ],
    },
  },
});
