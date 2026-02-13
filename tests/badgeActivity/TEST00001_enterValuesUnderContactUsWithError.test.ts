import {test} from "@footer/pomfixture";

/* Test Case ID: Test0001
    Test Case Description: Enter the Contact Us Page under the Financial Services with Error Generation
    Steps:
    1. Open the website https://3cloudsolutions.com/
    2. Click on the Contact Us link in the header
    3. Fill out the contact form without the phone number and submit to trigger error messages
    4. Validate that the appropriate error messages are displayed for each field
*/
test('Enter the Contact Us Page under the Financial Services with Error Generation', async ({ page, p_featureFile, p_homePage, p_contactUsPage }) => {
    await p_featureFile.openWebsite({page, url: "https://3cloudsolutions.com/"});
    const iframe_result = await p_featureFile.FillOutContactFormWithError({page, p_homePage, p_contactUsPage});
    await p_featureFile.validateErrorMessage({iframe_contactUs: iframe_result, p_contactUsPage});
});
