import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly cookieAcceptButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieAcceptButton = page.locator('#cookiescript_accept');
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
    await this.handleCookieConsent();
  }

  async handleCookieConsent() {
    if (await this.cookieAcceptButton.isVisible()) {
      await this.cookieAcceptButton.click();
    }
  }

  async getTitle() {
    return await this.page.title();
  }
}
