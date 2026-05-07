const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#input-username');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.getByRole('button', { name: /^login$/i });
  }

  async goto() {
    await this.page.goto('/account/login');
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.usernameInput).toBeVisible();
  }

  async assertLoginPageLoaded() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}

module.exports = { LoginPage };
