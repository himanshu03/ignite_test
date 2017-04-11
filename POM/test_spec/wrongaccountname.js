/**
 * Created by hverma on 7/29/2016.
 */

var objects = require("../json/OR.json");
var ssp_Page = require('../pages/ssp_Page.js');
var data = require("../json/UserData.json");

describe("Wrong Account name", function() {
	

    beforeEach(function() {
		
		ssp_Page.get(objects.SSPURL);

		browser.driver.manage().window().maximize();
		
	});
	
	afterEach(function() {
		
		browser.sleep(3000);
		
	});

	it("Account name with valid data", function() {
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID1,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.alphaCharacter(objects.AlphaCharacter.FirstName,objects.AlphaCharacter.LastName);
		browser.sleep(3000);
		ssp_Page.footerClick();
		ssp_Page.AccountNameSubmit();
		//ssp_Page.validationmessage();
		
	});
	
	it("Account name with valid Buisness name",function(){
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID2,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.accountBuisnessName(objects.BuisnessName.Buisness);
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		
		
		
	});
	
	
	it("Account Name with numeric character", function() {
		
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID3,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.alphaCharacter(objects.WrongName_inNumeric.firstname,objects.WrongName_inNumeric.lastname);
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		
	});
	
	it("Account name with numeric buisness name", function() {
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID4,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.accountBuisnessName(objects.NumericBuisnessName.Buisness);
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		
		
	});
	
	
	it("Account name with special character", function() {
		
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID5,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.alphaCharacter(objects.AccountName_specialCharacter.firstname,objects.AccountName_specialCharacter.lastname);
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		
	});
	
      it("Account name with buisness name in special character", function() {
		
		
 	    ssp_Page.enterFieldValue(objects.ValidLoginData.GUID6,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.accountBuisnessName(objects.SpecialCharacter_buisnessName.Buisness);
		ssp_Page.buisnessNameClick();  
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		
	});
	
	
	
	it("Verify AccountName message", function() {
		
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID7,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		var rejectionMessage = ssp_Page.AccountNameText();
        rejectionMessage.then(function(message1){
        expect(message1).toBe('Please provide the exact name on the account for the telephone number being transferred. Charter Communication will not be able to proceed with installation until the correct account name is supplied. We appreciate your immediate response to prevent a delay to your installation order.');
		browser.sleep(3000);
	});
    });
	it("Verify Account Name confirmation message", function(){
		
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID8,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.alphaCharacter(objects.AlphaCharacter.FirstName,objects.AlphaCharacter.LastName,objects.AlphaCharacter.Suffix);
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		browser.sleep(3000);
		var confirmationmessage = ssp_Page.confirmationMessage();
        confirmationmessage.then(function (message2) {
        expect(message2).toBe('Your Order Status: In Progress');
        		
		
	});
    });
	it("Account name validation message", function() {
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID9,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.AccountNameSubmit();
		browser.sleep(3000);
		var fname = ssp_Page.validationMessage2();
		//noinspection JSUnresolvedFunction
        expect(fname).toBe('First name cannot be left blank.');
		var lname = ssp_Page.validationMessage3();
		//noinspection JSUnresolvedFunction
        expect(lname).toBe('Last name cannot be left blank.');
	}); 
	
      it("Account name blank space in the begining", function() {
		
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID10,objects.ValidLoginData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		ssp_Page.alphaCharacter(objects.Wrongname_Space.firstname,objects.Wrongname_Space.lastname);
		ssp_Page.AccountNameSubmit();
	});
	
	
});

