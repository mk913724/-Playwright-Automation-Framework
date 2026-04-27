class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: /search/i });
  }

  async goTo() {
    await this.page.goto('https://www.startech.com.bd/');
  }

  async searchProduct(productName) {
    await this.searchBox.click();
    await this.searchBox.fill(productName);
    await this.searchBox.press('Enter');
  }
}

module.exports = HomePage;