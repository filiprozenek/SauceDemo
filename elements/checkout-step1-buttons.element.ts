import { Page } from '@playwright/test';

export class CheckoutStep1Buttons {
    constructor(private page: Page) {}

    checkoutStep1Buttons            = this.page.locator(`div.checkout_buttons`);

    checkoutStep1ButtonsCancel      = this.page.locator(`button#cancel`);
    checkoutStep1ButtonsContinue    = this.page.locator(`input#continue`);
}