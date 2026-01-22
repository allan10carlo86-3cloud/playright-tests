import { Page } from "@playwright/test";
import { test } from "@playwright/test";

import RegisterPage from '../../pageObjects/pageObjectsLessons/register.ts';
import confirmationPage from '../../pageObjects/pageObjectsLessons/confirmationPage.ts';

test('Page Object Model Test', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const confirmPage = new confirmationPage(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    await registerPage.enterFirstName("Allan"); 
    await registerPage.enterLastName("Ramos");
    await registerPage.enteremail("bala12@example.com");
    await registerPage.enterTelephone("1234567890");
    await registerPage.enterPassword("Password123");
    await registerPage.enterConfirmPassword("Password123");
    await registerPage.clickPrivacyPolicy();
    await registerPage.clickContinue();
    await confirmPage.validateConfirmationMessage();
});
