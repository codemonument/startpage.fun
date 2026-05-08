import { expect, test } from '@playwright/test';

test('reorders Dials within a Space and keeps the saved order after reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Example Template' }).click();

  const dialGrid = page.getByTestId('dial-grid');
  await expect(dialGrid.getByTestId('dial-card').nth(0)).toContainText('Figma');
  await page.getByRole('button', { name: 'Move Figma later' }).click();

  await expect(dialGrid.getByTestId('dial-card').nth(0)).toContainText('GitHub');
  await expect(dialGrid.getByTestId('dial-card').nth(1)).toContainText('Figma');

  await page.reload();

  await expect(dialGrid.getByTestId('dial-card').nth(0)).toContainText('GitHub');
  await expect(dialGrid.getByTestId('dial-card').nth(1)).toContainText('Figma');
});
