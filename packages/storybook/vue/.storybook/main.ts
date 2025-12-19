import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    // Resolve path relative to .storybook directory
    const stylesPath = resolve(__dirname, '..', '..', '..', 'design-system', 'vue', 'dist', 'styles.css');

    return mergeConfig(config, {
      resolve: {
        alias: {
          ...(typeof config.resolve?.alias === 'object' && !Array.isArray(config.resolve.alias) ? config.resolve.alias : {}),
          '@pacer-ui/vue/styles.css': stylesPath,
        },
      },
      css: {
        postcss: resolve(__dirname, '../postcss.config.js'),
      },
    });
  },
};

export default config;
