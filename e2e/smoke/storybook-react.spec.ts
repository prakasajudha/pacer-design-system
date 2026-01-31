import { test, expect } from '@playwright/test';

test.describe('Storybook React', () => {
  test.use({ baseURL: 'http://127.0.0.1:6006' });

  const previewFrame = '#storybook-preview-iframe';

  test('Button story loads and renders', async ({ page }) => {
    await page.goto('/?path=/story/components-button--playground', { waitUntil: 'networkidle' });
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /primary action/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
  });

  test('Button can be clicked', async ({ page }) => {
    await page.goto('/?path=/story/components-button--playground', { waitUntil: 'networkidle' });
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /primary action/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
    await button.click();
    await expect(button).toBeVisible();
  });

  test('Button Solid story renders', async ({ page }) => {
    await page.goto('/?path=/story/components-button--solid', { waitUntil: 'networkidle' });
    const preview = page.frameLocator(previewFrame);
    const button = preview.getByRole('button', { name: /solid button/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
  });

  test('IconButton story loads', async ({ page }) => {
    await page.goto('/?path=/story/components-iconbutton--playground', { waitUntil: 'networkidle' });
    const preview = page.frameLocator(previewFrame);
    const iconButton = preview.getByRole('button', { name: /close/i }).first();
    await expect(iconButton).toBeVisible({ timeout: 20_000 });
  });
});
