/**
 * Created by hverma on 7/29/2016.
 */

var data = require("../json/UserData.json");
var ssp_Page = require('../pages/ssp_Page.js');
var objects = require("../json/OR.json");


describe("Freeze scenarios", function() {
	
	beforeEach(function() {

        ssp_Page.get(objects.SSPURL);
		browser.driver.manage().window().maximize();
		browser.executeScript('window.sessionStorage.clear()');
		browser.executeScript('window.localStorage.clear()');


		browser.driver.manage().window().maximize();
	});
	
	afterEach(function() {

		browser.sleep("3000");
		browser.manage().deleteAllCookies();
	});
	
	it("Login with valid data", function() {
		
		ssp_Page.enterFieldValue(data.UserData.FreezeValid_LoginData.GUID1,data.UserData.FreezeValid_LoginData.TELEPHONENUMBER);
  		browser.sleep(2000);
  		ssp_Page.Login();
        browser.sleep('2000');
        expect(browser.getCurrentUrl()).toBe('https://sspgui-qa.neustar.com/charter#/freeze');
  		ssp_Page.accountNumberSubmit();
  		var validationStatus = ssp_Page.freezeValidationMessage();

		expect(validationStatus).toBe('Confirmation number must be of 4 alphanumeric characters in length.');
		ssp_Page.freezeAccountValidData(data.UserData.Confirmation_Number.Number);
		ssp_Page.accountNumberSubmit();
		var freezeConfirm = ssp_Page.freezeConfirmationMessage();

		expect(freezeConfirm).toBe('Your Order Status: In Progress');
        browser.sleep(2000);
		//ssp_Page.clientRedirection();

		
	});
	
    it("Freeze with click on checkbox", function() {
		
		ssp_Page.enterFieldValue(data.UserData.FreezeValid_LoginData.GUID2,data.UserData.FreezeValid_LoginData.TELEPHONENUMBER);
  		browser.sleep("2000");
  		ssp_Page.Login();
  		ssp_Page.freezeAccountConfirm();
  		ssp_Page.accountNumberSubmit();
  		//ssp_Page.clientRedirection();
        var freezeConfirm = ssp_Page.freezeConfirmationMessage();

        expect(freezeConfirm).toBe('Your Order Status: In Progress');
		browser.sleep("2000");
		
	});
       
    it("Freeze with confirmation number in character form", function() {
   		
   		ssp_Page.enterFieldValue(data.UserData.FreezeValid_LoginData.GUID3,data.UserData.FreezeValid_LoginData.TELEPHONENUMBER);
     	browser.sleep("2000");
     	ssp_Page.Login();
     	ssp_Page.freezeAccountValidData(data.UserData.FreezeCharcaterData.Character);
     	ssp_Page.freezeAccountConfirm();
   		ssp_Page.accountNumberSubmit();
   		browser.sleep("2000");
		var freezeConfirm = ssp_Page.freezeConfirmationMessage();

		expect(freezeConfirm).toBe('Your Order Status: In Progress');
   		
   	});
       
    it("Freeze with confirmation number in alphanumeric form", function() {
      		
      		ssp_Page.enterFieldValue(data.UserData.FreezeValid_LoginData.GUID4,data.UserData.FreezeValid_LoginData.TELEPHONENUMBER);
        	browser.sleep("2000");
        	ssp_Page.Login();
        	ssp_Page.freezeAccountValidData(data.UserData.FreezeAlphanumericForm.alpha);
        	ssp_Page.freezeAccountConfirm();
      		ssp_Page.accountNumberSubmit();
      		browser.sleep("2000");
		var freezeConfirm = ssp_Page.freezeConfirmationMessage();

		expect(freezeConfirm).toBe('Your Order Status: In Progress');
      		
      	});


       
	
});