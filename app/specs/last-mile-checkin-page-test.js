import LoginService from '../services/login-service';

const lmdCheckinUrl = '/inbound/lmd/runsheet/checkin';

describe('Last Mile Checkin Page', () => {
    beforeAll(() => {
        LoginService.login();
        
        browser.get(lmdCheckinUrl);

        browser.wait(() => {
            return element(by.css('.checkin-runsheets-list')).isPresent();
        });
    });

    it('should navigate to this page', () => {
        expect(browser.getCurrentUrl()).toContain(lmdCheckinUrl);
    });

    describe('Runsheet Title', () => {
        it('should navigate to last mile checkin page', () => {
            expect(browser.getTitle())
                .toBe('LMD Runsheet Checkin - LMS');
        });

        it('should have correct header title', () => {
            expect(element(by.css('.page-header')).getText())
                .toBe('LMD Runsheet Checkin 123');
        });
    });

    describe('Runsheet List', () => {
        it('should render runsheet details when choosing any runsheet', () => {
            element.all(by.css('.checkin-runsheets-list option:not(:nth-child(1))')).then((items) => {
                items.forEach(item => {
                    item.click();
                    //browser.sleep(1000);
                });
            });
        });
    });
});