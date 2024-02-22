const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Ferawati is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Ferawati login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Ferawati should see home page$/, async() => {
    await HomePage.validateHomePage()
})

Then(/^Ferawati should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})
