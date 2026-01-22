import {test} from "../../pageObjects/pomfixture";

test('Page Object Model Test', async ({ page, registerPage, confirmationPage }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    await registerPage.enterFirstName("Allan"); 
    await registerPage.enterLastName("Ramos");
    await registerPage.enteremail("LockandLock@example.com");
    await registerPage.enterTelephone("1234567890");
    await registerPage.enterPassword("Password123");
    await registerPage.enterConfirmPassword("Password123");
    await registerPage.clickPrivacyPolicy();
    await registerPage.clickContinue(); 
    await confirmationPage.validateConfirmationMessage();

});
