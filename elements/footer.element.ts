import { Page } from '@playwright/test';

export class Footer {
    constructor(private page: Page) {}

    footerElement               = this.page.locator(`footer.footer`);

    footerTwitterIcon           = this.page.locator(`li.social_twitter`);
    footerFacebookIcon          = this.page.locator(`li.social_facebook`);
    footerLinkedInIcon          = this.page.locator(`li.social_linkedin`);

    footerCopyrightInfo         = this.page.locator(`div.footer_copy`);
    footerCopyrightSign         = this.page.getByText(`©`);
    footerCopyrightYear         = this.page.getByText(`2026`);
    footerCopyrightText         = this.page.getByText(`Sauce Labs. All Rights Reserved.`);
    footerCopyrightToSLink      = this.page.getByText(`Terms of Service`);
    footerCopyrightSeparator    = this.page.getByText(`|`);
    footerCopyrightPPLink       = this.page.getByText(`Privacy Policy`);
}