const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACT_DIR = 'C:/Users/DELL/.gemini/antigravity/brain/f1337525-977a-4771-8c61-4b431deaf871';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900, expectedCols: 4 },
  { name: 'laptop-1280', width: 1280, height: 800, expectedCols: 4 },
  { name: 'tablet-768', width: 768, height: 1024, expectedCols: 3 },
  { name: 'mobile-390', width: 390, height: 844, expectedCols: 2 },
  { name: 'mobile-360', width: 360, height: 780, expectedCols: 2 },
];

(async () => {
  console.log('Launching headless Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const results = [];

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    // Check horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // Check product grid computed columns
    const gridCols = await page.evaluate(() => {
      const grid = document.querySelector('.product-grid');
      if (!grid) return null;
      const comp = window.getComputedStyle(grid);
      const cols = comp.gridTemplateColumns.split(' ').length;
      return cols;
    });

    // Check heading readability and hero visibility
    const heroInfo = await page.evaluate(() => {
      const heading = document.querySelector('h1');
      const logo = document.querySelector('header img');
      const cta = document.querySelector('a[href="/products"]');
      return {
        headingText: heading ? heading.innerText.trim() : null,
        logoVisible: !!logo,
        ctaVisible: !!cta,
      };
    });

    const screenshotPath = path.join(ARTIFACT_DIR, `${vp.name}.jpg`);
    await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 85, fullPage: false });

    console.log(`  - Horizontal Overflow: ${hasHorizontalOverflow ? 'FAIL (overflow detected)' : 'PASS (no overflow)'}`);
    console.log(`  - Grid Columns: ${gridCols} (Expected: ${vp.expectedCols}) => ${gridCols === vp.expectedCols ? 'PASS' : 'WARN'}`);
    console.log(`  - Heading: "${heroInfo.headingText?.replace(/\n/g, ' ')}"`);
    console.log(`  - Logo & CTA: ${heroInfo.logoVisible && heroInfo.ctaVisible ? 'PASS' : 'FAIL'}`);
    console.log(`  - Screenshot saved: ${vp.name}.jpg`);

    results.push({
      viewport: vp.name,
      width: vp.width,
      hasOverflow: hasHorizontalOverflow,
      gridCols,
      expectedCols: vp.expectedCols,
      pass: !hasHorizontalOverflow && gridCols === vp.expectedCols
    });
  }

  await browser.close();
  console.log('\n--- ALL RESPONSIVE TESTS SUMMARY ---');
  console.table(results);
})();
