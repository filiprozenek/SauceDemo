import { Page } from '@playwright/test';

export class SigninForm {
    constructor(private page: Page) {}

    signinFormElement               = this.page.locator(`div.login_wrapper-inner`);

    signinFormUserNameInput         = this.page.locator(`input#user-name`);
    signinFormPasswordInput         = this.page.locator(`input#password`);
    signinFormSubmitButton          = this.page.locator(`input#login-button`);

    signinFormUserNameInputErrorX   = this.page.locator(`svg`).first();
    signinFormPasswordInputErrorX   = this.page.locator(`svg`).nth(1);
    signinFormErrorMsg              = this.page.locator(`h3[data-test='error']`);
    signinFormErrorMsgX             = this.page.locator(`button.error-button`);
}