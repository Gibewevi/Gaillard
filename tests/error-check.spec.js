import { test, expect } from '@playwright/test';

test('check for client-side errors', async ({ page }) => {
  const errors = [];
  const failedRequests = [];

  // Listen for console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`[Console Error] ${msg.text()}`);
    }
  });

  // Listen for failed network requests
  page.on('requestfailed', (request) => {
    failedRequests.push(`[Request Failed] ${request.url()} - ${request.failure().errorText}`);
  });

  page.on('response', (response) => {
    if (response.status() >= 400) {
      failedRequests.push(`[HTTP Error] ${response.url()} - Status: ${response.status()}`);
    }
  });

  // Navigate to the site
  await page.goto('http://localhost:5174/');

  // Wait for a bit to allow errors to surface
  await page.waitForTimeout(5000);

  // Take a screenshot for visual inspection
  await page.screenshot({ path: 'error-check-screenshot.png', fullPage: true });

  // Output findings
  if (errors.length > 0 || failedRequests.length > 0) {
    console.log('Errors found during testing:');
    errors.forEach(err => console.log(err));
    failedRequests.forEach(req => console.log(req));
    throw new Error(`Found ${errors.length} console errors and ${failedRequests.length} failed requests.`);
  } else {
    console.log('No client-side errors or failed network requests detected.');
  }
});
