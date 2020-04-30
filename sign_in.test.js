const puppeteer = require('puppeteer');
const faker = require('faker');


const user = {
	email: 'marcustita@gmail.com',
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	mobile: faker.phone.phoneNumber(),
	companyName: faker.company.companyName(),
	textBlock: 'i need some big info',
	password: 'COOSJ00z',

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
    await page.click('[href="/signin"]');
    await page.waitForSelector('div.dialog-inner');


    await page.type('div.field.email [for="session_email"]', user.email);
    await page.type('div.field.password [id="session_password"]', user.password);

    await page.click('div.actions [type="submit"]');
    await page.waitForSelector('div#profile a[rel="nofollow"]');
    


  });







});