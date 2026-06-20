const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('01. Login Page', () => {
  test('shows the login form', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await expect(page).toHaveURL(/account\/login/);
    await loginPage.expectLoginFormVisible();
  });
});
