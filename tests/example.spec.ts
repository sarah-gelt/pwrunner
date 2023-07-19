import { chromium, expect, test } from '@playwright/test';

test.describe("Documentation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/docs/intro");
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test.describe("Getting Started", () => {
    test('Load installation page', async ({ page }) => {
      await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();
    });

    test.afterAll(async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.goto("https://playwright.dev");
    });
  });
})

