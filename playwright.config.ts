import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

/**
 * Central Playwright config.
 * Env-driven so the same suite runs locally and in CI without edits.
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  // Fail the build on CI if a test.only is committed by accident.
  forbidOnly: !!process.env.CI,
  // Retry only on CI to absorb transient flakiness; 0 locally so flakes surface.
  retries: process.env.CI ? 2 : 0,
  // Cap workers on CI for stable, reproducible runs.
  workers: process.env.CI ? 2 : undefined,
  // Whole-run timeout guardrails.
  timeout: 30_000,
  expect: { timeout: 5_000 },
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['github'],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com',
    // Artifacts only on failure keep runs fast and reports small.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to expand cross-browser coverage:
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    // { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
  ],
});
