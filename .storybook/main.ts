
import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {}
  },
  

staticDirs: ["../public"],

  async viteFinal(config, { configType }) {
    const projectRoot = path.resolve(__dirname, '../');
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': projectRoot,
        },
      },
    };
  },
};

export default config;