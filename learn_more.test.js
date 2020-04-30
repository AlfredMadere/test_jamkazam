const puppeteer = require('puppeteer');
const faker = require('faker');


const user = {
	email: faker.internet.email(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	mobile: faker.phone.phoneNumber(),
	companyName: faker.company.companyName(),
	textBlock: 'i need some big info',
	password: faker.internet.password(),

};


describe('jamkazam', () => {
	jest.setTimeout(30000);
  beforeEach(async () => {
  	const app = 'https://www.jamkazam.com/';
    await page.goto(app);
  });

//only pases in non headless mode

  
  it('can visit jamkazam.com', async() => {
    await page.waitForSelector('a.join-today');
    await page.click('div.span10 [href="/products/platform"]');
    await page.waitForSelector('div.after-black-bar-border');
  });







});

