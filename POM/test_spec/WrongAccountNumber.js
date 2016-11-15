/**
 * Created by hverma on 7/29/2016.
 */

var data = require("../json/UserData.json");
var ssp_Page = require('../pages/ssp_Page.js');
var objects = require("../json/OR.json");

describe("Account number scenarios", function() {
	
	beforeEach(function() {
		
		
		ssp_Page.get(objects.SSPURL);
		browser.driver.manage().window().maximize();
	});
	
	afterEach(function() {
		
		browser.sleep(2000);
	});
	
	
	xit("Account number login with valid data", function() {
		
		ssp_Page.enterFieldValue(data.UserData.ValidAccountNumberLoginData.GUID,data.UserData.ValidAccountNumberLoginData.TELEPHONENUMBER);
  		//browser.sleep(2000);
  		ssp_Page.Login();
  		//browser.sleep(2000);
  		ssp_Page.validAccountNumber(data.UserData.ValidAccountNumber.AccountNumber);
  	    //browser.sleep(2000);
  		ssp_Page.accountNumberSubmit();

		
		
	});
	
	xit("Account number login with character", function() {
		
		ssp_Page.enterFieldValue(data.UserData.ValidAccountNumberLoginData.GUID,data.UserData.ValidAccountNumberLoginData.TELEPHONENUMBER);
  		//browser.sleep(2000);
  		ssp_Page.Login();
  		browser.sleep(2000);
  		ssp_Page.validAccountNumber(data.UserData.AccountNumber_character.AccountNumber);
  	   // browser.sleep(2000);
  		ssp_Page.accountNumberSubmit();
  		
		
		
	});
	
        xit("Account number login with alphanumeric", function() {
		
		ssp_Page.enterFieldValue(data.UserData.ValidAccountNumberLoginData.GUID,data.UserData.ValidAccountNumberLoginData.TELEPHONENUMBER);
  		//browser.sleep(2000);
  		ssp_Page.Login();
  		//browser.sleep(2000);
  		ssp_Page.validAccountNumber(data.UserData.AccountNumber_alphanumeric.AccountNumber);
  	   // browser.sleep(2000);
  		ssp_Page.accountNumberSubmit();
  		//browser.sleep(2000);
  		//ssp_Page.clientRedirection();
		
		
	});
        
        xit("Account number login with message verification", function() {

            ssp_Page.enterFieldValue(data.UserData.ValidAccountNumberLoginData.GUID, data.UserData.ValidAccountNumberLoginData.TELEPHONENUMBER);
            browser.sleep(2000);
            ssp_Page.Login();
            browser.sleep(2000);
            var status = ssp_Page.accountNumberRejectionStatus();
            status.then(function (message2) {
                expect(message2).toBe('REASON INCORRECT ACCOUNT NUMBER (What is an Account Number)');
                ssp_Page.validAccountNumber(data.UserData.AccountNumber_alphanumeric.AccountNumber);
                ssp_Page.accountNumberSubmit();

            });
        });

        xit("Account number login with blank data", function() {
    		
    		ssp_Page.enterFieldValue(data.UserData.ValidAccountNumberLoginData.GUID,data.UserData.ValidAccountNumberLoginData.TELEPHONENUMBER);
      		browser.sleep(2000);
      		ssp_Page.Login();
      		browser.sleep(2000);
      		ssp_Page.accountNumberSubmit();
      		var blankStatus = ssp_Page.blankAccountNumber();
            blankStatus.then(function (message1) {
            console.log(message1)
            expect(message1).toBe('The account number must be of 6 alphanumeric characters in length.');

      		
    		
    		
    	});



            });


	
});