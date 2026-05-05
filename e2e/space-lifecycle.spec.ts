import { expect, test } from '@playwright/test';

test('creates, renames, defaults, and reopens the expected Space', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('New Space name').fill('Work');
  await page.getByRole('button', { name: 'Create Space' }).click();

  await expect(page.getByRole('heading', { name: 'Work' })).toBeVisible();
  await expect(page.getByTestId('space-tabs').getByRole('button', { name: 'Work' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );

  await page.getByLabel('Rename active Space').fill('Projects');
  await page.getByRole('button', { name: 'Rename Space' }).click();

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await page.getByRole('button', { name: 'Set active Space as default' }).click();

  await page.getByTestId('space-tabs').getByRole('button', { name: 'Home' }).click();
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();

  await page.reload();

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.getByTestId('space-tabs').getByRole('button', { name: /Projects/ })).toHaveAttribute(
    'aria-pressed',
    'true'
  );
});
