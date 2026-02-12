import { Page } from "@playwright/test";
import { expect } from "@playwright/test";  

export default class confirmationPage {

    constructor(public page: Page){

    }

    async validateConfirmationMessage(){
        const actualMessage = this.page.locator("//h1[contains(text(),'Your Account Has Been Created!')]");
        await expect(actualMessage).toHaveText("Your Account Has Been Created!");
    }
}