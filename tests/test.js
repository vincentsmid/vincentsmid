import { expect, test } from '@playwright/test';

test('index page has taskbar', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.taskbar')).toBeVisible();
});

test('index page has background', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.background-container')).toBeVisible();
});
