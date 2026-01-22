import {test} from "../../pageObjects/pageObjectsBadgeActivity/pomfixture.ts";


test('Enter the Contact Us Page under the Financial Services with Error Generation', async ({ page, p_homePage, p_financialServicesPage, p_contactUsPage}) => {
    await page.goto("https://3cloudsolutions.com/");    
    await p_homePage.navigateToWhoWeAre();
    await p_homePage.navigateAndClickToFinancialServices();
    await p_contactUsPage.enterValuesUnderContactUsWithError(
        "John", 
        "Doe", 
        "johndoe@ibm.com", 
        "Example Corp", 
        "Manager", 
        "This is a test message."  );
});
