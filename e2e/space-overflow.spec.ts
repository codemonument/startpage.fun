import { expect, test } from '@playwright/test';

test('switches to an overflowed Space and runs a Space-bar action from overflow UI', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  for (const spaceName of ['Work', 'Ideas', 'Play']) {
    await page.getByLabel('New Space name').fill(spaceName);
    await page.getByRole('button', { name: 'Create Space' }).click();
    await expect(page.getByRole('heading', { name: spaceName })).toBeVisible();
  }

  await page.getByLabel('Overflow mode').selectOption('menu');
  await page.getByLabel('Row cap').fill('2');
  await page.getByRole('button', { name: 'Save overflow' }).click();

  await page.getByRole('button', { name: 'More Spaces (1)' }).click();
  const overflowPanel = page.getByTestId('space-overflow-panel');
  await expect(overflowPanel).toBeVisible();
  await expect(overflowPanel.getByText('Play', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Open Play' }).click();
  await expect(page.getByRole('heading', { name: 'Play' })).toBeVisible();

  await page.getByRole('button', { name: 'More Spaces (1)' }).click();
  await page.getByRole('button', { name: 'Set Play as default' }).click();
  await page.reload();

  await expect(page.getByRole('heading', { name: 'Play' })).toBeVisible();
});
