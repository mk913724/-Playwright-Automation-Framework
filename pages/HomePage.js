const { expect } = require('@playwright/test');
const { dismissPopupIfPresent, safeClick } = require('../utils/helpers');

class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
    this.accountLink = page.getByRole('link', { name: /account/i }).or(page.getByText('Account'));
    this.loginLink = page.getByRole('link', { name: /^login$/i });
    this.registerLink = page.getByRole('link', { name: /^register$/i });
    this.productCards = page.locator('.p-item');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
    await dismissPopupIfPresent(this.page);
    await expect(this.searchInput).toBeVisible();
  }

  async openLogin() {
    await this.goto();
    if (await this.loginLink.isVisible().catch(() => false)) {
      await safeClick(this.loginLink);
    } else {
      await safeClick(this.accountLink);
    }
  }

  async openRegister() {
    await this.goto();
    if (await this.registerLink.isVisible().catch(() => false)) {
      await safeClick(this.registerLink);
    } else {
      await this.page.goto('/account/register');
    }
  }

  async searchProduct(keyword) {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openFirstProductFromHome() {
    await expect(this.productCards.first()).toBeVisible();
    await safeClick(this.productCards.first().locator('a').first());
  }
}

module.exports = { HomePage };
