const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { products } = require('../utils/testData');

test.describe('03. Cart', () => {
  test('adds a searched laptop to the cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.searchAndOpenFirstProduct(products.searchKeyword);
    const productName = await productPage.getProductName();

    await productPage.addToCart();
    await productPage.expectCartCountOne();
    await productPage.expectProductInCart(productName);
  });
});
