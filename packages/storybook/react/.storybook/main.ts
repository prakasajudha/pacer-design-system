import { existsSync } from 'node:fs';
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

    // Monorepo DX: Storybook may run before the design-system package builds its CSS into dist.
    // - If `dist/styles.css` exists (CI/published usage), prefer it.
    // - Otherwise, fall back to `src/styles.css` (Tailwind directives compiled by Storybook's PostCSS).
    const distStylesPath = resolve(__dirname, '../../../design-system/react/dist/styles.css');
    const srcStylesPath = resolve(__dirname, '../../../design-system/react/src/styles.css');
    const stylesPath = existsSync(distStylesPath) ? distStylesPath : srcStylesPath;

    // Ensure Vite dev server can read files outside the Storybook package root in a monorepo.
    const repoRootPath = resolve(__dirname, '../../../../');

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@pacer-ui/react/styles.css': stylesPath,
        },
      },
      css: {
        postcss: resolve(__dirname, '../postcss.config.js'),
      },
      server: {
        fs: {
          allow: [repoRootPath],
        },
      },
    });
  },
};

export default config;
