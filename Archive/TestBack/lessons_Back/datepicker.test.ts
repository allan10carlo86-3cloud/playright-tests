
import { expect, test } from '@playwright/test';
import moment from 'moment';

test("Date Picker", async({page}) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "06/10/1986";
  const dateInput = page.locator("input#birthday");
  await dateInput.fill(date);
  await page.waitForTimeout(3000);


});


test("Date Picker Moment", async({page}) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  await page.click("//input[@placeholder='Start date']");
  let mmYY = page.locator("//div[@class='datepicker-days']//th[@class='datepicker-switch']");
  let prev = page.locator("(//div[@class='datepicker-days']//th[@class='prev'])[1]");

  let dateToSelect =  "May 2019";
  const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
  console.log(thisMonth);

  while (await mmYY.textContent() !== dateToSelect) {
    if (thisMonth) {
      await prev.click();
    } else {
      await page.click("//th[@class='next']");
    }
  }
  await page.click("//td[@class='day'][text()='4']");
});
