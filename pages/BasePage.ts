import { type Page, type Locator } from '@playwright/test';

/**
 * Shared behavior for every page object.
 * Page objects expose intent ("login", "addToCart") and hide selectors,
 * so specs read like user stories and selector churn stays in one place.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  /** Navigate to a path relative to the configured baseURL. */
  async goto(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /** Convenience for data-test attribute selectors (SauceDemo uses these). */
  protected byTestId(id: string): Locator {
    return this.page.locator(`[data-test="${id}"]`);
  }
}
