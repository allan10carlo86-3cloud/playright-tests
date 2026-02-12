import { Page } from "@playwright/test";



/* Descriptive Title: 3Cloud Home Page Object Model
    Class Description: This class contains the locators and methods for interacting with the 3Cloud home page.
*/
export default class homePage {
    /*
    --- Locators Section ---
        In this section, all the locators used in the methods are defined as private variables.
        We use this in order to have a single point of change in case the locator changes in the future.
    */
    private link_whoWeServe: string = '(//a[contains(text(),\'Who We Serve\')])[1]';
    private link_financialServices: string = '(//a[contains(text(),\'Financial Services\')])[1]';   
    
    
    constructor(public page: Page){
    }
    /*
        --- Methods Section ---
        In this section, all the methods to be used in the tests are defined.
    */
    /* 
        Descriptive Title: Navigate to Who We Are Menu 
        Method Description: This method hovers over the "Who We Are" menu item to reveal its dropdown options.
        Parameters: None
        Return: None
    */
    async navigateToWhoWeAre(){
        await this.page.hover(this.link_whoWeServe);
    }
    /* 
        Descriptive Title: Navigate and Click to Financial Services 
        Method Description:This method clicks on the "Financial Services" link under the "Who We Are" menu.
        Parameters: None
        Return: None
    */
    async navigateAndClickToFinancialServices(){

        await this.navigateToWhoWeAre()
        await this.page.click(this.link_financialServices);
    }


}