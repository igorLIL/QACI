import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return  $$('.ant-input-lg')[0] }
    get inputPassword () { return  $$('.ant-input-lg')[1] }
    get btnSubmit () { return  $('.login-form-button') }

    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('login');
    }
    get Text () {return "Shop"};
    get userName () {return $('.ant-dropdown-link')};
    get Logout () {return $$('.ant-dropdown-menu-item-only-child')[3]};
    logout () {
        this.userName.click();
        this.Logout.click();
    }
    get Courses () {return  $('.item[data-qa="topmenu-Courses"]')};
    get Cards () {return  $('.item[data-qa="topmenu-Cards"]')};
    get Diary () {return  $('.item[data-qa="topmenu-Diary"]')};
    get Groups () {return  $('.item[data-qa="topmenu-Groups"]')};
    get Challenges () {return  $('.item[data-qa="topmenu-Challenges"]')};
    get Shop () {return  $('.item[data-qa="topmenu-Shop"]')};
    get Chat () {return  $('.item[data-qa="topmenu-Chat"]')};
    get Goal () {return  $('.item[data-qa="topmenu-Goals"]')};
    get orderText () {return $('//div[@class="container mt-4"]/text()')};
    get userDropdown () {return $('.ant-dropdown-trigger.ant-dropdown-link')};
    get orders () {return $$('.ant-dropdown-menu-item.ant-dropdown-menu-item-only-child')[2]};
}

export default new LoginPage();
