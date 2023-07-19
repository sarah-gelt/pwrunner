import { chromium, expect, test } from '@playwright/test';

test('Load docs', async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.afterAll(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://playwright.dev");
});

