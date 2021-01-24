import ShopPage from '../pageobjects/shop.page';
import LoginPage from "../pageobjects/login.page";

describe('', () => {
    it("Field Product", () => {
        LoginPage.open();
        LoginPage.login('2222@gmail.com', '22222');
        browser.pause(3000);
        LoginPage.shopOne.click();
        // expect(ShopPage.firstProduct.getText()).toEqual('JavaScript Syntax самостоятельно');
    });
    it('create new product', ()=> {
        browser.pause(2000);
        ShopPage.btnCreateProduct.click();
        ShopPage.newProducts('Shrek','Shrek forever','http://pngimg.com/uploads/shrek/shrek_PNG40.png','9999');
        // browser.pause(2000);
        // expect(ShopPage.lastProduct).toHaveText('Shrek');
    })

    // it('delete product', ()=> {
    //     browser.pause(2000);
    //     ShopPage.lastProductDelete.click();
    //     browser.pause(2000);
    //     ShopPage.okDelete.click();
    //     expect(ShopPage.lastProduct.getText()).toEqual('Shrek');
    // })
})