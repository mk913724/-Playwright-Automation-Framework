const { test } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');
const { products } = require('../utils/testData');

test.describe('03. Cart', () => {
  test('adds a product to the cart', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.open(products.inStockProductUrl);
    await productPage.expectProductTitle(products.inStockProductName);
    await productPage.addToCart();
    await productPage.expectCartCountOne();
    await productPage.expectProductInCart(products.inStockProductName);
  });
});
