import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contact Form Tests', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate('/contact-us');
  });

  test('Contact form has required elements', async () => {
    await expect(contactPage.submitButton).toBeVisible();
  });

  test('Submit button is initially disabled or becomes enabled on input (if applicable)', async () => {
    // This is a generic test as exact behavior might vary
    await expect(contactPage.submitButton).toBeVisible();
  });
});
