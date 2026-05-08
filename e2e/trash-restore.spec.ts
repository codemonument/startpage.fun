import { expect, test } from '@playwright/test';

test('deletes a Dial to Trash, restores it, and returns it to the original Space', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('URL').fill('https://developer.mozilla.org/');
  await page.getByLabel('Title (optional)').fill('MDN');
  await page.getByRole('button', { name: 'Save Dial' }).click();
  await expect(page.getByText('1 Space · 1 Dial')).toBeVisible();

  await page.getByRole('button', { name: 'Delete MDN' }).click();
  await expect(page.getByText('1 Space · 0 Dials')).toBeVisible();

  await page.getByRole('button', { name: 'Trash', exact: true }).click();
  await expect(page.getByTestId('trash-panel')).toBeVisible();
  await expect(page.getByText('Original Space: Home')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Restore MDN' })).toBeVisible();

  await page.getByRole('button', { name: 'Restore MDN' }).click();
  await expect(page.getByText('Trash is empty.')).toBeVisible();

  await page.getByTestId('space-tabs').getByRole('button', { name: 'Home' }).click();
  await expect(page.getByText('MDN', { exact: true })).toBeVisible();
});
