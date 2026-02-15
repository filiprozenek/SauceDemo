import { test, expect }   from '@playwright/test';
import { elementsData }   from '../data/elements.data';
import { orderData }      from '../data/order.data';
import { urlsData }       from '../data/urls.data';
import { usersData }      from '../data/users.data';
import { FourOFour }      from '../pages/404.page';
import { Cart }           from '../pages/cart.page';
import { CheckoutStep1 }  from '../pages/checkout-step1.page';
import { CheckoutStep2 }  from '../pages/checkout-step2.page';
import { PDPage }         from '../pages/pdp.page';
import { POPage }         from '../pages/pop.page';
import { SigninPage }     from '../pages/signin.page';
import { SuccessPage }    from '../pages/success.page';

// ↓ TEST Group
test.describe(`[3] 'Footer'`, () => {
  // TestCases Section URL → https://app.testiny.io/p/1/testcases/tcf/5/tc/29/
  // ↓ Arrange Global
    let fourOFourPage:  FourOFour;
    let cart:           Cart;
    let checkoutStep1:  CheckoutStep1;
    let checkoutStep2:  CheckoutStep2;
    let PDP:            PDPage;
    let POP:            POPage;
    let signinPage:     SigninPage;
    let successPage:    SuccessPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(urlsData.signinPage);
      signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test(`'Footer' is not contained on the 'Sign-in' Page`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/29/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.footer.footerElement).not.toBeAttached();
  });

  test(`'Footer' is contained on the POP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/30/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained on any PDP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/31/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.PDP001);
      PDP = new PDPage(page);
    // ↓ Assert
    await expect(PDP.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained in the 'Cart'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/32/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.cart);
      cart = new Cart(page);
    // ↓ Assert
    await expect(cart.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained in the 'Checkout Step-1'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/33/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.checkoutStep1);
      checkoutStep1 = new CheckoutStep1(page);
    // ↓ Assert
    await expect(checkoutStep1.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained in the 'Checkout Step-2'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/34/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.checkoutStep1);
      checkoutStep1 = new CheckoutStep1(page);
    await checkoutStep1.fillCheckoutStep1InfoBox(orderData.ship1stName, orderData.shipLastName, orderData.shipZIP);
    await page.goto(urlsData.checkoutStep2);
      checkoutStep2 = new CheckoutStep2(page);
    // ↓ Assert
    await expect(checkoutStep2.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained on the 'Success' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/35/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.checkoutStep1);
      checkoutStep1 = new CheckoutStep1(page);
    await checkoutStep1.fillCheckoutStep1InfoBox(orderData.ship1stName, orderData.shipLastName, orderData.shipZIP);
    await page.goto(urlsData.checkoutStep2);
      checkoutStep2 = new CheckoutStep2(page);
    await page.goto(urlsData.successPage);
      successPage = new SuccessPage(page);
    // ↓ Assert
    await expect(successPage.footer.footerElement).toBeAttached();
  });

  test(`'Footer' is contained on the '404' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/36/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.fourOFourPage);
      fourOFourPage = new FourOFour(page);
    // ↓ Assert
    await expect(fourOFourPage.footer.footerElement).toBeAttached();
  });

  test(`'Footer' contains proper elements`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/39/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).toBeAttached();
    await expect(POP.footer.footerFacebookIcon).toBeAttached();
    await expect(POP.footer.footerLinkedInIcon).toBeAttached();
    await expect(POP.footer.footerCopyrightInfo).toBeAttached();
  });

  test(`'Title' is available & n/a for proper elements`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/42/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerFacebookIcon).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerLinkedInIcon).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightInfo).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightSign).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightYear).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightText).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightToSLink).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightSeparator).not.toHaveAttribute(`title`);
    await expect(POP.footer.footerCopyrightPPLink).not.toHaveAttribute(`title`);
  });

  test(`'Alt' is available & n/a for proper elements`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/43/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerTwitterIcon).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerFacebookIcon).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerLinkedInIcon).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightInfo).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightSign).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightYear).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightText).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightToSLink).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightSeparator).not.toHaveAttribute(`alt`);
    await expect(POP.footer.footerCopyrightPPLink).not.toHaveAttribute(`alt`);
  });

  test(`'Twitter' Icon is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/45/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
      const [twitterPage] = await Promise.all([
        page.waitForEvent(`popup`),
        page.locator(`[data-test='social-twitter']`).click()
      ]) 
    // ↓ Assert
    await expect(twitterPage).toHaveURL(urlsData.twitter);
  });

  test(`'Facebook' Icon is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/46/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
      const [facebookPage] = await Promise.all([
        page.waitForEvent(`popup`),
        page.locator(`[data-test='social-facebook']`).click()
      ]) 
    // ↓ Assert
    await expect(facebookPage).toHaveURL(urlsData.facebook);
  });

  test(`'LinkedIn' Icon is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/47/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
      const [linkedInPage] = await Promise.all([
        page.waitForEvent(`popup`),
        page.locator(`[data-test='social-linkedin']`).click()
      ]) 
    // ↓ Assert
    await expect(linkedInPage).toHaveURL(urlsData.linkedIn);
  });

  test(`'Copyright' Info has proper value`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/48/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.footer.footerCopyrightInfo).toHaveText(elementsData.footerCopyrightInfoText);
  });

  test(`'Terms of Service' Link is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/49/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await POP.footer.footerCopyrightToSLink.click();
    // ↓ Assert
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`'Privacy Policy' Link is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/5/tc/50/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await POP.footer.footerCopyrightPPLink.click();
    // ↓ Assert
    await expect(page).not.toHaveURL(urlsData.POP);
  });  
})