const puppeteer = require('puppeteer');

const user = {
	username: "Alfred Madere",
	email: "alfred@stevemadere.com",
	password: "YCm@n88zUDYhWCx"
};

async function signIn(page) {
  await page.waitForSelector('a.join-today');
  await page.click('a.sign-in');
  await page.waitForSelector('#session_email');
  await page.type('#session_email', user.email);
  await page.type('#session_password', user.password);
  await page.click('[value="SIGN IN"]');
  await page.waitForSelector('div.userinfo div.arrow-down');

};
describe('create session', () => {
	jest.setTimeout(300000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

  it('Can quick start solo', async() => {
    await signIn(page);
    await page.click('div.homecard.createsession');
    await page.click('a.quick-start-solo');
    await page.waitForSelector('div.launch-buttons');
   });
 
});

