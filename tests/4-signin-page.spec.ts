import { test, expect }   from '@playwright/test';
import { elementsData }   from '../data/elements.data';
import { urlsData }       from '../data/urls.data';
import { usersData }      from '../data/users.data';
import { FourOFour }      from '../pages/404.page';
import { POPage }         from '../pages/pop.page';
import { SigninPage }     from '../pages/signin.page';

// ↓ TEST Group
test.describe(`[4] 'Sign-in' Page`, () => {
  // TestCases Section URL → https://app.testiny.io/p/1/testcases/tcf/6/tc/51/
  // ↓ Arrange Global
    let fourOFourPage:  FourOFour;
    let POP:            POPage;
    let signinPage:     SigninPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(urlsData.signinPage);
      signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test(`'Sign-in' Page is accessible`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/6/tc/51/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await page.goto(urlsData.fourOFourPage);
      fourOFourPage = new FourOFour(page);
    await page.goto(urlsData.signinPage);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInput).toBeAttached();
  });

  test(`'Sign-in' Page is not accessible`,
    {tag: [`@signed-in`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/6/tc/52/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProper, usersData.userPasswordProperALL);
      POP = new POPage(page);
    await page.goto(urlsData.signinPage);
    // ↓ Assert
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`URL is proper`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/6/tc/53/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(page).toHaveURL(urlsData.signinPage);
  });

  test(`Page Title is proper`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/6/tc/54/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    // ↓ Assert
    await expect(page).toHaveTitle(elementsData.pageTitle);
  });
})