// @ts-check
const { pauseTest } = require('@ember/test-helpers');
const { test, expect } = require('@playwright/test');

test('Webpage is up', async ({ page }) => {
  await page.goto('http://samuelbordo.com/');
});
