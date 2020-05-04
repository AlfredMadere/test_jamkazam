const puppeteer = require('puppeteer');
const helpers = require('./helper_functions.js');


describe('jamkazam', () => {
	jest.setTimeout(30000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  
  it('what can this do?', async() => {
    await helpers.ensureLoggedOut(page);
    await page.waitForSelector('a.join-today');
    await page.click('div.span10 [href="/products/platform"]');
    await page.waitForSelector('div.after-black-bar-border');
  });

});

