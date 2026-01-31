import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';

const rootDir = path.resolve(__dirname);
const reactStaticDir = path.join(rootDir, 'packages/storybook/react/storybook-static');
const vueStaticDir = path.join(rootDir, 'packages/storybook/vue/storybook-static');
const serveBin = path.join(rootDir, 'node_modules/serve/build/main.js');

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  workers: 1,
  reporter: isCI
    ? [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['list'],
      ]
    : 'list',
  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'storybook-react',
      testMatch: /storybook-react\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://127.0.0.1:6006',
      },
      webServer: isCI
        ? undefined
        : {
            command: `node "${serveBin}" "${reactStaticDir}" -l 6006`,
            url: 'http://127.0.0.1:6006',
            reuseExistingServer: true,
            timeout: 90_000,
          },
    },
    {
      name: 'storybook-vue',
      testMatch: /storybook-vue\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://127.0.0.1:6007',
      },
      webServer: isCI
        ? undefined
        : {
            command: `node "${serveBin}" "${vueStaticDir}" -l 6007`,
            url: 'http://127.0.0.1:6007',
            reuseExistingServer: true,
            timeout: 90_000,
          },
    },
  ],
});
