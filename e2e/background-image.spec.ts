import { expect, test } from '@playwright/test';

test('adds a global background image, reloads, and keeps the persisted rendering active', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByTestId('background-input').setInputFiles('public/icon.svg');
  await page.getByRole('button', { name: 'Apply background' }).click();

  await expect(page.getByText('Custom background active')).toBeVisible();
  await expect(page.getByTestId('background-preview')).toBeVisible();

  await page.reload();

  await expect(page.getByText('Custom background active')).toBeVisible();
  await expect(page.getByTestId('background-preview')).toBeVisible();
});
