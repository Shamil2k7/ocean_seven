const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACT_DIR = 'C:/Users/DELL/.gemini/antigravity/brain/f1337525-977a-4771-8c61-4b431deaf871';

const SIZES = [
  { name: 'mobile-360', width: 360, height: 780, isMobile: true },
  { name: 'mobile-375', width: 375, height: 667, isMobile: true },
  { name: 'mobile-390', width: 390, height: 844, isMobile: true },
  { name: 'mobile-414', width: 414, height: 896, isMobile: true },
  { name: 'mobile-430', width: 430, height: 932, isMobile: true },
  { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
];

(async () => {
  console.log('Testing Mobile Hero Redesign against reference specifications...\n');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const results = [];

  for (const s of SIZES) {
    console.log(`\nEvaluating: ${s.name} (${s.width}x${s.height})...`);
    await page.setViewport({ width: s.width, height: s.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    const checks = await page.evaluate((isMobile) => {
      const hero = document.querySelector('.hero');
      const winH = window.innerHeight;
      const winW = window.innerWidth;
      const docScrollW = document.documentElement.scrollWidth;

      // Check Quality Bar columns on mobile
      const qualityBarCols = isMobile
        ? document.querySelectorAll('.hero .md\\:hidden .grid-cols-4 > div').length
        : document.querySelectorAll('.hero .hidden.md\\:flex .grid-cols-4 > div').length;

      // Check text in hero
      const heroText = hero ? hero.innerText : '';
      const hasEyebrow = heroText.includes('FRESH FROM THE OCEAN');
      const hasHealthierLife = heroText.includes('Healthier Life') || heroText.includes('Better Tomorrow');
      const hasSupporting = heroText.includes('Bringing you quality seafood') || heroText.includes('Discover quality seafood');
      const hasSingleCTA = hero ? hero.querySelectorAll('a[href="/products"]').length >= 1 : false;
      const hasNoWatchVideo = !heroText.includes('Watch Video');

      // Check circular hamburger button on mobile
      const circularBtn = isMobile
        ? !!document.querySelector('header button.rounded-full')
        : true;

      // Height check
      const heroHeight = hero ? hero.offsetHeight : 0;
      const isHeightMatch = isMobile ? Math.abs(heroHeight - winH) <= 3 : true;

      return {
        heroHeight,
        winH,
        isHeightMatch,
        hasHorizontalOverflow: docScrollW > winW,
        qualityBarCols,
        hasEyebrow,
        hasHealthierLife,
        hasSupporting,
        hasSingleCTA,
        hasNoWatchVideo,
        circularBtn,
      };
    }, s.isMobile);

    const shotName = `mobile-hero-eval-${s.name}.jpg`;
    await page.screenshot({ path: path.join(ARTIFACT_DIR, shotName), type: 'jpeg', quality: 85, fullPage: false });

    console.log(`  - 100svh Height Match: ${checks.isHeightMatch ? 'PASS' : 'WARN'} (Hero: ${checks.heroHeight}px, Screen: ${checks.winH}px)`);
    console.log(`  - Horizontal Overflow: ${!checks.hasHorizontalOverflow ? 'PASS (0 overflow)' : 'FAIL'}`);
    console.log(`  - Quality Bar 4-in-1 Row: ${checks.qualityBarCols === 4 ? 'PASS (4 columns)' : 'FAIL'}`);
    console.log(`  - Circular Hamburger: ${checks.circularBtn ? 'PASS' : 'FAIL'}`);
    console.log(`  - Screenshot captured: ${shotName}`);

    results.push({
      viewport: s.name,
      width: s.width,
      height: s.height,
      heroHeight: checks.heroHeight,
      heightMatch: checks.isHeightMatch,
      singleRow4Cols: checks.qualityBarCols === 4,
      noOverflow: !checks.hasHorizontalOverflow,
      circularMenu: checks.circularBtn,
      noVideoBtn: checks.hasNoWatchVideo,
      pass: checks.isHeightMatch && !checks.hasHorizontalOverflow && checks.qualityBarCols === 4 && checks.hasNoWatchVideo
    });
  }

  await browser.close();
  console.log('\n--- VERIFICATION SUMMARY TABLE ---');
  console.table(results);
})();
