/*
//Specific confirguration for the current profile spec file
 */

var HtmlReporter = require('protractor-html-screenshot-reporter');
var baseConf = require('./base_conf.js'),baseConfig = new baseConf();

exports.config = {

    seleniumAddress : 'http://localhost:4444/wd/hub',

    specs : [
       // '../specs/Testcase_spec.js'
    ],

    params: {
        report: 'result',
        globalTimeout: baseConfig.timeout.pageLoad,
        waitForAngular: {
            angularFlag: true  //Only use false if timeout/interval for polling is failing.
            //angularDelay: baseConfig.timeout.angularDelay //this only goes into affect if angularFlag=false
        }
    },

    allScriptsTimeout: baseConfig.timeout.allScriptsTimeout,

    onPrepare: function() {
        browser.manage().timeouts().pageLoadTimeout(baseConfig.timeout.pageload);
        browser.manage().timeouts().implicitlyWait(baseConfig.timeout.implicitWait);
        browser.driver.manage().window().setSize(1000,1000);
        //Add a screenshot reporter and store screenshots to results folder. It will
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: "UB Reports",
            docTitle: 'UB Reports',
            docName: "Test" +'.html',
            takeScreenShotsOnlyForFailedSpecs: true
        }));
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: baseConfig.timeout.defaultTimeoutInterval
    }



};

//git clone https://ankurrishi20@bitbucket.org/ankurrishi20/mystuff.git