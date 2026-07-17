// @ts-check
// @ts-ignore
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "http://pvdmesh.net",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Raleway",
      cssVariable: "--font-main",
    },
    {
      provider: fontProviders.google(),
      name: "Sour Gummy",
      cssVariable: "--font-accent",
    },
    {
      provider: fontProviders.google(),
      name: "Comfortaa",
      cssVariable: "--font-accent-2",
    },
  ],
});
