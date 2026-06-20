# Playwright Automation Framework - Star Tech

Simple Playwright automation project for [Star Tech](https://www.startech.com.bd).

This project uses JavaScript, Playwright Test, and the Page Object Model.

## Covered Scenarios

- Login page validation
- Search product
- Open product details
- Add a searched laptop product to the cart

## Planned / Optional Scenarios

- Signup flow preparation
- Authenticated login with environment variables
- Proceed to checkout

The checkout flow is kept out of the CI test for now because it depends on a live shopping site session and can be unstable in GitHub Actions.

## Test Running Sequence

Tests run one by one in this order:

```text
01-login.spec.js
02-search.spec.js
03-cart.spec.js
```

This order is controlled by the numbered test file names and the `testMatch` setting in `playwright.config.js`.

## Project Structure

```text
Playwright/
|-- pages/
|   |-- CartPage.js
|   |-- HomePage.js
|   |-- LoginPage.js
|   `-- ProductPage.js
|-- tests/
|   |-- 01-login.spec.js
|   |-- 02-search.spec.js
|   `-- 03-cart.spec.js
|-- utils/
|   |-- helpers.js
|   `-- testData.js
|-- .github/
|   `-- workflows/
|       `-- playwright.yml
|-- playwright.config.js
|-- package.json
`-- README.md
```

## Install

```bash
npm install
```

```bash
npm run install:browsers
```

## Run Tests

Run all tests:

```bash
npm test
```

Run headed mode:

```bash
npm run test:headed
```

Run UI mode:

```bash
npm run test:ui
```

Open report:

```bash
npm run report
```

## CI/CD Pipeline

GitHub Actions runs the Playwright tests automatically from `.github/workflows/playwright.yml`.

The pipeline runs on:

- push to `main` or `master`
- pull request to `main` or `master`
- manual run from the GitHub Actions tab

Pipeline steps:

```text
1. Checkout repository
2. Setup Node.js 22
3. Install dependencies with npm ci
4. Install Chromium browser with Playwright
5. Run npm test
6. Upload Playwright HTML report
7. Upload test results
```

If a CI run fails, download these artifacts from the GitHub Actions run:

- `playwright-report`
- `test-results`

## Notes

- Base URL is set in `playwright.config.js`.
- Test data is stored in `utils/testData.js`.
- Page actions and locators are stored in the `pages/` folder.
- Tests use the live Star Tech website, so network speed or website changes can affect CI results.

## Author

Moniruzzaman
