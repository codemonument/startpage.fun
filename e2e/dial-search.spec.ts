import { expect, test } from '@playwright/test';

test('searches Dials across multiple Spaces and launches the selected result', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('URL').fill('http://127.0.0.1:4173/launch-target.html?from=home');
  await page.getByLabel('Title (optional)').fill('Home target');
  await page.getByRole('button', { name: 'Save Dial' }).click();

  await page.getByLabel('New Space name').fill('Work');
  await page.getByRole('button', { name: 'Create Space' }).click();

  await page.getByLabel('URL').fill('http://127.0.0.1:4173/launch-target.html?from=work');
  await page.getByLabel('Title (optional)').fill('Work target');
  await page.getByRole('button', { name: 'Save Dial' }).click();

  await page.getByRole('button', { name: 'Command Box' }).click();
  const commandBox = page.getByTestId('command-box-panel');
  await commandBox.getByLabel('Search query').fill('work');

  await expect(commandBox.getByText('Work target', { exact: true })).toBeVisible();
  await expect(commandBox.getByText('Work', { exact: true })).toBeVisible();

  await commandBox.getByText('Work target', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Launch target reached' })).toBeVisible();
});
