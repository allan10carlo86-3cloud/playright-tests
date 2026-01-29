import { test, chromium, expect } from '@playwright/test';

test('test', async ({}) => {

  const browser = await chromium.launch({
    headless: false,

  });
  const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.locator('//div[@id="main-navigation"]//a//span[contains(text(),"My account")]').hover();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('allan.carlo.t.ramos@outlook.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('ekek');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('//div[@id="main-navigation"]//a//span[contains(text(),"My account")]').hover();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  
  await page.close();
  await context.close();
  await browser.close();

});