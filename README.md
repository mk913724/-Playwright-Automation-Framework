# Playwright Automation Framework - Star Tech

Simple Playwright automation project for [Star Tech](https://www.startech.com.bd).

This project uses JavaScript, Playwright Test, and the Page Object Model.

## Covered Scenarios

- Signup flow preparation
- Login page validation
- Optional authenticated login with environment variables
- Search product
- Open product details
- Add to cart using a real in-stock product
- Proceed to checkout

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

## Test Files

| File | What it tests |
| --- | --- |
| `login.spec.js` | Login page validation |
| `search.spec.js` | Product search and product details page |
| `cart.spec.js` | Add to cart and checkout navigation |

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

## Notes

- Base URL is set in `playwright.config.js`.
- Test data is stored in `utils/testData.js`.
- Page actions and locators are stored in the `pages/` folder.

## Author

Moniruzzaman
