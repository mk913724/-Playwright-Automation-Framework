const { test } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { products } = require('../utils/testData');

test.describe('Star Tech Cart and Checkout', () => {
  test('opens product details, adds to cart, and proceeds to checkout', async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productPage.gotoProduct(products.inStockProductUrl);
    await productPage.assertProductOpened(products.inStockProductName);
    await productPage.selectVariantByText(products.requiredVariant);
    await productPage.addToCartOrBuyNow();
    await productPage.assertCartCountIncreased();
    await cartPage.assertProductInMiniCart(products.inStockProductName);
    await productPage.proceedToCheckout();
    await cartPage.assertCheckoutPageOpened();
  });
});
