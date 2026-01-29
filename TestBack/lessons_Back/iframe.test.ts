import { test, expect } from "@playwright/test"

test("Frames", async({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); 
    //console.log(allframes);
    console.log("Total Frames are: "+ allframes.length);
    const firstFrame= page.frame({name: "firstFr"});
    await firstFrame?.fill("input[name='fname']", "Allan");
    await firstFrame?.fill("input[name='lname']", "Ramos");

    await page.waitForTimeout(3000);

    expect(await firstFrame?.locator("p.has-text-info").textContent()).toContain("Allan");
    expect(await firstFrame?.locator("p.has-text-info").textContent()).toContain("Ramos")
    

});


test("Frames 2", async({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();

    console.log("Total Frames are: "+ allframes.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Michael");
    await frame.locator("input[name='lname']").fill("Smith");
    expect(await frame.locator("p.has-text-info").textContent()).toContain("Michael");
    expect(await frame.locator("p.has-text-info").textContent()).toContain("Smith");
    await page.waitForTimeout(3000);
    
});


test("tabs", async({page}) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log("Current Page URL: " + page.url()); 
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup", {timeout: 10000}),
        page.locator("//a[@title='Follow @Lambdatesting on Twitter']").click()
    ]);
    console.log("New Window URL: " + newWindow.url());  
});


test("multiple windows", async({page}) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    const [multiplePages] = await Promise.all([
       page.waitForEvent("popup", { timeout: 10000 }),
       page.locator("#followboth").click()
    ]);
    
    await multiplePages.waitForLoadState(); //wait for all the pages loaded successfully
    const pages = multiplePages.context().pages();
    console.log("Total number of pages: " + pages.length);
    
    for (const pg of pages) {
        console.log("Page URL: " + pg.url());
    }
});

test("multiple windows wait for load state", async({page}) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    const [multiplePages] = await Promise.all([
       page.waitForEvent("popup", { timeout: 10000 }),
       page.locator("#followboth").click()
    ]);
    
    await multiplePages.waitForLoadState(); //wait for all the pages loaded successfully
    const pages = multiplePages.context().pages();
    console.log("Total number of pages: " + pages.length);
    
    for (const pg of pages) {
        console.log("Page URL: " + pg.url());
    }


    let facebookPage;;
    let twitterPage;
    for (let index = 0 ; index < pages.length; index++) {
        const pgurl = pages[index].url();
        if (pgurl.includes("facebook")) {
            facebookPage = pages[index];
        } else if (pgurl.includes("x.com")) {
            twitterPage = pages[index];
        }
    }

    console.log("Facebook Page URL: " + facebookPage?.url());
    console.log("Twitter Page URL: " + twitterPage?.url()); 
});
