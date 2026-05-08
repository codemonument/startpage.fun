import { expect, test } from '@playwright/test';

test('loads the bootstrap shell, survives reload, and reports offline mode', async ({ page, context }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'startpage.fun' })).toBeVisible();
  await expect(page.getByText('Choose a starter template')).toBeVisible();

  await page.reload();

  await expect(page.getByRole('heading', { name: 'startpage.fun' })).toBeVisible();
  await expect(page.getByTestId('shell-stage-panel')).toContainText('Choose a starter template');

  await context.setOffline(true);

  await expect(page.getByText('Offline session')).toBeVisible();
  await expect(page.getByText('Choose a starter template')).toBeVisible();
});
