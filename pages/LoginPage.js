const { expect } = require('@playwright/test');
const { safeClick } = require('../utils/helpers');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#input-username');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.getByRole('button', { name: /^login$/i });
    this.registerLink = page.getByRole('link', { name: /register/i });

    this.registerFirstName = page.locator('#input-firstname');
    this.registerLastName = page.locator('#input-lastname');
    this.registerEmail = page.locator('#input-email');
    this.registerPhone = page.locator('#input-telephone');
    this.agreeCheckbox = page.locator('#agree');
    this.registerForm = page.locator('form');
  }

  async goto() {
    await this.page.goto('/account/login');
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await safeClick(this.loginButton);
  }

  async assertLoginPageLoaded() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async gotoRegister() {
    await this.page.goto('/account/register');
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.registerFirstName).toBeVisible();
  }

  async fillRegisterForm(user) {
    await this.registerFirstName.fill(user.firstName);
    await this.registerLastName.fill(user.lastName);
    await this.registerEmail.fill(user.email);
    await this.registerPhone.fill(user.phone);
    await this.agreeCheckbox.check();
  }

  async assertRegisterPageLoaded() {
    await expect(this.registerFirstName).toBeVisible();
    await expect(this.registerEmail).toBeVisible();
  }
}

module.exports = { LoginPage };
