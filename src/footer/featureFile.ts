import { Page } from "@playwright/test";
/* Descriptive Title: Feature File Class
  Class Description: This class is intended to represent feature files for badge activities.
*/

export default class featureFile {
    constructor(public page: Page)
    {
    
    }

    async openWebsite({page, url}: { page: any; url: string }) {

        await page.goto(url);    
    }

    async FillOutContactFormWithError({ page, p_homePage, p_contactUsPage }: { page: any; p_homePage: any; p_contactUsPage: any })
    {   
        await p_homePage.navigateAndClickToFinancialServices();
        const iframe_contactUs = await p_contactUsPage.enterValuesUnderContactUsWithError(
        "John", 
        "Doe", 
        "johndoe@ibm.com", 
        "Example Corp", 
        "Manager", 
        "This is a test message."  );
        
        return iframe_contactUs;
    }

    async validateErrorMessage({iframe_contactUs, p_contactUsPage}: {iframe_contactUs: any; p_contactUsPage: any}){
        await p_contactUsPage.validateErrorMessage(iframe_contactUs);
    }


}