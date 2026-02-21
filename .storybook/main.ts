import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import svgr from "vite-plugin-svgr";
import { mergeConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
          components: resolve(__dirname, "../src/components/index.ts"),
          core: resolve(__dirname, "../src/core"),
          icons: resolve(__dirname, "../src/icons/index.ts"),
        },
      },
      // Add dependencies to pre-optimization
      plugins: [
        // Add any Vite plugins you need here
        svgr(),
      ],
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};
export default config;
