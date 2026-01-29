import { test } from '@playwright/test';

test("Download Files", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

  const textbox = page.locator("//textarea[@id='textbox']");
  await textbox.pressSequentially("I am Allan Carlo T. Ramos");

  await Promise.all([
    page.waitForSelector("//button[@id='create']", { state: 'visible' }),
    await page.locator("//button[@id='create']").click()
  ]);

  const [download] = await Promise.all([

    page.waitForEvent("download"),
    await page.locator("#link-to-download").click()
  ]);
  const downloadPath = './downloads/myfile.txt';
  //const filename = download.suggestedFilename();
  download.saveAs(downloadPath);
  console.log("File saved to: " + downloadPath);

});

test("Upload Files", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("//span[text()='Add files...']/following-sibling::input").click()
  ]);

  const isMultiple = uploadFiles.isMultiple();
  console.log("Is Multiple: " + isMultiple);
  uploadFiles.setFiles(
    ["./uploadFiles/mangoStillLife.avif", "./uploadFiles/mangoStillLife copy.avif"]
  );
  
  await page.waitForTimeout(3000);
});
