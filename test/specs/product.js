//const ShopPage = require('./pageobjects/shop.page');
import LoginPage from '../pageobjects/login.page';
import ShopPage from '../pageobjects/shop.page';

    describe('Page Product',  () => {
        it("Field Product", () => {
            LoginPage.open();
            LoginPage.login('2222@gmail.com', '22222');
            browser.pause(2000);
            LoginPage.Shop.click();
            browser.pause(2000);
            //expect(ShopPage.firstProduct.isDisplayed()).toEqual('true')
            expect(ShopPage.firstProduct.getText()).toEqual('JavaScript Syntax самостоятельно');
        });
        it("Field JSsyntax", () => {
            browser.pause(2000);
            expect(ShopPage.firstText.isDisplayed()).toEqual(true);
        });
        it("Field text", () => {
            browser.pause(2000);
            expect(ShopPage.firstImage.isDisplayed()).toEqual(true);
        });

        it("Button Create New Product", () => {
            browser.pause(2000);
            expect(ShopPage.btnCreateProduct.isDisplayed()).toEqual(true);
        });
        it("Validation click button Create New Product", () => {
            ShopPage.btnCreateProduct.click();
            browser.pause(2000);
            expect(ShopPage.checkCreatProduct).toHaveText('Create new Product');
        });

        it("Price JSsyntax", () => {
            browser.refresh();
            browser.pause(2000);
            expect(ShopPage.firstPrice).toHaveText('FREE');
        });

        it("Start learning validation", () => {
            browser.pause(2000);
            expect(ShopPage.startLearning).toHaveText('Start learning');
        });
        it("Validation tab Edit JSsyntax", () => {
            browser.pause(2000);
            expect(ShopPage.editJssyntax).toHaveText('Edit');
        });
        it('Validation Edit click', () => {
            ShopPage.editJssyntax.click();
            browser.pause(2000);
            expect(ShopPage.checkEdit).toHaveText('Edit Product')
        });
        it('Validation Delete in the JSsyntax is present', () => {
            ShopPage.btnClose.click();
            browser.pause(2000);
            expect(ShopPage.deleteJssyntax).toHaveText('Delete')
        });
        it('Validation click Delete', () => {
            ShopPage.deleteJssyntax.click();
            browser.pause(2000);
            expect(ShopPage.clickDeleteText).toHaveText('Are you sure you want to delete the following product:')
            //ShopPage.cancel.click();
        })

    })