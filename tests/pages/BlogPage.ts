import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BlogPage extends BasePage {
  readonly articles: Locator;

  constructor(page: Page) {
    super(page);
    this.articles = page.locator('a[href*="/blog/"]');
  }

  async getArticleCount() {
    return await this.articles.count();
  }
}
