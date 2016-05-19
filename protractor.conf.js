var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'report/',
    filename: 'index.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true
});

exports.config = {
    specs: ['./app/specs/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'https://lms-stag-sg.lzd.co',
    framework: 'jasmine',
    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        require('babel-core/register')({ babelrc: true });
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(reporter);
    },
    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};