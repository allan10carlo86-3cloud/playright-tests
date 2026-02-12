import {test} from "@footer/pomfixture";


test('Enter the Contact Us Page under the Financial Services with Error Generation', async ({ page, p_featureFile, p_homePage, p_contactUsPage }) => {
    await p_featureFile.openWebsite({page, url: "https://3cloudsolutions.com/"});
    const iframe_result = await p_featureFile.FillOutContactFormWithError({page, p_homePage, p_contactUsPage});
    await p_featureFile.validateErrorMessage({iframe_contactUs: iframe_result, p_contactUsPage});
});
