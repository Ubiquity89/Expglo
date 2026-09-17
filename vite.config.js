import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        businesses: resolve(__dirname, "businesses.html"),
        events: resolve(__dirname, "events.html"),
        news: resolve(__dirname, "news.html"),
        careers: resolve(__dirname, "careers.html"),
        contact: resolve(__dirname, "contact.html"),

        // Legal pages
        disclaimer: resolve(__dirname, "disclaimer.html"),
        privacy: resolve(__dirname, "privacy.html"),
        refund: resolve(__dirname, "refund.html"),
        terms: resolve(__dirname, "terms.html"),

        // Fund page
        fund: resolve(__dirname, "fund.html"),
      },
    },
  },
});
