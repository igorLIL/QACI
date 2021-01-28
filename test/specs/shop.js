import LoginPage from '../pageobjects/login.page'
import ShopPage from '../pageobjects/shop.page'

describe('My Shop tab', () => {
    it('should login and validate Shop ', () => {
        LoginPage.open();
        LoginPage.login('3333@gmail.com', '33333');
        browser.pause(2000);
        expect(LoginPage.Shop).toHaveText("Shop");
    });
    // it('should login and validate Shop ', () => {
    //     LoginPage.userDropdown.waitForClickable();
    //     LoginPage.userDropdown.click();
    //     LoginPage.orders.waitForClickable();
    //     LoginPage.orders.click();
    //     browser.pause(2000);
    //     expect(LoginPage.orderText.isDisplayed()).toEqual("true");
    // });


    it('1', () => {
        LoginPage.logout();
       // expect(ShopPage.topMenu.isDisplayed()).toEqual(false);
    });

    it('2 ', () => {
        LoginPage.open();
        LoginPage.login('2222@gmail.com', '22222');
        LoginPage.Courses.waitForClickable(2000);
        LoginPage.Courses.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('3 ', () => {
        LoginPage.Cards.waitForClickable(2000);
        LoginPage.Cards.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('4', () => {
        LoginPage.Diary.waitForClickable(2000);
        LoginPage.Diary.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('5', () => {
        LoginPage.Groups.waitForClickable(2000);
        LoginPage.Groups.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('6 ', () => {
        LoginPage.Challenges.waitForClickable(2000);
        LoginPage.Challenges.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('7', () => {
        LoginPage.Chat.waitForClickable(2000);
        LoginPage.Chat.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    it('8', () => {
        LoginPage.Goal.waitForClickable(2000);
        LoginPage.Goal.click();
        expect(LoginPage.Shop.getText()).toEqual('Shop');
    });

    // it('should login and validate Shop ', () => {
    //     LoginPage.userDropdown.waitForClickable();
    //     LoginPage.userDropdown.click();
    //     //LoginPage.orders.waitForClickable();
    //     browser.pause(1000);
    //     LoginPage.orders.click();
    //     browser.pause(1000);
    //     //expect(LoginPage.orderText.getText().toEqual(true));
    // });



});


