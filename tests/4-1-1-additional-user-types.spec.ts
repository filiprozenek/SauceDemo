import { test, expect }   from '@playwright/test';
import { elementsData }   from '../data/elements.data';
import { urlsData }       from '../data/urls.data';
import { usersData }      from '../data/users.data';
import { POPage }         from '../pages/pop.page';
import { SigninPage }     from '../pages/signin.page';

// ↓ TEST Group
test.describe(`[4-1-1] Additional User Types`, () => {
  // TestCases Section URL → https://app.testiny.io/p/1/testcases/tcf/9/tc/98/
  // ↓ Arrange Global
    let POP:            POPage;
    let signinPage:     SigninPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(urlsData.signinPage);
      signinPage = new SigninPage(page);
  });

  // ↓ TEST Units
  test(`'Locked' User with proper credentials can be signed-in (failed result)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/98/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameLocked, usersData.userPasswordProperALL);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).toBeAttached();
    await expect(page).not.toHaveURL(urlsData.POP);
  });

  test(`Errors appeared within the 'Sign-in' Form if I tried to submit the complete Form with 'Locked' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/99/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameLocked, usersData.userPasswordProperALL);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).toBeAttached();
  });

  test(`'Error' Box contains proper value if I tried to submit the complete Form with 'Locked' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/100/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameLocked, usersData.userPasswordProperALL);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormErrorMsg).toHaveText(elementsData.signinFormErrorMsgText4);
  });

  test(`'Problem' User with proper credentials can be signed-in`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/101/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameProblem, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).not.toBeAttached();
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`No Errors appeared if I tried to submit the complete Form with 'Problem' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/102/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameProblem, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test(`'Performance Glitch' User with proper credentials can be signed-in (after a while)`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/103/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNamePerformanceGlitch, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).not.toBeAttached();
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`No Errors appeared if I tried to submit the complete Form with 'Performance Glitch' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/9/tc/104/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNamePerformanceGlitch, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

test(`'Error' User with proper credentials can be signed-in`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/106/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameError, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).not.toBeAttached();
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`No Errors appeared if I tried to submit the complete Form with 'Error' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/107/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameError, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });

  test(`'Visual Glitch' User with proper credentials can be signed-in`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/108/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    // ↓ Act
    await signinPage.signin(usersData.userNameVisualGlitch, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormElement).not.toBeAttached();
    await expect(page).toHaveURL(urlsData.POP);
  });

  test(`No Errors appeared if I tried to submit the complete Form with 'Visual Glitch' User credentials`,
    {tag: [`@guest`],
      annotation: {
        type: ``, 
        description: `https://app.testiny.io/p/1/testcases/tcf/7/tc/109/edit`}},
    async ({ page }) => {
    // ↓ Arrange
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
    // ↓ Act
    await signinPage.signin(usersData.userNameVisualGlitch, usersData.userPasswordProperALL);
      POP = new POPage(page);
    // ↓ Assert
    await expect(signinPage.signinForm.signinFormUserNameInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormPasswordInputErrorX).not.toBeAttached();
    await expect(signinPage.signinForm.signinFormErrorMsg).not.toBeAttached();
  });
})