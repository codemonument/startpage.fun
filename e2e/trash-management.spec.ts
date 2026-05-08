import { expect, test } from '@playwright/test';

test('permanently deletes one trashed Dial and purges the remaining Trash with confirmation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Example Template' }).click();

  await page.getByRole('button', { name: 'Delete Figma' }).click();
  await page.getByRole('button', { name: 'Delete GitHub' }).click();
  await page.getByRole('button', { name: 'Trash', exact: true }).click();

  await page.getByRole('button', { name: 'Permanently delete Figma' }).click();
  await expect(page.getByRole('button', { name: 'Permanently delete Figma' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Restore GitHub' })).toBeVisible();

  await page.getByPlaceholder('Type PURGE to confirm').fill('PURGE');
  await page.getByRole('button', { name: 'Purge Trash' }).click();

  await expect(page.getByText('Trash is empty.')).toBeVisible();
});
