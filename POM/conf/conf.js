/**
 * Created by hverma on 7/29/2016.
 */

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    directConnect: true,


    capabilities: {
        browserName: 'chrome'
    },


    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',


    specs: ['../test_spec/LoginPage.js'],
    //allScriptsTimeout: 20000,

    // Options to be passed to Jasmine.

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },


    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../POM/HTML screenshot'
            , takeScreenShotsForSkippedSpecs: true
            , takeScreenShotsOnlyForFailedSpecs: true
            , takeScreenShotsOnlyForPassedSpecs: true
            , docTitle: 'ASR GUI Test Execution Report'
            , docName: 'tests-report.html'
        }));
    }





    /*onPrepare: function () {
     jasmine.getEnv().addReporter(new HtmlReporter({
     baseDirectory: 'C:/Users/hverma/AppData/Roaming/POM/node_modules/protractor-html-screenshot-reporter/examples/screenshots'
     ,takeScreenShotsForPassedSpecs: true
     ,takeScreenShotsForFailedSpecs: true
     }));
     */

/*
    onPrepare: function () {
        var HtmlScreenshotReporter = require('../protractor-jasmine2-screenshot-reporter');
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: './Reports',
            takeScreenShotsForPassedSpecs: true
            , takeScreenShotsForFailedSpecs: true,
            filename: 'Results.html'
        }));

    }

     */


/*
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }


*/



};