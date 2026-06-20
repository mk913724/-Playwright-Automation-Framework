const { expect } = require('@playwright/test');
const { dismissPopupIfPresent, safeClick } = require('../utils/helpers');

class ProductPage {
  constructor(page) {
    this.page = page;

    this.productTitle = page.locator('h1.product-name, h1').first();
    this.buyNowButton = page.locator('#button-cart');
    this.cartCounter = page.locator('#cart .counter');
    this.cartDrawer = page.locator('#m-cart');
  }

  async open(productUrl) {
    await this.page.goto(productUrl, { waitUntil: 'domcontentloaded' });
    await expect(this.productTitle).toBeVisible();
    await dismissPopupIfPresent(this.page);
  }

  async expectProductTitle(productName) {
    await expect(this.productTitle).toContainText(productName, { ignoreCase: true });
  }

  async getProductName() {
    return (await this.productTitle.textContent()).trim();
  }

  async addToCart() {
    await expect(this.buyNowButton).toBeVisible();

    for (let attempt = 1; attempt <= 3; attempt++) {
      await safeClick(this.buyNowButton);
      await this.page.waitForTimeout(1500);

      if (await this.cartCount() === '1') {
        return;
      }
    }

    await this.expectCartCountOne();
  }

  async cartCount() {
    return (await this.cartCounter.textContent()).trim();
  }

  async expectCartCountOne(timeout = 15000) {
    await expect(this.cartCounter).toHaveText('1', { timeout });
  }

  async expectProductInCart(productName) {
    await expect(this.cartDrawer).toContainText(productName, { ignoreCase: true });
  }

}

module.exports = { ProductPage };
