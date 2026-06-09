const fs = require('fs');
const path = require('path');

function generateBoilerplate(url) {
  const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
  const className = domain.charAt(0).toUpperCase() + domain.slice(1) + 'Page';

  const pomContent = `import { Page, Locator } from '@playwright/test';

export class ${className} {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('${url}');
  }
}
`;

  const specContent = `import { test, expect } from '@playwright/test';
import { ${className} } from '../pages/${className}';

test.describe('${domain} tests', () => {
  test('basic load test', async ({ page }) => {
    const sitePage = new ${className}(page);
    await sitePage.navigate();
    await expect(page).toHaveURL('${url}');
  });
});
`;

  if (!fs.existsSync('tests/pages')) fs.mkdirSync('tests/pages', { recursive: true });
  if (!fs.existsSync('tests/e2e')) fs.mkdirSync('tests/e2e', { recursive: true });

  fs.writeFileSync(path.join('tests/pages', `${className}.ts`), pomContent);
  fs.writeFileSync(path.join('tests/e2e', `${domain}.spec.ts`), specContent);

  console.log(`Generated tests/pages/${className}.ts`);
  console.log(`Generated tests/e2e/${domain}.spec.ts`);
}

const targetUrl = process.argv[2] || 'https://example.com';
generateBoilerplate(targetUrl);
