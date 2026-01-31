import { test, expect } from '@playwright/test';

test.describe('Storybook Vue', () => {
  test.use({ baseURL: 'http://127.0.0.1:6007' });

  const previewFrame = '#storybook-preview-iframe';
  const iframeTimeout = 20_000;

  /** Wait for the Storybook preview iframe to be visible before querying inside it. */
  const waitForPreview = async (
    p: { waitForSelector: (selector: string, options: { state: 'visible'; timeout: number }) => Promise<unknown> }
  ) => {
    await p.waitForSelector(previewFrame, { state: 'visible', timeout: 15_000 });
  };

  test('Button story loads and renders', async ({ page }) => {
    await page.goto('/?path=/story/components-button--playground', { waitUntil: 'networkidle' });
    await waitForPreview(page);
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: iframeTimeout });
  });

  test('Button can be clicked', async ({ page }) => {
    await page.goto('/?path=/story/components-button--playground', { waitUntil: 'networkidle' });
    await waitForPreview(page);
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: iframeTimeout });
    await button.click();
    await expect(button).toBeVisible();
  });

  test('Button Solid story renders', async ({ page }) => {
    await page.goto('/?path=/story/components-button--solid', { waitUntil: 'networkidle' });
    await waitForPreview(page);
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /solid button/i });
    await expect(button).toBeVisible({ timeout: iframeTimeout });
  });

  test('IconButton story loads', async ({ page }) => {
    await page.goto('/?path=/story/components-iconbutton--playground', { waitUntil: 'networkidle' });
    await waitForPreview(page);
    const preview = page.frameLocator(previewFrame);
    const iconButton = preview.getByRole('button', { name: /close/i }).first();
    await expect(iconButton).toBeVisible({ timeout: iframeTimeout });
  });
});
