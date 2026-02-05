import { Page } from "@playwright/test";
/* Descriptive Title: Feature File Class
  Class Description: This class is intended to represent feature files for badge activities.
*/

export default class featureFile {
    constructor(public page: Page)
    {
    
    }

    async FillOutContactFormWithError({ page, p_homePage, p_contactUsPage }: { page: any; p_homePage: any; p_contactUsPage: any })
    {   
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
    }
}