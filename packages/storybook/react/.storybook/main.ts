import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    // Resolve path relative to .storybook directory
    const stylesPath = resolve(__dirname, '..', '..', '..', 'design-system', 'react', 'dist', 'styles.css');

    return mergeConfig(config, {
      resolve: {
        alias: {
          ...(typeof config.resolve?.alias === 'object' && !Array.isArray(config.resolve.alias) ? config.resolve.alias : {}),
          '@pacer-ui/react/styles.css': stylesPath,
        },
      },
      css: {
        postcss: resolve(__dirname, '../postcss.config.js'),
      },
    });
  },
};

export default config;
