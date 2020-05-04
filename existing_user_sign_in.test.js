//existing_user_sign_in.test.js
const puppeteer = require('puppeteer');
const helpers = require('./helper_functions.js');




describe('jamkazam', () => {
	jest.setTimeout(300000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  it('can sign in as an existing user', async() => {
  	await helpers.ensureLoggedOut(page);
  	await helpers.logIn(page);
   });
 
});

