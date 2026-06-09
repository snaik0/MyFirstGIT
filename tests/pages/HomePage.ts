import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly aboutUsLink: Locator;
  readonly whyTrustUsLink: Locator;
  readonly ourProcessLink: Locator;
  readonly blogLink: Locator;
  readonly careersLink: Locator;
  readonly contactUsLink: Locator;

  constructor(page: Page) {
    super(page);
    // Navigation links seem to be only in footer or potentially mobile menu
    // We'll use the ones that are confirmed visible in the trace
    this.aboutUsLink = page.getByRole('link', { name: 'About us', exact: true });
    this.whyTrustUsLink = page.getByRole('link', { name: 'Why trust us', exact: true });
    this.ourProcessLink = page.getByRole('link', { name: 'Our process', exact: true });
    this.blogLink = page.getByRole('link', { name: 'Blog', exact: true });
    this.careersLink = page.getByRole('link', { name: 'Careers', exact: true });
    this.contactUsLink = page.getByRole('link', { name: 'Contact us', exact: true });
  }

  // Fallback if links are not in main nav but footer
  async navigateToFooterLink(name: string) {
    const link = this.page.locator('footer').getByRole('link', { name: name, exact: true }).first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
  }
}
