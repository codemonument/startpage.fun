import { expect, test } from '@playwright/test';

test('shows a visible Dial icon and keeps a custom icon after switching away and back', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Choose Empty Template' }).click();

  await page.getByLabel('URL').fill('https://developer.mozilla.org/');
  await page.getByLabel('Title (optional)').fill('MDN');
  await page.getByRole('button', { name: 'Save Dial' }).click();

  await expect(page.getByTestId('dial-icon-dial-1')).toBeVisible();

  await page.getByRole('button', { name: 'Edit MDN' }).click();
  await page.getByLabel('Custom icon file').setInputFiles('public/icon.svg');
  await expect(page.getByTestId('dial-editor-icon-preview').locator('img')).toHaveAttribute('src', /data:image\//);
  await page.getByRole('button', { name: 'Save Dial changes' }).click();

  const customIcon = page.getByTestId('dial-icon-dial-1').locator('img');
  await expect(customIcon).toHaveAttribute('src', /data:image\//);

  await page.getByLabel('New Space name').fill('Work');
  await page.getByRole('button', { name: 'Create Space' }).click();
  await page.getByTestId('space-tabs').getByRole('button', { name: 'Home' }).click();

  await expect(page.getByTestId('dial-icon-dial-1').locator('img')).toHaveAttribute('src', /data:image\//);
});
