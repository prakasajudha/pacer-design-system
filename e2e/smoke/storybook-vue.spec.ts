import { test, expect } from '@playwright/test';

test.describe('Storybook Vue', () => {
  test.use({ baseURL: 'http://127.0.0.1:6007' });

  test('Button story loads and renders', async ({ page }) => {
    await page.goto('/iframe?id=components-button--playground', { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
  });

  test('Button can be clicked', async ({ page }) => {
    await page.goto('/iframe?id=components-button--playground', { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
    await button.click();
    await expect(button).toBeVisible();
  });

  test('Button Solid story renders', async ({ page }) => {
    await page.goto('/iframe?id=components-button--solid', { waitUntil: 'networkidle' });
    const button = page.getByRole('button', { name: /solid button/i });
    await expect(button).toBeVisible({ timeout: 20_000 });
  });

  test('IconButton story loads', async ({ page }) => {
    await page.goto('/iframe?id=components-iconbutton--playground', { waitUntil: 'networkidle' });
    const iconButton = page.getByRole('button', { name: /close/i }).first();
    await expect(iconButton).toBeVisible({ timeout: 20_000 });
  });
});
