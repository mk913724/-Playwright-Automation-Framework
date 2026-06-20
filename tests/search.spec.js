const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { products } = require('../utils/testData');

test.describe('Star Tech Search', () => {
  test('search input is visible and product cards are available', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.search(products.searchKeyword);

    await expect(homePage.searchInput).toHaveValue(products.searchKeyword);
    await expect(homePage.productCards.first()).toBeVisible();
  });

  test('opens a product details page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.openFirstProduct();

    await expect(page).not.toHaveURL('https://www.startech.com.bd/');
    await expect(page.locator('h1')).toBeVisible();
  });
});
