import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';

test.describe('Blog Page Tests', () => {
  let blogPage: BlogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    await blogPage.navigate('/blog');
  });

  test('Blog displays article links', async () => {
    const count = await blogPage.getArticleCount();
    expect(count).toBeGreaterThan(0);
  });
});
