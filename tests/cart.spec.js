const { test } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { products } = require('../utils/testData');

test.describe('Star Tech Cart and Checkout', () => {
  test('opens product details, adds to cart, and proceeds to checkout', async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productPage.open(products.inStockProductUrl);
    await productPage.expectProductTitle(products.inStockProductName);
    await productPage.buyNow();
    await productPage.expectCartCountOne();
    await productPage.expectProductInCart(products.inStockProductName);
    await productPage.goToCheckout();
    await cartPage.expectCheckoutPage();
  });
});
