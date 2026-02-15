import { Page }                 from '@playwright/test';
import { Header }               from '../elements/header.element';
import { CheckoutStep1InfoBox } from '../elements/checkout-step1-infobox.element';
import { CheckoutStep1Buttons } from '../elements/checkout-step1-buttons.element';
import { BurgerMenu }           from '../elements/burger-menu.element';
import { Footer }               from '../elements/footer.element';
import { SigninForm }           from '../elements/signin-form.element';

export class CheckoutStep1 {
    constructor(private page: Page) {}

    header                  = new Header(this.page);

    checkoutStep1InfoBox    = new CheckoutStep1InfoBox(this.page);
    async fillCheckoutStep1InfoBox(
        firstName:  string, 
        lastName:   string,
        ZIP:        string
        ): Promise<void> {
        await this.checkoutStep1InfoBox.checkoutStep1InfoBox1stNameInput.fill(firstName);
        await this.checkoutStep1InfoBox.checkoutStep1InfoBoxLastNameInput.fill(lastName);
        await this.checkoutStep1InfoBox.checkoutStep1InfoBoxZIPInput.fill(ZIP);
    }

    checkoutStep1Buttons    = new CheckoutStep1Buttons(this.page);

    burgerMenu              = new BurgerMenu(this.page);

    footer                  = new Footer(this.page);

    signinForm              = new SigninForm(this.page);
}