import { Page } from "@playwright/test";


/* Descriptive Title: 3Cloud Financial Services Page Class
  Class Description: This class contains the locators and methods for interacting with the 3Cloud financial services page.
*/
export default class financialServicesPage {
    /*
    --- Locators Section ---
        In this section, all the locators used in the methods are defined as private variables.
        We use this in order to have a single point of change in case the locator changes in the future.
    */
    private link_letsTalk: string = '(//a[contains(text(), "Let")])[1]';

    constructor(public page: Page){

    }

    /*
        --- Methods Section ---
        In this section, all the methods to be used in the tests are defined.
    */

    /* 
        Descriptive Title:
        Method Description: This method hovers over the "Who We Are" menu item to reveal its dropdown options.
        Parameters: None
        Return: None
    */
    async navigateAndClickToLetsTalk(){
        await this.page.locator(this.link_letsTalk).click();
    }

}