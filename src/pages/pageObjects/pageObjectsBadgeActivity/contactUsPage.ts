import { Page } from "@playwright/test";
import { assert } from "console";

/* Descriptive Title: 3Cloud Financial Services Page Class
  Class Description: This class contains the locators and methods for interacting with the 3Cloud financial services page.
*/
export default class contactUsPage {
    /*
    --- Locators Section ---
        In this section, all the locators used in the methods are defined as private variables.
        We use this in order to have a single point of change in case the locator changes in the future.
    */
    private button_DeclineCookies: string = '//a[contains(text(),\'Decline\')]';
    private textbox_FirstName: string = '//span[contains(text(),\'First Name\')]/parent::label/following-sibling::div//input'
    private textbox_LastName: string = '//span[contains(text(),\'Last name\')]/parent::label/following-sibling::div//input'
    private textbox_Email: string = '//span[contains(text(),\'Email\')]/parent::label/following-sibling::div//input'
    private textbox_Company: string = '//span[contains(text(),\'Company name\')]/parent::label/following-sibling::div//input'
    private textbox_JobTitle: string = '//span[contains(text(),\'Job title\')]/parent::label/following-sibling::div//input'
    private link_letsTalk: string = '(//a[contains(text(), "Let")])[1]'
    /*
        Coded as Locators for future use but not included in bronze badge activity 
        private textbox_PhoneNumber: string = '//span[contains(text(),\'Phone number\')]/parent::label/following-sibling::div//input'
    */
    private textbox_Message: string = '//span[contains(text(),\'Comments\')]/parent::label/following-sibling::div//textarea'
    private button_Submit: string = '//input[@value=\'SUBMIT\']';
    private validation_errorMessage_CompleteAllRequiredFields : string = 'Please complete all required fields.';
    private text_errorMessage_CompleteAllRequiredFields : string = 'div.hs_error_rollup label';
    constructor(public page: Page){

    }

    /*
        --- Methods Section ---
        In this section, all the methods to be used in the tests are defined.
    */

    /* 
        Descriptive Title: Enter Values Under Contact Us With Error
        Method Description:     This method fills out the contact us form but leaving phone number blank

        Parameters: firstName, lastName, email, company, jobTitle, message
        Return: None
    */
   public async enterValuesUnderContactUsWithError(firstName: string, 
                                                    lastName: string, 
                                                    email: string, 
                                                    company: string, 
                                                    jobTitle: string, 
                                                    message: string)
    {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator(this.link_letsTalk).click() // the link that opens new page
        ]);
        await newPage.waitForLoadState();

        console.log('New page URL:', newPage.url());      
        
        await newPage.bringToFront();
        await newPage.locator(this.button_DeclineCookies).click();
        const iframe_contactUs = newPage.frameLocator('iframe').first();

        await iframe_contactUs.locator(this.textbox_FirstName).scrollIntoViewIfNeeded();
        await iframe_contactUs.locator(this.textbox_FirstName).pressSequentially(firstName);
        await iframe_contactUs.locator(this.textbox_LastName).pressSequentially(lastName);
        await iframe_contactUs.locator(this.textbox_Email).pressSequentially(email);
        await iframe_contactUs.locator(this.textbox_Company).pressSequentially(company);
        await iframe_contactUs.locator(this.textbox_JobTitle).pressSequentially(jobTitle);
        await iframe_contactUs.locator(this.textbox_Message).pressSequentially(message);         
        await iframe_contactUs.locator(this.button_Submit).click();

        return iframe_contactUs;
    }

    public async validateErrorMessage(iframe_contactUs: any){
          const extractedErrorMessage = await iframe_contactUs.locator(this.text_errorMessage_CompleteAllRequiredFields).textContent();
        assert(extractedErrorMessage?.trim() === this.validation_errorMessage_CompleteAllRequiredFields,  "The error message DID NOT matched the ones in our file" );
    }

}