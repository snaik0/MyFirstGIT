import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Navigation Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('Navigate to Blog', async ({ page }) => {
    await homePage.navigateToFooterLink('Blog');
    await expect(page).toHaveURL(/.*blog/);
  });

  test('Navigate to Careers', async ({ page }) => {
    await homePage.navigateToFooterLink('Careers');
    await expect(page).toHaveURL(/.*careers/);
  });

  test('Navigate to Contact Us', async ({ page }) => {
    await homePage.navigateToFooterLink('Contact us');
    await expect(page).toHaveURL(/.*contact-us/);
  });

  test('Navigate to FAQs', async ({ page }) => {
    await homePage.navigateToFooterLink('FAQs');
    await expect(page).toHaveURL(/.*faqs/);
  });
});
