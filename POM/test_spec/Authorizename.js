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
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        
		
	});
	
	afterEach(function() {
		
		    
		
	});
	
    it("Authorize name with valid data", function() {
		
	ssp_Page.AuthorizedNameLogin(data.UserData.AuthorizedName_ValidLoginData.GUID1, data.UserData.AuthorizedName_ValidLoginData.TELEPHONENUMBER);
	ssp_Page.Login();
	browser.sleep(3000);
	var authorizedrejection = ssp_Page.authorizedNamerejectionMessage();
	expect(authorizedrejection).toBe('REASON: INCORRECT AUTHORIZATION ACCOUNT NAME (What is an Authorization Name?)');
	browser.sleep(3000);
	ssp_Page.authorizedNameData(data.UserData.AuthorizedName_ValidData.Name);
	ssp_Page.accountNumberSubmit();
	browser.sleep('3000');
	var authorizedNameConfirmationMessage = ssp_Page.authorizedNameConfirmationMessage();
	expect(authorizedNameConfirmationMessage).toBe('Your Order Status: In Progress');
	browser.sleep(3000);

	});
    
    it("Authorize name with numeric data", function() {
		
    	ssp_Page.AuthorizedNameLogin(data.UserData.AuthorizedName_ValidLoginData.GUID2, data.UserData.AuthorizedName_ValidLoginData.TELEPHONENUMBER);
    	ssp_Page.Login();
    	browser.sleep(3000);
    	ssp_Page.authorizedNameData(data.UserData.AuthorizedName_InvalidData.Name);
		browser.sleep('3000');
    	ssp_Page.accountNumberSubmit();
		var authorizedNameConfirmationMessage = ssp_Page.authorizedNameConfirmationMessage();
		expect(authorizedNameConfirmationMessage).toBe('Your Order Status: In Progress');

    	});  
    
    it("Authorize name with alphanumeric data", function() {
		
    	ssp_Page.AuthorizedNameLogin(data.UserData.AuthorizedName_ValidLoginData.GUID3, data.UserData.AuthorizedName_ValidLoginData.TELEPHONENUMBER);
    	ssp_Page.Login();
    	browser.sleep(3000);
    	ssp_Page.authorizedNameData(data.UserData.AuthorizedName_InvalidData1.Name);
		browser.sleep('3000');
    	ssp_Page.accountNumberSubmit();
		var authorizedNameConfirmationMessage = ssp_Page.authorizedNameConfirmationMessage();
		expect(authorizedNameConfirmationMessage).toBe('Your Order Status: In Progress');

    	}); 
    
    it("Authorize name with blank data", function() {
    	
    	ssp_Page.AuthorizedNameLogin(data.UserData.AuthorizedName_ValidLoginData.GUID4, data.UserData.AuthorizedName_ValidLoginData.TELEPHONENUMBER);
    	ssp_Page.Login();
    	browser.sleep(3000);
    	ssp_Page.accountNumberSubmit();
    	browser.sleep(3000);
		var authorizedBlank = ssp_Page.authorizedNameBlankvalidation();
		expect(authorizedBlank).toBe('Authorization name must be of 5 alphanumeric characters in length.');
    	
    });



});