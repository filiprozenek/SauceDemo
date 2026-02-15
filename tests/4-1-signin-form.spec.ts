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
test.describe(`[4-1] 'Sign-in' Form`, () => {
  // TestCases Section URL → https://app.testiny.io/p/1/testcases/tcf/7/tc/56/
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
  test(`'Sign-in' Form is contained on the 'Sign-in' Page`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/56/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
  });

  test(`'Sign-in' Form is not contained on the POP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/57/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained on any PDP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/58/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.PDP001);
      PDP = new PDPage(page);
    // ↓ Assert
    await expect(PDP.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained in the 'Cart'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/59/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.cart);
      cart = new Cart(page);
    // ↓ Assert
    await expect(cart.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained in the 'Checkout Step-1'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/60/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.checkoutStep1);
      checkoutStep1 = new CheckoutStep1(page);
    // ↓ Assert
    await expect(checkoutStep1.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained in the 'Checkout Step-2'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/61/edit`}},
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
    await expect(checkoutStep2.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained on the 'Success' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/62/edit`}},
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
    await expect(successPage.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form is not contained on the '404' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/63/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.fourOFourPage);
      fourOFourPage = new FourOFour(page);
    // ↓ Assert
    await expect(fourOFourPage.signinForm.signinFormElement).not.toBeAttached();
  });

  test(`'Sign-in' Form contains proper elements`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/65/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInput).toBeAttached();
    await expect(signinPage.signinForm.signinFormSubmitButton).toBeAttached();
  });

  test(`'Sign-in' Form's elements have proper values`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/67/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toHaveAttribute(`placeholder`, elementsData.signinFormUserNameInputPlaceholderText);
    await expect(signinPage.signinForm.signinFormPasswordInput).toHaveAttribute(`placeholder`, elementsData.signinFormPasswordInputPlaceholderText);
    await expect(signinPage.signinForm.signinFormSubmitButton).toHaveAttribute(`value`, elementsData.signinFormSubmitButtonLabel);
  });

  test(`'Title' is available & n/a for proper elements`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/70/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).not.toHaveAttribute(`title`);
    await expect(signinPage.signinForm.signinFormPasswordInput).not.toHaveAttribute(`title`);
    await expect(signinPage.signinForm.signinFormSubmitButton).not.toHaveAttribute(`title`);
  });

  test(`'Alt' is available & n/a for proper elements`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/71/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).not.toHaveAttribute(`alt`);
    await expect(signinPage.signinForm.signinFormPasswordInput).not.toHaveAttribute(`alt`);
    await expect(signinPage.signinForm.signinFormSubmitButton).not.toHaveAttribute(`alt`);
  });

  test(`'Username' Input is working properly`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/74/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormUserNameInput.fill(usersData.userNameInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toHaveAttribute(`value`, usersData.userNameInvalid);
  });

  test(`'Password' Input is working properly`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/75/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signinForm.signinFormPasswordInput.fill(usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormPasswordInput).toHaveAttribute(`value`, usersData.userPasswordInvalid);
  });

  test(`'Submit' Button is working properly`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/76/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
  });

  test(`'Sign-in' Form does not contain any Errors by default`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/77/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test(`Submit the empty Form (failed result)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/78/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`Errors appeared within the 'Sign-in' Form if I tried to submit the empty Form`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/79/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test(`Error' Box contains proper value if I tried to submit the empty Form`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/81/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(elementsData.signinFormErrorMsgText1);
  });
  
  test(`'Title' is available & n/a for proper Errors if I tried to submit the empty Form`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/83/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toHaveAttribute(`title`);
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toHaveAttribute(`title`);
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toHaveAttribute(`title`);
    await expect(signinPage.signinForm.signinFormErrorMsgX).not.toHaveAttribute(`title`);
  });

  test(`'Alt' is available & n/a for proper Errors if I tried to submit the empty Form`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/84/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toHaveAttribute(`alt`);
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toHaveAttribute(`alt`);
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toHaveAttribute(`alt`);
    await expect(signinPage.signinForm.signinFormErrorMsgX).not.toHaveAttribute(`alt`);
  });

  test(`'Error' Icon from the 'Error' Box is working properly`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/86/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordBlank);
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
    // ↓ Act
    await signinPage.signinForm.signinFormErrorMsgX.click();
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test(`Submit the incomplete Form with 'Username' only (failed result)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/87/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`Errors appeared within the 'Sign-in' Form if I tried to submit the incomplete Form with 'Username' only`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/88/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test(`'Error' Box contains proper value if I tried to submit the incomplete Form with 'Username' only`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/89/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordBlank);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(elementsData.signinFormErrorMsgText2);
  });

  test(`Submit the incomplete Form with 'Password' only (failed result)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/90/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`Errors appeared within the 'Sign-in' Form if I tried to submit the incomplete Form with 'Password' only`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/91/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test(`'Error' Box contains proper value if I tried to submit the incomplete Form with 'Password' only`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/92/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameBlank, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(elementsData.signinFormErrorMsgText1);
  });

  test(`Submit the complete Form with improper credentials (failed result)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/93/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`Errors appeared within the 'Sign-in' Form if I tried to submit the complete Form with improper credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/94/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test(`'Error' Box contains proper value if I tried to submit the complete Form with improper credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/95/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameInvalid, usersData.userPasswordInvalid);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(elementsData.signinFormErrorMsgText3);
  });

  test(`Submit the complete Form with proper credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/96/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).not.toBeAttached();
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`No Errors appeared if I tried to submit the complete Form with proper credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/97/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });
})