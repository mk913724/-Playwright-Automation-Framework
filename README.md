#  Playwright Automation Framework -Star Tech

Playwright automation framework for `https://www.startech.com.bd` using JavaScript, Playwright Test, and the Page Object Model.

## Structure

```text
Playwright/
|-- pages/
|   |-- CartPage.js
|   |-- HomePage.js
|   |-- LoginPage.js
|   `-- ProductPage.js
|-- tests/
|   |-- cart.spec.js
|   |-- login.spec.js
|   `-- search.spec.js
|-- utils/
|   |-- helpers.js
|   `-- testData.js
|-- playwright.config.js
|-- package.json
`-- README.md
```

## Covered Scenarios

- Signup flow preparation
- Login page validation
- Optional authenticated login with environment variables
- Search product
- Open product details
- Add to cart using a real in-stock product
- Proceed to checkout

## Notes

- Star Tech signup is kept framework-ready but skipped by default because live registration may require real user verification and should not be spammed from automation.
- Login test runs fully only if you provide real credentials.
- Cart flow uses a known in-stock product and selects a required variant before clicking `Buy Now`.

## Run

Install browsers if needed:

```bash
npx playwright install
```

Run all tests:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Open Playwright report:

```bash
npm run report
```

## Optional Environment Variables

Set these if you want to run the authenticated login test:

```powershell
$env:STARTECH_USERNAME="your-email-or-phone"
$env:STARTECH_PASSWORD="your-password"
```
