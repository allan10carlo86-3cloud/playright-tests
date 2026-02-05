import {test} from "../../pageObjects/pageObjectsBadgeActivity/pomfixture.ts";


test('Enter the Contact Us Page under the Financial Services with Error Generation', async ({ page, p_featureFile, p_homePage, p_contactUsPage }) => {
    await p_featureFile.FillOutContactFormWithError({page, p_homePage, p_contactUsPage});
});
