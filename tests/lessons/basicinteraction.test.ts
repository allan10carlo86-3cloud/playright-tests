import { expect, test } from '@playwright/test';


test("Input Value", async({page})=> {

  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
  
  const inputValue1 = page.locator("input#sum1");
  const inputValue2 = page.locator("input#sum2");
  const buttonSubmit = page.locator("//button[text()='Get Sum']");

  await inputValue2.scrollIntoViewIfNeeded();

  let num1 = 12;
  let num2 = 13; 
  
  await inputValue1.fill("" + num1);
  await inputValue2.fill("" + num2)
  ;
  buttonSubmit.click();
  const result = page.locator("#addmessage");
  console.log(await result.textContent());
  let expectedResult = num1 + num2;
  console.log("Expected Result is: "+ expectedResult)
  let textContentOfResult = result.textContent();
  await expect(result).toHaveText(expectedResult + "");

})

test("Checkbox",async({page})=> {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  await page.locator("//label[text()='Click on check box']//input[@type='checkbox']").click();
  await page.locator("//input[@name='option1']").click();
  await page.locator("//button[text()='Check All']").click();
  await page.locator("//button[text()='Uncheck All']").click();
})