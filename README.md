## 🛒 _Sauce Demo_
This repository contains a suite of automated E2E tests for the [_Sauce Demo_](https://www.saucedemo.com/) dummy store. The project is built using _Playwright_ with _TypeScript_.

<p align="center">
<img width="1060" height="460" alt="SD_readme_1" src="https://github.com/user-attachments/assets/65a09e08-1fe0-4cac-8289-bd9ee10e9138" />
</p>

### 📝 Documentation
To see all the TestCases → go to [Testiny](https://app.testiny.io/p/1/testcases/tcf/1) & sign-in using _frdocviewer@outlook.com_ / _letmeseethat_ ← this is a _view only_ user role account, but it will allow you to navigate through the documentation and see both manual & automated TestCases all together.

<p align="center">
<img width="1920" height="919" alt="SD_readme_2" src="https://github.com/user-attachments/assets/29780b15-ba48-437c-b22a-0a3769dab816" />
</p>

### 📁 Folders / Files structure
The test files reflect the TC folders from the documentation, that's why files within the _tests_ folder start with numbers '1', '2' etc. (btw it will be helpful when the repo grows), so it means, f.e. the file _4-1-signin-form.spec.ts_ contains all the automated tests from the [_[4-1] 'Sign-in' Form_](https://app.testiny.io/p/1/testcases/tcf/7/tc/56/) from _Testiny_.

<p align="center">
  <img width="650" height="919" alt="SD_readme_3" src="https://github.com/user-attachments/assets/2cffa38f-be25-44c9-bd9b-1e7a4c11f88a" /></center>
</p>

The other code-folders are:
- _pages_ → here are defined actual test pages, so f.e. the _'Sign-in' Page_
- _elements_ → here are defined all the elements like _'Header'_, _'Footer'_ etc. with all the locators and methods, so f.e. here is located the _'Sign-in' Form_ element that is linked within the _'Sign-in' Page_

<img width="1655" height="571" alt="SD_readme_4" src="https://github.com/user-attachments/assets/b9b3f869-4b0e-4fd8-bae3-629ed9940286" />

- _data_ → here are defined all 'data' files, like URLs, users&passwords etc.

<img width="593" height="510" alt="SD_readme_5" src="https://github.com/user-attachments/assets/d01e2101-8e01-49b1-9ef3-26413b3c609b" />
 
 
The structure might seem to be too complicated, but, believe me, it's super easy and also super easy to maintain.

⭐ Bonus info: each test unit contains a direct link to the defined TC within the documentation, anytime you get lost or sth.

<img width="704" height="334" alt="SD_readme_6" src="https://github.com/user-attachments/assets/878f7248-9cea-4cf3-b15e-b63bfaa248d9" />

