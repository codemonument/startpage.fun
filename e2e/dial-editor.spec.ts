import { expect, test } from '@playwright/test';

test('edits a Dial, restores a saved draft, and commits the final change', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('URL').fill('https://developer.mozilla.org/');
  await page.getByLabel('Title (optional)').fill('MDN');
  await page.getByRole('button', { name: 'Save Dial' }).click();

  await page.getByRole('button', { name: 'Edit MDN' }).click();
  await page.getByLabel('Edit title').fill('MDN Draft');
  await page.getByRole('button', { name: 'Close editor' }).click();

  await page.getByRole('button', { name: 'Edit MDN' }).click();
  await expect(page.getByRole('button', { name: 'Restore draft' })).toBeVisible();
  await page.getByRole('button', { name: 'Restore draft' }).click();
  await expect(page.getByLabel('Edit title')).toHaveValue('MDN Draft');

  await page.getByLabel('Edit title').fill('MDN Final');
  await page.getByRole('button', { name: 'Save Dial changes' }).click();

  await expect(page.getByText('MDN Final', { exact: true })).toBeVisible();
});
