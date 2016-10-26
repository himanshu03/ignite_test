/**
 * Created by hverma on 7/29/2016.
 */

var objects = require('../json/OR.json');



var ssp_Page = function()
{


	this.enterFieldValue = function(GUID,TELEPHONENUMBER)
	{


		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);
	    //4980145
		//3195234252

	};

	this.VerificationGUIDText = function()

	{

		return element(by.xpath(objects.Locators.VerificationText.GUID)).getText();



		//return this;

	};

    this.VerificationTNText = function()

	{


		return element(by.xpath(objects.Locators.VerificationText.TELEPHONENUMBER)).getText();

		//return this;

	};
	this.TNText = function()
	{
		return element(by.xpath(objects.Locators.TN_Verification_Text.text)).getText();
	};

	/*this.alphaNumericTn = function(GUID, TELEPHONENUMBER)
	{
		element(by.model('uuid')).sendKeys(GUID);
		element(by.model('telephoneNumber')).sendKeys(TELEPHONENUMBER);
		return element(by.xpath("//*[@id='newUserForm']/div[3]/div[2]")).getText();

		//8013634
		//123asdfgh!
	};*/

     this.buisnessNameClick = function()
	 {
		 element(by.buttonText(objects.Locators.BuisnessNameClick.Click)).click();
	 };


	this.Login = function()
	{
		element(by.buttonText(objects.Locators.Login.LOGIN)).click();

	};

	this.get = function()
	{
		browser.get(objects.SSPURL);
	};

	this.guid_message = function()
	{
		return element.all(by.xpath(objects.Locators.Guid_InvalidMessage.Message)).getText();
	};

	this.guid_verification = function()
	{
		return element(by.xpath(objects.Locators.Guid_InvalidMessage1.Message1)).getText();
	};


	/*this.verifyTnFormat = function()
	{
		return element(by.model('telephoneNumber')).getText().then(function(text) {
			console.log(text);
		});
	};*/

	this.alphaCharacter = function(firstname, lastname)
	{
		element(by.model(objects.Locators.WrongName.firstName)).sendKeys(firstname);
		element(by.model(objects.Locators.WrongName.lastName)).sendKeys(lastname);


	};

	this.AccountNameSubmit = function()
	{
		element(by.buttonText(objects.Locators.WrongNameSubmit.SUBMIT)).click();

	};

	this.footerClick = function()
	{
		element(by.xpath(objects.Locators.footerClick.click));
	};

	this.specialCharacter = function(FIRSTNAME, LASTNAME)
	{
		element(by.model(objects.Locators.WrongName.firstName)).sendKeys(FIRSTNAME);
		element(by.model(objects.Locators.WrongName.lastName)).sendKeys(LASTNAME);

	};

	this.accountNameValidData = function(FIRSTNAME, LASTNAME, SUFFIX)
	{
		element(by.model(objects.Locators.WrongName.firstName)).sendKeys(FIRSTNAME);
		element(by.model(objects.Locators.WrongName.lastName)).sendKeys(LASTNAME);
		//element(by.xpath("//*[@id='myText']")).sendKeys(SUFFIX);

	};

	this.accountBuisnessName = function(BUISNESS_NAME)
	{

		element(by.model(objects.Locators.BuisnessName.Buisness)).sendKeys(BUISNESS_NAME);
	};

	this.AccountNameText = function()
	{

		return element(by.xpath(objects.Locators.AccountName.accountName)).getText();
	};

	this.confirmationMessage = function()
	{

		return element(by.xpath(objects.Locators.AccountName_confirmation.Confirmation_message)).getText();
	};

	this.validationMessage2 = function()
	{

		return element(by.xpath(objects.Locators.Blank_accountname.fname)).getText()
	};

	this.validationMessage3 = function()
	{
		return element(by.xpath(objects.Locators.Blank_accountname.lname)).getText()
	};

	this.validationessage = function()
	{
		browser.sleep(3000);
		browser.getAllWindowHandles().then(function (handles) {
	        newWindowHandle = handles[1];
	        browser.switchTo().window(newWindowHandle).then(function () {
	        	element(by.binding(""))
	        	element(by.buttonText('OK')).click();
	            expect(browser.getCurrentUrl()).toBe("http://10.61.4.102:5050/ccp/view/home/wname");
	            //to close the current window
	            browser.sleep(3000);

	            browser.driver.close().then(function () {
	                //to switch to the previous window
	            	browser.sleep(3000);
	               // browser.switchTo().window(handles[0]);
	            });

	        });

		});

	};

	/*
	this.validationmessage1 = function()
	{

		var alert_dialog = browser.switchTo().alert();
		alert_dialog.getText().then(function(text){
			console.log("text");
			alert_dialog.accept();

		});
	}; */
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


