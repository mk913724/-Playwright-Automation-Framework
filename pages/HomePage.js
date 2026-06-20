const { expect } = require('@playwright/test');
const { dismissPopupIfPresent, safeClick } = require('../utils/helpers');

class HomePage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.getByPlaceholder('Search');
    this.productCards = page.locator('.p-item');
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await dismissPopupIfPresent(this.page);
  }

  async search(keyword) {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openFirstProduct() {
    await expect(this.productCards.first()).toBeVisible();
    await safeClick(this.productCards.first().locator('a').first());
  }
}

module.exports = { HomePage };
