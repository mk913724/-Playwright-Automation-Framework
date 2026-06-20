const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Star Tech Authentication', () => {
  test('loads login page and validates controls', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await expect(page).toHaveURL(/account\/login/);
    await loginPage.expectLoginFormVisible();
  });
});
