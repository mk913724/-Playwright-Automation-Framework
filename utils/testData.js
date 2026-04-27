const timestamp = Date.now();

module.exports = {
  users: {
    validUser: {
      username: process.env.STARTECH_USERNAME || 'your-email-or-phone@example.com',
      password: process.env.STARTECH_PASSWORD || 'your-password'
    },
    signupUser: {
      firstName: 'Playwright',
      lastName: 'Tester',
      email: `playwright.${timestamp}@example.com`,
      phone: `017${String(timestamp).slice(-8)}`
    }
  },
  products: {
    searchKeyword: 'laptop',
    inStockProductUrl: '/ecoflow-river-3-portable-power-station',
    inStockProductName: 'EcoFlow River 3 UPS & Portable Power Station',
    requiredVariant: 'AUS Power Port'
  }
};
