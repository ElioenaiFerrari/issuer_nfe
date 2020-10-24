const puppeteer = require('puppeteer');

const build_page = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  return page;
};

module.exports = build_page;
