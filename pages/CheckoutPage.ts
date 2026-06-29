import { type Page, type Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly postalCode: Locator;
  private readonly continueButton: Locator;
  private readonly finishButton: Locator;
  private readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = this.byTestId('firstName');
    this.lastName = this.byTestId('lastName');
    this.postalCode = this.byTestId('postalCode');
    this.continueButton = this.byTestId('continue');
    this.finishButton = this.byTestId('finish');
    this.completeHeader = this.byTestId('complete-header');
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }

  async expectOrderComplete(): Promise<void> {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
