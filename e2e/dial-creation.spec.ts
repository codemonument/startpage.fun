import { expect, test } from '@playwright/test';

test('creates a Dial in the active Space and launches it with the default current-tab behavior', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('URL').fill('http://127.0.0.1:4173/launch-target.html');
  await page.getByLabel('Title (optional)').fill('Local launch target');
  await page.getByRole('button', { name: 'Save Dial' }).click();

  await expect(page.getByText('1 Space · 1 Dial')).toBeVisible();
  await expect(page.getByRole('link', { name: /Local launch target/ })).toBeVisible();

  await page.getByRole('link', { name: /Local launch target/ }).click();

  await expect(page.getByRole('heading', { name: 'Launch target reached' })).toBeVisible();
});
