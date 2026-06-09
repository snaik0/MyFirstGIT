import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly messageInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    // Based on exploration, it's a textarea or similar near the "Submit" button
    this.messageInput = page.locator('textarea, [placeholder*="message" i], .contact-form input').first();
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async fillMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }
}
