const puppeteer = require('puppeteer');
const helpers = require('./helper_functions.js');


const user = {
	username: "Alfred Madere",
	email: "alfred@stevemadere.com",
	password: "YCm@n88zUDYhWCx"
};


describe('create session', () => {
	jest.setTimeout(300000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  it('Can quick start solo session', async() => {
    await helpers.ensureLoggedIn(page);
    await page.waitForSelector('div.homecard.createsession.logged-in');
    await page.click('div.homecard.createsession.logged-in');
    await page.click('a.quick-start-solo');
    await page.waitForSelector('div.launch-buttons');
   });
 
});

