async function dismissPopupIfPresent(page) {
  const popupSelectors = [
    page.locator('.modal .close'),
    page.locator('.popup-modal .close'),
    page.locator('button[aria-label="Close"]'),
    page.locator('.mfp-close')
  ];

  for (const locator of popupSelectors) {
    try {
      if (await locator.first().isVisible({ timeout: 1500 })) {
        await locator.first().click();
        break;
      }
    } catch {
      // Ignore optional popups.
    }
  }
}

async function safeClick(locator) {
  await locator.waitFor({ state: 'visible' });
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
}

module.exports = {
  dismissPopupIfPresent,
  safeClick
};
