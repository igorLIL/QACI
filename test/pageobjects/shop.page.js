import Page from './page';

class ShopPage extends Page {

    //get logo () { return $(img[src="/static/lc-logo.308e6e9a.svg}"])};
    get firstProduct () {return $$('h3')[0]} ;
    get firstText () {return $$('.ant-col-lg-10')[0]};
    get firstImage () {return $$('.ant-col-lg-6')[0]};
    get firstPrice () {return $$('p')[0]};
    get topMenu () { return $$('#top-menu')[0]};
    get btnCreateProduct () { return $$('.ant-btn.ant-btn-primary.mb-1rem')[0]};
    get startLearning () { return $('a[href="/course/5d1cbad8086fc30038bf1856"]')};
    get editJssyntax () { return $$('.ant-btn.ant-btn-link.mb-1rem span')[0]};
    get checkEdit () { return $('.ant-drawer-title')};
    get checkCreatProduct () { return $('.ant-drawer-title')};
    get btnClose () { return $('.ant-drawer-close')};
    get deleteJssyntax () { return $$('.ant-btn.ant-btn-link.mb-1rem span')[1]};
    get clickDeleteText () { return $('.ant-modal-confirm-title')};
    get cancel () { return $$('.ant-btn')[24]};
    get newProduct () { return $('#name')};
    get newDescription () { return $('#description')};
    get linkPhoto () { return $('#productImages')};
    get newPrice () { return $('#price')};
    get btnCreate () { return $('.ant-btn.ant-btn-primary')}

    newProducts (name, description, photo, price) {
        this.newProduct.setValue(name);
        this.newDescription.setValue(description);
        this.linkPhoto.setValue(photo);
        this.newPrice.setValue(price);
        this.btnCreate.waitForClickable(2000);
        this.btnCreate.click();
    }
    get lastProduct () { return $$('h3')[$$('h3').length-1]};
    get lastProductDelete () { return $$('.ant-btn.ant-btn-link.mb-1rem')[$$('.ant-btn.ant-btn-link.mb-1rem').length-2]};
    get okDelete () { return $('.ant-btn.ant-btn-dangerous')};
}


export default new ShopPage();
