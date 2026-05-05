import { expect, test } from '@playwright/test';

test('lets a first run choose the Empty template', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await expect(page.getByText('1 Space · 0 Dials')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
  await expect(page.getByText('No Dials yet')).toBeVisible();
});

test('lets a separate first run choose the Example template', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Choose Example Template' }).click();

  await expect(page.getByText('1 Space · 5 Dials')).toBeVisible();
  await expect(page.getByText('Figma', { exact: true })).toBeVisible();
  await expect(page.getByText('GitHub', { exact: true })).toBeVisible();
});
