//TODO write all helper functions in here and require them in all tests
const any = require('promise.any');

async function isLoggedIn(page){
	const loggedInElement = 'div.homecard.account.logged-in';
	const loggedOutElement = '[href="/signin"]';
	let loggedInPromise = page.waitForSelector(loggedInElement)
							.then(() => true).catch(() => false);
	let loggedOutPromise = page.waitForSelector(loggedOutElement)
							.then(() => false).catch(() => true);
	return await any([loggedInPromise, loggedOutPromise])
							.then((loggedIn) => loggedIn);

};

async function ensureLoggedOut(page){
	await page.goto('https://www.jamkazam.com/client#/home');
	if(await isLoggedIn(page)){
		await logOut(page); 
	};
};

async function ensureLoggedIn(page){
	await page.goto('https://www.jamkazam.com/client#/home');
	if(!(await isLoggedIn(page))){
		await logIn(page); 
	};
};

async function logIn(page) {
	await page.waitForSelector('[href="/signin"]');
	await page.click('[href="/signin"]');
	await page.waitForSelector('#session_email');
	await page.type('#session_email', userWithAccount.email);
	await page.type('#session_password', userWithAccount.password);
	await page.click('[value="SIGN IN"]');
	await page.waitForSelector('div.userinfo');

};

async function logOut(page) {
	await page.waitForSelector('div.user');
	await page.hover('div.user');
	await page.click('a[href="/signout"]');
};

const userWithAccount = {
	username: "Alfred Madere",
	email: "alfred@stevemadere.com",
	password: "YCm@n88zUDYhWCx" // bogus credentials
};

module.exports = {isLoggedIn: isLoggedIn,
				ensureLoggedOut: ensureLoggedOut,
				ensureLoggedIn: ensureLoggedIn,
				logIn: logIn,
				userWithAccount: userWithAccount};
