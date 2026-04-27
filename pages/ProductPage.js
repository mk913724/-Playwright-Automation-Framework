const { expect } = require('@playwright/test');
const { safeClick } = require('../utils/helpers');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('h1.product-name, h1').first();
    this.buyNowButton = page.locator('#button-cart');
    this.cartToggle = page.locator('#cart');
    this.cartDrawer = page.locator('#m-cart');
    this.checkoutLink = page.getByRole('link', { name: /checkout/i }).first();
    this.viewCartLink = page.getByRole('link', { name: /view cart/i }).first();
  }

  async gotoProduct(pathOrUrl) {
    if (pathOrUrl.startsWith('http')) {
      await this.page.goto(pathOrUrl);
    } else {
      await this.page.goto(pathOrUrl);
    }
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.productTitle).toBeVisible();
  }

  async assertProductOpened(productName) {
    await expect(this.productTitle).toContainText(productName, { ignoreCase: true });
  }

  async selectVariantByText(variantText) {
    const variantOption = this.page.locator('.p-opt-vals label', { hasText: variantText }).first();
    if (await variantOption.isVisible().catch(() => false)) {
      await safeClick(variantOption);
    }
  }

  async addToCartOrBuyNow() {
    await expect(this.buyNowButton).toBeVisible();
    await safeClick(this.buyNowButton);
  }

  async assertCartDrawerHasProduct(productName) {
    await expect(this.cartDrawer).toContainText(productName, { ignoreCase: true });
  }

  async assertCartCountIncreased() {
    await expect(this.cartToggle).toContainText('1');
  }

  async proceedToCheckout() {
    const checkoutLocator = this.page.locator('#m-cart').getByRole('link', { name: /^checkout$/i }).first();
    const checkoutUrl = await checkoutLocator.getAttribute('href');
    if (checkoutUrl) {
      await this.page.goto(checkoutUrl);
    } else {
      await safeClick(checkoutLocator);
    }
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { ProductPage };
