import {test as baseTest} from '@playwright/test';


import RegisterPage from './register.ts';
import confirmationPage from './confirmationPage.ts';

type pages = {
    registerPage : RegisterPage,
    confirmationPage : confirmationPage
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({page}, use) => {
        await use (new RegisterPage(page));
    },
    confirmationPage: async ({page}, use) => {
        await use (new confirmationPage(page));
    }
})

export const test = testPages;
