/**
 * Created by hverma on 7/29/2016.
 */

var data = require("../json/UserData.json");
var ssp_Page = require('../pages/ssp_Page.js');
var objects = require("../json/OR.json");

describe("CHANGE DUE DATE", function() {
	
	beforeEach(function() {

		ssp_Page.get(objects.SSPURL);
		browser.driver.manage().window().maximize();
		browser.executeScript('window.sessionStorage.clear()');
		browser.executeScript('window.localStorage.clear()');
		
	});
	
	afterEach(function() {
		browser.sleep("3000");
		browser.manage().deleteAllCookies(); 
		    
		
	});
	
	it("Change due date login with valid data", function() {
		
		ssp_Page.enterFieldValue(data.UserData.ChangeDueDate.Verification_code1, data.UserData.ChangeDueDate.Ported_tn);
		ssp_Page.Login();
		browser.sleep("3000");
		var changeDate_h1 = ssp_Page.changeDueDate();
		expect(changeDate_h1).toBe('REASON: CURRENT PHONE COMPANY UNABLE TO MEET REQUESTED INSTALLATION DATE');
		
			
		});
	
	
/*	xit("Date selection", function() {
		
		ssp_Page.enterFieldValue(data.UserData.ChangeDueDate.Verification_code, data.UserData.ChangeDueDate.Ported_tn);
		ssp_Page.Login();
		browser.sleep("3000");
		var changeDate = ssp_Page.changeDueDate_1();
		expect(changeDate).toBe('Your request to transfer the telephone number ending in 0379 to Charter Communications has been rejected by your current phone company. They are unable to meet the requested installation date.');
		browser.sleep("3000");
		ssp_Page.AcceptDate();
		browser.sleep("3000");
		var duedateConfirmationMessage = ssp_Page.dueDate_expiration();
		expect(duedateConfirmationMessage).toBe('Your order status: Rejected');

		
	});
*/
	it("Select different installation date", function () {
		
		ssp_Page.enterFieldValue(data.UserData.ChangeDueDate.Verification_code2, data.UserData.ChangeDueDate.Ported_tn);
		ssp_Page.Login();
		browser.sleep("3000");
		//ssp_Page.dateSelection();
		//ssp_Page.dateSelect();
		//browser.sleep("3000");
		ssp_Page.AcceptDate();
		var duedateConfirmationMessage = ssp_Page.dueDate_expiration();
		expect(duedateConfirmationMessage).toBe('Your order status: Rejected');
		
	});
	
});