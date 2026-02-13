import { Page } from "@playwright/test";
/* Descriptive Title: Feature File Class
  Class Description: This class is intended to represent feature files for badge activities.
*/

export default class featureFile {
    constructor(public page: Page)
    {
    
    }
    /*
        Descriptive Title: Open Website Method
        Method Description: This method is responsible for opening the specified website URL. It takes in a page object and a URL string as parameters and uses the page.goto() method to navigate to the given URL.
        Parameters: page, url
        Return: None
    */
    async openWebsite({page, url}: { page: any; url: string }) {

        await page.goto(url);    
    }
    /* 
        Descriptive Title: Fill Out Contact Form With Error
        Method Description: This method fills out the contact us form but leaving phone number blank. It takes in the page object, home page object, and contact us page object as parameters. It navigates to the financial services page, clicks on the "Let's Talk" link to open the contact us form in a new page, fills out the form with the provided values, and submits it to trigger error messages for the missing required fields.       
        Parameters: page, p_homePage, p_contactUsPage
        Return: iframe_contactUs : This is the iframe locator that contains the contact us form. We need this to locate the error message that is displayed after submitting the form with missing required fields.
    */
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
    /*  
        Descriptive Title: Validate Error Message
        Method Description: This method validates that the error message displayed is the same as the one we have in our file. This is to ensure that the error message is correct and that the user is informed about the missing required fields. It takes in the iframe locator that contains the contact us form and the contact us page object as parameters, and it calls the validateErrorMessage method from the contact us page object to perform the validation.
        Parameters: iframe_contactUs  : This is the iframe locator that contains the contact us form. We need this to locate the error message that is displayed after submitting the form with missing required fields.
                    p_contactUsPage : This is the contact us page object that contains the method to validate the error message. We need this to call the method that performs the validation of the error message.     
        Return: None    
    */
   async validateErrorMessage({iframe_contactUs, p_contactUsPage}: {iframe_contactUs: any; p_contactUsPage: any}){
        await p_contactUsPage.validateErrorMessage(iframe_contactUs);
    }


}