const puppeteer = require('puppeteer');
const helpers = require('./helper_functions.js');
const app = 'https://www.jamkazam.com/';


describe('jamkazam', () => {
	jest.setTimeout(30000);
  
  it('what can this do?', async() => {
    await helpers.ensureLoggedOut(page);
    await page.goto(app);
    await page.waitForSelector('a.join-today');
    await page.click('div.span10 [href="/products/platform"]');
    await page.waitForSelector('div.after-black-bar-border');
  });

});

