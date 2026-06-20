const { expect } = require('@playwright/test');
class CartPage {
  constructor(page) {
    this.page = page;
  }

  async expectCheckoutPage() {
    await expect(this.page).toHaveURL(/checkout/);
  }
}

module.exports = { CartPage };
