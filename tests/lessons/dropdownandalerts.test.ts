import { test, expect } from "@playwright/test"

test("DropDown and Alerts1", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    //await page.locator("(//button[text()='Click Me'])[1]").click();
    
    page.on("dialog", async (alert) =>{
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept();
    });
    await page.locator("//button[text()='Click Me']").nth(0).click();
 
})

test("DroprDown and Alerts2",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    });

    await page.locator("//button[text()='Click Me']").nth(1).click();
    expect(await page.locator("//p[@id='confirm-demo']")).toBeVisible();
    expect(await page.locator("//p[@id='confirm-demo']")).toHaveText("You pressed Cancel!");

})

test("DropDown and Alerts3",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept("Playwright");
    });
    
    await page.locator("//button[text()='Click Me']").nth(2).click();
    expect(await page.locator("//p[@id='prompt-demo']")).toBeVisible();
    expect(await page.locator("//p[@id='prompt-demo']")).toHaveText("You have entered 'Playwright' !");
});

test("Bootstrap Modal",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("//button[text()='Launch Modal']").nth(0).click();
    await page.locator("//div[@class='modal-footer']//button[text()='Save Changes']").nth(0).click();

});

test("Dropdown Example 1",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.locator("//select[@id='select-demo']").selectOption("Monday");
    expect(await page.locator("//p[contains(text(),'Monday')]").textContent()).toContain("Monday");
});

test("Dropdown Example 2",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const multiSelect = page.locator("//select[@id='multi-select']");
    await multiSelect.selectOption([{label:"California"},{label:"Ohio"},{label:"Washington"}]);

    const buttonFirstSelected = page.locator("//button[@id='printMe']");

    await buttonFirstSelected.waitFor({ state: 'visible' });
    await buttonFirstSelected.scrollIntoViewIfNeeded();
    await buttonFirstSelected.click();

    //const resultText = await page.locator("//p[contains(text(), 'First selected option is :')]//span").textContent();
    //console.log(resultText);
    //expect(resultText).toContain("California");
})


test("Dropdown BootStrap",async({page})=>{
  await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
  await page.locator("span.select2-selection--single").nth(0).click();
  // Type the country name (e.g., "Australia") and press Enter
  await page.locator("input.select2-search__field").nth(1).fill("Australia");
  // Pause for observation
  //await page.waitForTimeout(3000);
  await page.locator("li.select2-results__option.select2-results__option--highlighted").click();
  const selectedCountry = await page.locator("span.select2-selection__rendered").nth(0).textContent();
  expect(selectedCountry).toContain("Australia");
});

test("JQuery Dropdown with Search - Select Multiple States", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

  // Helper to select a state by name
  async function selectState(state: string) {
    await page.locator("input.select2-search__field").click();
    await page.locator(`//li[text()='${state}']`).click();
  }

  // Select multiple states
  await selectState("Alabama");
  await selectState("Alaska");

  // Optionally, verify the selections
  const selectedStates = await page.locator(".select2-selection__choice").allTextContents();
  expect(selectedStates.join(" ")).toContain("Alabama");
  expect(selectedStates.join(" ")).toContain("Alaska");

});

