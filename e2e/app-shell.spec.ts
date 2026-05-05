import { expect, test } from '@playwright/test';

test('loads the bootstrap shell, survives reload, and reopens offline', async ({ page, context }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'startpage.fun' })).toBeVisible();
  await expect(page.getByText('Choose a starter template')).toBeVisible();
  await expect(page.getByText('Offline ready')).toBeVisible({ timeout: 30000 });

  await page.reload();

  await expect(page.getByRole('heading', { name: 'startpage.fun' })).toBeVisible();
  await expect(page.getByTestId('shell-stage-panel')).toContainText('Choose a starter template');

  await context.setOffline(true);
  await page.reload();

  await expect(page.getByRole('heading', { name: 'startpage.fun' })).toBeVisible();
  await expect(page.getByText('Offline session')).toBeVisible();
  await expect(page.getByText('Choose a starter template')).toBeVisible();
});
