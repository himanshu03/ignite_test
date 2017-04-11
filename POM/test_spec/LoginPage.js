/**
 * Created by hverma on 7/29/2016.
 */

var objects = require('../json/OR.json');
var ssp_Page = require('../pages/ssp_Page.js');


describe("SSP Login Scenarios", function() {
	
	
	
	
	beforeEach(function() {
		
		ssp_Page.get(objects.SSPURL);
		browser.driver.manage().window().maximize();
		
	});
	
	afterEach(function() {
		
		browser.sleep(3000);
		
	});
	
   it("Login with valid data",function(){

	   //expect(element(by.binding('/static/images/Shine_small.jpg')).getAttribute('src'))
		 //  .toMatch(/static/images/Shine_small.jpg);
	   var charterImage = ssp_Page.verifyImage();
	   expect(charterImage).toMatch();
		ssp_Page.enterFieldValue(objects.ValidLoginData.GUID,objects.ValidLoginData.TELEPHONENUMBER1);
  		browser.sleep(3000);
  		ssp_Page.Login();
  		browser.sleep(3000);
	    //ssp_Page.PageReload();
		browser.refresh();
		
	});
	
	xit("LoginPage with invalid GUID", function() {
		
		
		ssp_Page.enterFieldValue(objects.InvalidGUIDData.GUID,objects.InvalidGUIDData.TELEPHONENUMBER);
		browser.sleep(3000);
		ssp_Page.Login();
		browser.sleep(3000);
		var message1 = ssp_Page.guid_message();

		expect(message1).toBe('[The code is not valid. Please try again ]');
		
		
	});
	
     
      
      xit("LoginPage with valid guid with invalid TN", function() {
  		
  		
  		ssp_Page.enterFieldValue(objects.ValidGuid_InvalidTn.GUID,objects.ValidGuid_InvalidTn.TELEPHONENUMBER);
  		browser.sleep(3000);
  		ssp_Page.Login();
  		browser.sleep("3000");
  		var Tn_message = ssp_Page.TNText();

		  expect(Tn_message).toBe('Please enter valid Phone Number.');
  		
  		
  	});
      
      xit("LoginPage with valid Tn with invalid GUID", function() {
    		
    		
    		ssp_Page.enterFieldValue(objects.ValidTn_InvalidGuid.GUID,objects.ValidTn_InvalidGuid.TELEPHONENUMBER);
    		browser.sleep("3000");
    		ssp_Page.Login();
    		browser.sleep("3000");
    		var valid_guid = ssp_Page.guid_verification();
		    expect(valid_guid).toBe('Please enter valid Verification code.');
    		
    		
    		
    		
    	});
      
      
	
	xit("Login Message GUID popup message", function() {
		
		
		ssp_Page.Login();
		browser.sleep("3000");
		var getInvalidCodetext = ssp_Page.VerificationGUIDText();
    	expect(getInvalidCodetext).toBe('Please enter Verification code.');
		var getInvalidTnCode = ssp_Page.VerificationTNText();
		expect(getInvalidTnCode).toBe('Phone Number cannot be blank.');
		
		
		
	});
	
	
	
});	