this.validAccountNumber = function(ACCOUNTNUMBER)
	{
	  element(by.model(objects.Locators.AccountNumber.AccountName)).sendKeys(ACCOUNTNUMBER);
	};

	this.accountNumberLogin = function(GUID, TELEPHONENUMBER)
	{
		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);

	};

	this.accountNumberSubmit = function()
	{

		element(by.buttonText(objects.Locators.AccountNumberSubmit.SUBMIT)).click();

	};

	this.accountNumberConfirmation = function()
	{
		return element(by.xpath(objects.Locators.accountNumberConfirmation.confirm)).getText();
	};

	this.accountNumberRejectionStatus = function()
	{
		return element(by.xpath(objects.Locators.accountNumberRejectionStatus.status)).getText();
	};

	this.clientRedirection = function()
	{
		element(by.xpath(objects.Locators.ClientRedirection.OK)).click();
	};

	this.blankAccountNumber = function()
	{

		return element(by.xpath(objects.Locators.blankAccountNumber.BlankMessage)).getText();
	};

	this.accountNumberCharacterField = function()
	{
		element(by.model('accname')).sendKeys('abcdefgh!@#$');

	};

	this.wrongAddressLogin = function(GUID, TELEPHONENUMBER)
	{
		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);
	};

	this.wrongAddressValidData = function(ADDRESS1, UNIT, CITY, STATE, ZIP)
	{
		element(by.model(objects.Locators.WrongAddress.ADDRESS1)).sendKeys(ADDRESS1);
		element(by.model(objects.Locators.WrongAddress.UNIT)).sendKeys(UNIT);
		element(by.model(objects.Locators.WrongAddress.CITY)).sendKeys(CITY);
		element(by.model(objects.Locators.WrongAddress.STATE)).sendKeys(STATE);
		element(by.model(objects.Locators.WrongAddress.ZIPCODE)).sendKeys(ZIP);

	};

	this.wrongAddressrejectionStatus = function()
	{

		return element(by.xpath(objects.Locators.wrongAddressrejectionStatus.Rejection)).getText();
	};

	this.wrongAddressConfirmationMessage = function()
	{
		return element(by.xpath(objects.Locators.wrongAddressConfirmationMessage.Confirm)).getText();
	};

	this.wrong_AddressRedirection = function()
	{
		element(by.xpath(objects.Locators.wrongAddressRedirection.Wrong_Address_Redirection)).click();
	};
	
	this.BlankAddress_validation = function()
	{

		return element(by.xpath(objects.Locators.address1_Blank.Address)).getText();
	};

	this.City_validation = function()
	{
		return element(by.xpath(objects.Locators.City_Blank.city)).getText();


	};

	this.State_validation = function()
	{
		return element(by.xpath(objects.Locators.State_Blank.state)).getText();
	};

	this.Zip_validation = function()
	{
		return element(by.xpath(objects.Locators.Zipcode_Blank.Zip)).getText();
	};

	this.AuthorizedNameLogin = function(GUID, TELEPHONENUMBER)
	{
		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);

	};

	this.authorizedNamerejectionMessage = function()
	{
		return element(by.xpath(objects.Locators.authorizedNamerejectionMessage.Rejection)).getText();
	};

	this.authorizedNameData = function(Authorized_Name)
	{
		element(by.model(objects.Locators.authorizedNameData.AuthorizeName)).sendKeys(Authorized_Name);
	};

	this.authorizedNameConfirmationMessage = function()
	{
		return element(by.xpath(objects.Locators.authorizedNameConfirmationMessage.Confirm)).getText();
	};

	this.authorizedNameBlankvalidation = function()
	{
		return element(by.xpath(objects.Locators.authorizedNameBlankvalidation.BlankMessage)).getText();

	};
	
	this.dueDate_expiration = function ()
	{
	   return element(by.xpath(objects.Locators.changeDueDateConfirmationMessage.Inprocess)).getText();	
	};

	this.freezeLoginData = function(GUID, TELEPHONENUMBER)
	{
		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);
	};

	this.freezeRejectionMessage = function()
	{
		return element(by.xpath(objects.Locators.freezeRejectionMessage.Rejection_Message)).getText();
	};

	this.freezeValidationMessage = function()
	{
		return element(by.xpath(objects.Locators.freezeValidationMessage.Template_Message)).getText();
	};

	this.freezeAccountValidData = function(CONFIRMATION_NUMBER)
	{
		element(by.model(objects.Locators.freezeAccountConfirmationNumber.Confirm)).sendKeys(CONFIRMATION_NUMBER);

	};

	this.freezeAccountConfirm = function()
	{
		element(by.model(objects.Locators.freezeAccountConfirmationClick.Click)).click();
	};

	this.freezeConfirmationMessage = function()
	{
		return element(by.xpath(objects.Locators.freezeConfirmationMessage.Confirmation_Message)).getText();
	};

	this.PinNameLogin = function(GUID, TELEPHONENUMBER)
	{
		element(by.model(objects.Locators.Login.GUID)).sendKeys(GUID);
		element(by.model(objects.Locators.Login.TELEPHONENUMBER)).sendKeys(TELEPHONENUMBER);

	};
	
	

	this.PinRejectionMessage = function()
	{
		return element(by.xpath(objects.Locators.Pin_RejectionMessage.rejection)).getText();
	};

	this.Pin_validData = function (PIN_PASSWORD)
	{
		element(by.model(objects.Locators.Pin_validData.PIN)).sendKeys(PIN_PASSWORD);
		return this;
	};

	this.Pin_ConfirmationMessage = function()
	{
		 return element(by.xpath(objects.Locators.Pin_Confirmation.Confirm)).getText();
	};

	this.invalidPin_Password = function()
	{
		return element(by.xpath(objects.Locators.Pin_InvalidData.InvalidKey)).getText();
	};
	
	this.pinblank = function()
	{
	   return element(by.xpath(objects.Locators.PinPassword_blank.blank)).getText();
	};

	this.changeDueDate = function()
	{
		return element(by.xpath(objects.Locators.changeDueDateText.changeDueDateRejectionHeading)).getText();
	};
	
	this.changeDueDate_1 = function () {
	
		return element(by.xpath(objects.Locators.changeDueDateText_1.changeDueDateRejectionMessage)).getText();
	};

	this.dateSelection = function()
	{
		element(by.buttonText(objects.Locators.DateSelection.Date)).click();
		//element(by.xpath(objects.Locators.DateSelection.Date)).click();

	};

    this.dateSelect = function()
    {
      element(by.buttonText(objects.Locators.Different_date.Date_value));
        
    };
    
	this.AcceptDate = function()
	{
		element(by.buttonText(objects.Locators.AcceptDate_Selection.Accept));
	};



};
module.exports = new ssp_Page();