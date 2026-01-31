import { test, expect } from '@playwright/test';

/**
 * Smoke tests load the Storybook *preview* URL directly (iframe.html?id=...)
 * so we do not depend on the manager page or #storybook-preview-iframe.
 * Requires serve.json with cleanUrls: false in storybook-static so the query string is preserved.
 */
const baseURL = 'http://127.0.0.1:6007';
const storyTimeout = 25_000;

const previewUrl = (storyId: string) =>
  `${baseURL}/iframe.html?viewMode=story&id=${encodeURIComponent(storyId)}`;

test.describe('Storybook Vue', () => {
  test.use({ baseURL });

  test('Button story loads and renders', async ({ page }) => {
    await page.goto(previewUrl('components-button--playground'), { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: storyTimeout });
  });

  test('Button can be clicked', async ({ page }) => {
    await page.goto(previewUrl('components-button--playground'), { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: storyTimeout });
    await button.click();
    await expect(button).toBeVisible();
  });

  test('Button Solid story renders', async ({ page }) => {
    await page.goto(previewUrl('components-button--solid'), { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /solid button/i });
    await expect(button).toBeVisible({ timeout: storyTimeout });
  });

  test('IconButton story loads', async ({ page }) => {
    await page.goto(previewUrl('components-iconbutton--playground'), { waitUntil: 'networkidle' });
    const iconButton = page.getByRole('button', { name: /close/i }).first();
    await expect(iconButton).toBeVisible({ timeout: storyTimeout });
  });
});
