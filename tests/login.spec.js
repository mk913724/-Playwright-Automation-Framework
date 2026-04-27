const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../utils/testData');

test.describe('Star Tech Authentication', () => {
  test('loads login page and validates controls', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(page).toHaveURL(/account\/login/);
    await loginPage.assertLoginPageLoaded();
  });

  test('signup flow is prepared and skipped if live verification is required', async ({ page }) => {
    test.skip(true, 'Star Tech registration is external-live-data dependent. Framework support is included, but auto-submitting real signup is intentionally skipped.');

    const loginPage = new LoginPage(page);

    await loginPage.gotoRegister();
    await loginPage.assertRegisterPageLoaded();
    await loginPage.fillRegisterForm(users.signupUser);
  });

  test('attempts login when credentials are provided', async ({ page }) => {
    test.skip(
      users.validUser.username === 'your-email-or-phone@example.com' || users.validUser.password === 'your-password',
      'Set STARTECH_USERNAME and STARTECH_PASSWORD environment variables to run authenticated login.'
    );

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await expect(page).not.toHaveURL(/account\/login/);
  });
});
