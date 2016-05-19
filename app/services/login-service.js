const 
    loginUrl = '/login',
    USERNAME = 'admin',
    PASSWORD = 'admin';

export default {
    login() {
        browser.get(loginUrl);

        element(by.css('#username')).sendKeys(USERNAME);
        element(by.css('#password')).sendKeys(PASSWORD);
        element(by.css('#_submit')).click();
    }
}