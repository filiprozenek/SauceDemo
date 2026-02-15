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
test.describe(`[1] 'Header'`, () => {
  // TestCases Section URL → https://app.testiny.io/p/1/testcases/tcf/2/tc/1/
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
  test(`'Header' is contained on the 'Sign-in' Page`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/1/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.signinHeaderElement).toBeAttached();
  });

  test(`'Header' is contained on the POP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/2/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained on any PDP`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/3/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.PDP001);
      PDP = new PDPage(page);
    // ↓ Assert
    await expect(PDP.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained in the 'Cart'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/4/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.cart);
      cart = new Cart(page);
    // ↓ Assert
    await expect(cart.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained in the 'Checkout Step-1'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/5/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.checkoutStep1);
      checkoutStep1 = new CheckoutStep1(page);
    // ↓ Assert
    await expect(checkoutStep1.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained in the 'Checkout Step-2'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/6/edit`}},
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
    await expect(checkoutStep2.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained on the 'Success' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/7/edit`}},
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
    await expect(successPage.header.headerElement).toBeAttached();
  });

  test(`'Header' is contained on the '404' Page`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/8/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.fourOFourPage);
      fourOFourPage = new FourOFour(page);
    // ↓ Assert
    await expect(fourOFourPage.header.headerElement).toBeAttached();
  });

  test(`(regular) 'Header' contains proper elements`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/9/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIcon).toBeAttached();
    await expect(POP.header.signinHeaderElement).not.toBeAttached();
    await expect(POP.header.headerLogo).toBeAttached();
    await expect(POP.header.headerCartIcon).toBeAttached();
  });

  test(`'Header' on the 'Sign-in' Page differs from the regular 'Header'`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/11/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.headerBurgerMenuIcon).not.toBeAttached();
    await expect(signinPage.header.signinHeaderElement).toBeAttached();
    await expect(signinPage.header.headerLogo).not.toBeAttached();
    await expect(signinPage.header.headerCartIcon).not.toBeAttached();
  });

  test(`'Header'Logo has proper value pt.1/2`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/12/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.signinHeaderElement).toHaveText(elementsData.headerLogoText);
  });

  test(`'Header'Logo has proper value pt.2/2`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/12/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerLogo).toHaveText(elementsData.headerLogoText);
  });

  test(`'Title' is available & n/a for proper elements pt.1/2`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/16/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.signinHeaderElement).not.toHaveAttribute(`title`);
  });

  test(`'Title' is available & n/a for proper elements pt.2/2`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/16/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIcon).not.toHaveAttribute(`title`);
    await expect(POP.header.headerBurgerMenuIconIMG).not.toHaveAttribute(`title`);
    await expect(POP.header.headerLogo).not.toHaveAttribute(`title`);
    await expect(POP.header.headerCartIcon).not.toHaveAttribute(`title`);
  });

  test(`'Alt' is available & n/a for proper elements pt.1/2`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/17/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(signinPage.header.signinHeaderElement).not.toHaveAttribute(`alt`);
  });

  test(`'Alt' is available & n/a for proper elements pt.2/2`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/17/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIcon).not.toHaveAttribute(`alt`);
    await expect(POP.header.headerBurgerMenuIconIMG).toHaveAttribute(`alt`);
    await expect(POP.header.headerLogo).not.toHaveAttribute(`alt`);
    await expect(POP.header.headerCartIcon).not.toHaveAttribute(`alt`);
  });

  test(`'Alt' elements have proper values`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/18/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerBurgerMenuIconIMG).toHaveAttribute(`alt`, elementsData.headerBurgerMenuIconIMGAlt);
  });

  test(`'Burger-Menu' Icon is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/20/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await expect(POP.burgerMenu.burgerMenuModal).not.toBeInViewport();
    await POP.header.headerBurgerMenuIcon.click();
    // ↓ Assert
    await expect(POP.burgerMenu.burgerMenuModal).toBeInViewport();
  });

  test(`'Cart' Icon is working properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/21/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await POP.header.headerCartIcon.click();
      cart = new Cart(page);
    // ↓ Assert
    await expect(page).toHaveURL(urlsData.cart);
  });

  test(`'Cart' Icon does not contain the 'Qty' Badge if my 'Cart' is empty`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/22/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
  });

  test(`'Cart' Icon on gets the 'Qty' Badge if I added anything to the 'Cart'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/23/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
    POP = new POPage(page);
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toBeAttached();
  });

  test(`'Qty' Badge Counter increases properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/25/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
    POP = new POPage(page);
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toHaveText('1');
    await POP.popGrid.POPGrid2ndProductAdd2CartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toHaveText('2');
  });

  test(`'Qty' Badge Counter decreases properly`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/26/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
    POP = new POPage(page);
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await POP.popGrid.POPGrid2ndProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toHaveText('2');
    await POP.popGrid.POPGrid2ndProductRemoveFromCartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).toHaveText('1');
  });

  test(`'Cart' Icon loses the 'Qty' Badge if I removed all the Product from the 'Cart'`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/2/tc/27/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
    POP = new POPage(page);
    await POP.popGrid.POPGrid1stProductAdd2CartButton.click();
    await expect(POP.header.headerCartQtyBadge).toBeAttached();
    await POP.popGrid.POPGrid1stProductRemoveFromCartButton.click();
    // ↓ Assert
    await expect(POP.header.headerCartQtyBadge).not.toBeAttached();
  });
})