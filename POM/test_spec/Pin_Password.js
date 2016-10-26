/**
 * Created by hverma on 7/29/2016.
 */

var data = require("../json/UserData.json");
var ssp_Page = require('../pages/ssp_Page.js');
var objects = require("../json/OR.json");

describe("Authorize Name scenarios", function() {
	
	beforeEach(function() {
		
		
		ssp_Page.get(objects.SSPURL);
		browser.driver.manage().window().maximize();
		browser.executeScript('window.sessionStorage.clear()');
		browser.executeScript('window.localStorage.clear()');
	});
	
	afterEach(function() {
		
		browser.sleep("2000");
	});
	
	it("Pin/Password login with numeric data", function() {
		
		ssp_Page.PinNameLogin(data.UserData.Pin_PasswordvalidLogin.GUID1,data.UserData.Pin_PasswordvalidLogin.TELEPHONENUMBER)
		ssp_Page.Login();
		browser.sleep("3000");
		var Rejection = ssp_Page.PinRejectionMessage().then(function (message5) {
		console.log(message5);
		browser.sleep("3000");
		expect(message5).toBe('REASON INCORRECT PIN/PASSWORD (What is a Pin/Password?)');
		ssp_Page.Pin_validData(data.UserData.Pin_validData.Pin_Password);
		ssp_Page.accountNumberSubmit();
		var Confirmation = ssp_Page.Pin_ConfirmationMessage().then(function(message2){
		expect(message2).toBe('Your Order Status: In Progress');
		});
		});
	});
	
   it("Pin/Password login with character data", function() {
		
		ssp_Page.PinNameLogin(data.UserData.Pin_PasswordvalidLogin.GUID2,data.UserData.Pin_PasswordvalidLogin.TELEPHONENUMBER)
		ssp_Page.Login();
		browser.sleep("3000");
        var Rejection = ssp_Page.PinRejectionMessage().then(function (message5) {
        console.log(message5);
        browser.sleep("3000");
        expect(message5).toBe('REASON INCORRECT PIN/PASSWORD (What is a Pin/Password?)');
		ssp_Page.Pin_validData(data.UserData.Pin_CharacterData.Pin_Password);
		ssp_Page.accountNumberSubmit();
		var Confirmation = ssp_Page.Pin_ConfirmationMessage();
	    Confirmation.then(function(message3){
		expect(message3).toBe('Your Order Status: In Progress');
	   });
        });
	});
   
   it("Pin/Password login with alphanumeric data", function() {
		
		ssp_Page.PinNameLogin(data.UserData.Pin_PasswordvalidLogin.GUID3,data.UserData.Pin_PasswordvalidLogin.TELEPHONENUMBER)
		ssp_Page.Login();
		browser.sleep("3000");
        var Rejection = ssp_Page.PinRejectionMessage().then(function (message5) {
        console.log(message5);
        browser.sleep("3000");
        expect(message5).toBe('REASON INCORRECT PIN/PASSWORD (What is a Pin/Password?)');
		ssp_Page.Pin_validData(data.UserData.Alphanumeric_data.Pin_Password);
		ssp_Page.accountNumberSubmit();
		var Confirmation = ssp_Page.Pin_ConfirmationMessage();
	    Confirmation.then(function(message4){
		expect(message4).toBe('Your Order Status: In Progress');
       expect(browser.getCurrentUrl()).toBe('https://sspgui-qa.neustar.com/charter#/thanks');
	   });
        });
	});
   
   it("Pin/Password login with invalid data", function() {
		
		ssp_Page.PinNameLogin(data.UserData.Pin_PasswordvalidLogin.GUID4,data.UserData.Pin_PasswordvalidLogin.TELEPHONENUMBER)
		ssp_Page.Login();
		browser.sleep("3000");
		var Rejection = ssp_Page.PinRejectionMessage();
       	expect(Rejection).toBe('REASON INCORRECT PIN/PASSWORD (What is a Pin/Password?)');
        ssp_Page.accountNumberSubmit();
        var blank = ssp_Page.pinblank();
        expect(blank).toBe('Pin/Password cannot be left blank.');
        browser.sleep('3000');
		ssp_Page.Pin_validData(data.UserData.Invalid_Data.invalid);
		ssp_Page.accountNumberSubmit();
         var messagep = ssp_Page.invalidPin_Password();
         messagep.then(function(message1) {
         expect(message1).toBe('Pin/Password must be of 4 to 15 alphanumeric characters in length.');

       });


   });



   });
	

   
