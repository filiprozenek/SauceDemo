import { Page } from '@playwright/test';

export class Header {
    constructor(private page: Page) {}

    // ↓ 'Sign-in' 'Header'
    signinHeaderElement     = this.page.locator(`div.login_logo`); // ← This is also a Logo on 'Sign-in' Page itself

    // ↓ (regular) 'Header'
    headerElement           = this.page.locator(`div.primary_header`);
    headerBurgerMenuIcon    = this.page.locator(`button#react-burger-menu-btn`);
    headerBurgerMenuIconIMG = this.page.locator(`img.bm-icon`);
    headerLogo              = this.page.locator(`div.app_logo`);
    headerCartIcon          = this.page.locator(`div#shopping_cart_container`);
    headerCartQtyBadge      = this.page.locator(`span.shopping_cart_badge`);
}