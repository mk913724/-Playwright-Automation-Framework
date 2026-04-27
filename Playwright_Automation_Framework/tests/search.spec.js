const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Search product', async ({ page }) => {

  const home = new HomePage(page);

  await home.goTo();
  await home.searchProduct('laptop');

  await page.waitForLoadState('networkidle');

  
  await expect(page.locator('.p-item').first()).toBeVisible();
});