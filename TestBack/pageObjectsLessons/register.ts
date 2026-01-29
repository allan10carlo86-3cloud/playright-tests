import { Page } from "@playwright/test";

export default class RegisterPage {

    constructor(public page: Page){

    }
    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname").type(firstName);  
    }
    async enterLastName(lastName: string) {
        await this.page.fill("#input-lastname", lastName);  
    }
    async enteremail(email: string){
        await this.page.fill("#input-email", email);
    }
    async enterTelephone(telephone: string){
        await this.page.fill("#input-telephone", telephone);
    }
    async enterPassword(password: string){
        await this.page.fill("#input-password", password);
    }
    async enterConfirmPassword(confirmPassword: string){
        await this.page.fill("#input-confirm", confirmPassword);
    }
    async clickPrivacyPolicy(){
        await this.page.click("//label[@for='input-agree']");
    }
    async clickContinue(){
        await this.page.click("//input[@class='btn btn-primary']")
    }
}


