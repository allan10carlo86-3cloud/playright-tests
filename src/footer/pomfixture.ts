import {test as baseTest} from '@playwright/test';


import _homePage from '@pageObjects/pageObjectsBadgeActivity/homePage';
import _financialServicesPage from '@pageObjects/pageObjectsBadgeActivity/financialServicesPage';
import _contactUsPage from '@pageObjects/pageObjectsBadgeActivity/contactUsPage'; 
import _featureFile from '@footer/featureFile';


type pages = {
    p_homePage : _homePage,
    p_financialServicesPage : _financialServicesPage,
    p_contactUsPage : _contactUsPage,
    p_featureFile : _featureFile
}

const testPages = baseTest.extend<pages>({
    p_homePage : async ({page}, use) => {
        await use (new _homePage(page));
    },

    p_financialServicesPage : async ({page}, use) => {
        await use (new _financialServicesPage(page));
    },

    p_contactUsPage : async ({page}, use) => {
        await use (new _contactUsPage(page));
    },

    p_featureFile : async ({page}, use) => {    
        await use (new _featureFile(page));
    }
})  

export const test = testPages;



