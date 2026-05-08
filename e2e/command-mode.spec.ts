import { expect, test } from '@playwright/test';

test('runs a command-mode direct settings action and closes the Command Box on success', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByRole('button', { name: 'Command Box' }).click();
  const commandBox = page.getByTestId('command-box-panel');
  await commandBox.getByLabel('Search query').fill('> new tab');

  await expect(commandBox.getByText('Set Launch Preference to new tab')).toBeVisible();
  await commandBox.getByText('Set Launch Preference to new tab').click();

  await expect(page.getByTestId('command-box-panel')).toHaveCount(0);
  await expect(page.getByText('new-tab', { exact: true })).toBeVisible();
});
