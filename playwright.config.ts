import { defineConfig, devices } from '@playwright/test';

const reactStaticDir = 'packages/storybook/react/storybook-static';
const vueStaticDir = 'packages/storybook/vue/storybook-static';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
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
        command: `pnpm exec serve "${reactStaticDir}" -l 6006`,
        url: 'http://localhost:6006',
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
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
        command: `pnpm exec serve "${vueStaticDir}" -l 6007`,
        url: 'http://localhost:6007',
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
      },
    },
  ],
});
