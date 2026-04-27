const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartDrawer = page.locator('#m-cart');
    this.checkoutHeading = page.locator('h1, h2, .checkout-content');
    this.checkoutUrlPattern = /checkout/;
  }

  async assertProductInMiniCart(productName) {
    await expect(this.cartDrawer).toContainText(productName, { ignoreCase: true });
  }

  async assertCheckoutPageOpened() {
    await expect(this.page).toHaveURL(this.checkoutUrlPattern);
  }
}

module.exports = { CartPage };
