import { Page } from '@playwright/test';

export class BurgerMenu {
    constructor(private page: Page) {}

    burgerMenuModal = this.page.locator(`div.bm-menu-wrap`);
    burgerMenuXIcon = this.page.locator(`button#react-burger-cross-btn`);
}