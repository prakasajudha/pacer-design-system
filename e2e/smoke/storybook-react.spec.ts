import { test, expect } from '@playwright/test';

test.describe('Storybook React', () => {
  test.use({ baseURL: 'http://localhost:6006' });

  test('Button story loads and renders', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--playground');
    await expect(page.locator('body')).toBeVisible({ timeout: 15_000 });
    const button = page.getByRole('button', { name: /primary action/i });
    await expect(button).toBeVisible({ timeout: 10_000 });
  });

  test('Button can be clicked', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--playground');
    const button = page.getByRole('button', { name: /primary action/i });
    await expect(button).toBeVisible({ timeout: 10_000 });
    await button.click();
    await expect(button).toBeVisible();
  });

  test('Button Solid story renders', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--solid');
    const button = page.getByRole('button', { name: /solid button/i });
    await expect(button).toBeVisible({ timeout: 10_000 });
  });

  test('IconButton story loads', async ({ page }) => {
    await page.goto('/iframe.html?id=components-iconbutton--playground');
    await expect(page.locator('body')).toBeVisible({ timeout: 15_000 });
    const iconButton = page.getByRole('button', { name: /close/i }).first();
    await expect(iconButton).toBeVisible({ timeout: 10_000 });
  });
});
