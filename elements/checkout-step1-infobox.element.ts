import { Page } from '@playwright/test';

export class CheckoutStep1InfoBox {
    constructor(private page: Page) {}

    checkoutStep1InfoBox                = this.page.locator(`div.checkout_info`);

    checkoutStep1InfoBox1stNameInput    = this.page.locator(`input#first-name`);
    checkoutStep1InfoBoxLastNameInput   = this.page.locator(`input#last-name`);
    checkoutStep1InfoBoxZIPInput        = this.page.locator(`input#postal-code`);
}