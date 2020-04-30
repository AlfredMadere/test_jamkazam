const puppeteer = require('puppeteer');


describe('jamkazam', () => {
	jest.setTimeout(30000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  it('can visit jamkazam.com', async() => {
    await page.waitForSelector('a.join-today');
  });

});

