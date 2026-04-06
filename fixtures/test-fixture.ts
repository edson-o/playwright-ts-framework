import { test as base } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { HomePage } from '../page/home.page';

export const test = base.extend<{
    loginpage: LoginPage,
    homepage: HomePage
}>({
    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homepage: async ({ page }, use) => {
        await use(new HomePage(page))
    }
});

export const expect = test.expect;