import { test } from '@playwright/test'

test("setup", async ({ page }) => {
  await page.goto("https://playwright.dev");
});