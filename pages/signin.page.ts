import { Page }         from '@playwright/test';
import { Header }       from '../elements/header.element';
import { SigninForm }   from '../elements/signin-form.element';
import { Footer }       from '../elements/footer.element';

export class SigninPage {
    constructor(private page: Page) {}

    header      = new Header(this.page);

    signinForm  = new SigninForm(this.page);
    async signin(
        userName:       string, 
        userPassword:   string
        ): Promise<void> {
        await this.signinForm.signinFormUserNameInput.fill(userName);
        await this.signinForm.signinFormPasswordInput.fill(userPassword);
        await this.signinForm.signinFormSubmitButton.click();
    }

    footer      = new Footer(this.page);
}