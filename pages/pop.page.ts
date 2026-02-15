import { Page }         from '@playwright/test';
import { Header }       from '../elements/header.element';
import { BurgerMenu }   from '../elements/burger-menu.element';
import { POPGrid }      from '../elements/pop-grid.element';
import { Footer }       from '../elements/footer.element';
import { SigninForm }   from '../elements/signin-form.element';

export class POPage {
    constructor(private page: Page) {}

    header      = new Header(this.page);
    burgerMenu  = new BurgerMenu(this.page);

    popGrid     = new POPGrid(this.page);

    footer      = new Footer(this.page);

    signinForm  = new SigninForm(this.page);
}