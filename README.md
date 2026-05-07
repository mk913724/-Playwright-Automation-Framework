# Star Tech Playwright Automation Framework

This is a Playwright automation framework for [Star Tech](https://www.startech.com.bd), built with JavaScript and the Page Object Model design pattern.

## Features

- Home page navigation
- Login page validation
- Product search
- Product details page validation
- Add to cart flow
- Checkout page navigation
- Reusable page objects
- Shared test data and helper methods
- HTML test report

## Tech Stack

- JavaScript
- Playwright
- Playwright Test
- Page Object Model

## Project Structure

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

## Page Object Model

The framework follows the Page Object Model pattern. Page-specific locators and actions are kept inside the `pages/` folder, while test cases are kept inside the `tests/` folder.

This makes the test cases cleaner and easier to maintain. If any locator changes, it can be updated from the related page object file.

Example:

```javascript
const homePage = new HomePage(page);

await homePage.goto();
await homePage.searchProduct('laptop');
```

## Test Scenarios

| Test File | Scenario |
| --- | --- |
| `login.spec.js` | Validates login page elements |
| `search.spec.js` | Searches product and opens product details page |
| `cart.spec.js` | Adds product to cart and proceeds to checkout |

## Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npm run install:browsers
```

## Run Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests with Playwright UI mode:

```bash
npm run test:ui
```

Open the HTML report:

```bash
npm run report
```

## Configuration

The main Playwright configuration is available in `playwright.config.js`.

Current configuration includes:

- Chromium browser
- HTML report
- Screenshot on failure
- Video on failure
- Trace on first retry
- Base URL: `https://www.startech.com.bd`

## Author

Moniruzzaman
