import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';

const rootDir = path.resolve(__dirname);
const reactStaticDir = path.join(rootDir, 'packages/storybook/react/storybook-static');
const vueStaticDir = path.join(rootDir, 'packages/storybook/vue/storybook-static');
const serveBin = path.join(rootDir, 'node_modules/serve/build/main.js');

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: 'list',
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
        baseURL: 'http://localhost:6006',
      },
      webServer: {
        command: `node "${serveBin}" "${reactStaticDir}" -l 6006`,
        url: 'http://127.0.0.1:6006',
        reuseExistingServer: !process.env.CI,
        timeout: 90_000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
    },
    {
      name: 'storybook-vue',
      testMatch: /storybook-vue\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:6007',
      },
      webServer: {
        command: `node "${serveBin}" "${vueStaticDir}" -l 6007`,
        url: 'http://127.0.0.1:6007',
        reuseExistingServer: !process.env.CI,
        timeout: 90_000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
    },
  ],
});
