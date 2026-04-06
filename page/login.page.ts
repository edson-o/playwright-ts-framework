import { expect, Page } from "@playwright/test";
import { Env } from '../utils/env.util';

export class LoginPage {
    constructor(public page: Page) { }

    private userInput: string = '#user-name';
    private passInput: string = '#password';
    private loginButton: string = '#login-button';

    async webSite() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }

    async credential() {
        await this.page.locator(this.userInput).fill(Env.user!);
        await this.page.locator(this.passInput).fill(Env.pass!);
        await this.page.locator(this.loginButton).click();
        await expect(this.page.locator('.app_logo')).toBeVisible();
    }
}