import { expect, Page, request } from "@playwright/test";

export class HomePage {
    constructor(public page: Page) { }

    private product: string = 'Sauce Labs Bike Light';
    private listProduct: string = '.inventory_item';
    private shoppingCart: string = '.shopping_cart_link';

    private checkout: string = '#checkout';
    private firstName: string = '#first-name';
    private lastName: string = '#last-name';
    private postCode: string = '#postal-code';
    private continueButton: string = '#continue';

    private idProduct: string = '.inventory_item_name';
    private finishButton: string = '#finish';

    private idmsg: string = '.complete-header';
    private msg: string = 'Thank you for your order!';


    async list(name: string, lastname: string, code: string) {
        await this.page.locator(this.listProduct).filter({
            hasText: this.product
        }).getByRole('button', { name: 'Add to cart' }).click();

        await expect(this.page.locator(this.shoppingCart)).toHaveCount(1);
        await this.page.locator(this.shoppingCart).click();
        
        await expect(this.page.locator(this.idProduct)).toHaveText(this.product);
        await this.page.locator(this.checkout).click();

        await this.page.locator(this.firstName).fill(name);
        await this.page.locator(this.lastName).fill(lastname);
        await this.page.locator(this.postCode).fill(code);
        await this.page.locator(this.continueButton).click();

        await expect(this.page.locator(this.idProduct)).toHaveText(this.product);
        await this.page.locator(this.finishButton).click();

        await expect(this.page.locator(this.idmsg)).toHaveText(this.msg);

        await this.page.pause();
    }


}