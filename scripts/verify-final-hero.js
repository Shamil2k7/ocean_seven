const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACT_DIR = 'C:/Users/DELL/.gemini/antigravity/brain/f1337525-977a-4771-8c61-4b431deaf871';

const TARGETS = [
  { name: 'mobile-360', width: 360, height: 780, isMobile: true },
  { name: 'mobile-390', width: 390, height: 844, isMobile: true },
  { name: 'mobile-430', width: 430, height: 932, isMobile: true },
  { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
];

(async () => {
  console.log('Testing Final Hero Adjustments across target viewports...\n');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const summary = [];

  for (const vp of TARGETS) {
    console.log(`\nChecking Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    // Check Hero Metrics
    const heroMetrics = await page.evaluate((isMobile) => {
      const hero = document.querySelector('.hero');
      const hasWatchVideo = !!document.body.innerText.includes('Watch Video');
      const ctaButtons = hero ? Array.from(hero.querySelectorAll('a[href="/products"]')) : [];
      const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
      const headerVisible = !!document.querySelector('header');
      const heroHeight = hero ? hero.offsetHeight : 0;
      const windowHeight = window.innerHeight;

      return {
        heroHeight,
        windowHeight,
        is100vh: isMobile ? heroHeight >= windowHeight - 2 : true,
        hasWatchVideo,
        ctaCount: ctaButtons.length,
        hasHorizontalScroll,
        headerVisible,
      };
    }, vp.isMobile);

    const screenshotPath = path.join(ARTIFACT_DIR, `hero-${vp.name}.jpg`);
    await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 85, fullPage: false });

    console.log(`  - 100vh Mobile Height: ${heroMetrics.is100vh ? 'PASS' : 'WARN'} (Hero: ${heroMetrics.heroHeight}px, Viewport: ${heroMetrics.windowHeight}px)`);
    console.log(`  - Watch Video Removed: ${!heroMetrics.hasWatchVideo ? 'PASS (0 occurrences)' : 'FAIL'}`);
    console.log(`  - Single Primary CTA: ${heroMetrics.ctaCount === 1 ? 'PASS (Discover Our Products)' : 'FAIL'}`);
    console.log(`  - Horizontal Overflow: ${!heroMetrics.hasHorizontalScroll ? 'PASS (no overflow)' : 'FAIL'}`);
    console.log(`  - Header Accessible: ${heroMetrics.headerVisible ? 'PASS' : 'FAIL'}`);
    console.log(`  - Screenshot saved: hero-${vp.name}.jpg`);

    summary.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      heroHeight: heroMetrics.heroHeight,
      is100vh: heroMetrics.is100vh,
      noVideoBtn: !heroMetrics.hasWatchVideo,
      singleCTA: heroMetrics.ctaCount === 1,
      noOverflow: !heroMetrics.hasHorizontalScroll,
      pass: heroMetrics.is100vh && !heroMetrics.hasWatchVideo && heroMetrics.ctaCount === 1 && !heroMetrics.hasHorizontalScroll
    });
  }

  await browser.close();
  console.log('\n--- FINAL HERO VERIFICATION SUMMARY ---');
  console.table(summary);
})();
