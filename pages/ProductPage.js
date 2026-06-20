const { expect } = require('@playwright/test');
const { safeClick } = require('../utils/helpers');

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
  }

  async expectProductTitle(productName) {
    await expect(this.productTitle).toContainText(productName, { ignoreCase: true });
  }

  async addToCart() {
    await expect(this.buyNowButton).toBeVisible();

    await Promise.all([
      this.page.waitForResponse(response =>
        response.url().includes('/checkout/cart/add') && response.status() === 200
      ),
      safeClick(this.buyNowButton)
    ]);
  }

  async expectCartCountOne() {
    await expect(this.cartCounter).toHaveText('1', { timeout: 15000 });
  }

  async expectProductInCart(productName) {
    await expect(this.cartDrawer).toContainText(productName, { ignoreCase: true });
  }

}

module.exports = { ProductPage };
