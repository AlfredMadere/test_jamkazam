//existing_user_sign_in.test.js
const puppeteer = require('puppeteer');

const user = {
	username: "Alfred Madere",
	email: "alfred@stevemadere.com",
	password: "YCm@n88zUDYhWCx"
};


describe('jamkazam', () => {
	jest.setTimeout(300000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  it('can visit jamkazam.com', async() => {
    await page.waitForSelector('a.join-today');
    await page.click('a.sign-in');
    await page.waitForSelector('#session_email');
    await page.type('#session_email', user.email);
    await page.type('#session_password', user.password);
    await page.click('[value="SIGN IN"]');
    await page.waitForSelector('div.userinfo div.arrow-down');
    await page.hover('div.userinfo div.arrow-down');
    await page.waitForSelector('[href="/signout"]');
   });
 

});

