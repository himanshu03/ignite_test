/**
 * Created by hverma on 7/29/2016.
 */

var data = require('../json/UserData.json');
var ssp_Page = require('../pages/ssp_Page.js');
var objects = require("../json/OR.json");

describe("Wrong Address scenarios", function() {


    beforeEach(function() {


        ssp_Page.get(objects.SSPURL);

        //noinspection JSUnresolvedVariable
        browser.driver.manage().window().maximize();
    });

    afterEach(function() {

        browser.sleep(2000);
        //browser.driver.quit();
    });

    it("Wrong Address with valid data in character form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID1, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        var wrongAddressStatus = ssp_Page.wrongAddressrejectionStatus();
        //noinspection JSUnresolvedFunction
        expect(wrongAddressStatus).toBe('REASON: INCORRECT ACCOUNT ADDRESS');
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_Character.ADDRESS1,data.UserData.WrongAddressValidData_Character.UNIT,data.UserData.WrongAddressValidData_Character.CITY,data.UserData.WrongAddressValidData_Character.STATE,data.UserData.WrongAddressValidData_Character.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        browser.sleep(3000);
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        //noinspection JSUnresolvedFunction
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');
        browser.sleep(3000);


    });

    it("Wrong Address with valid data in Numeric form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID2, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_Numeric.ADDRESS1,data.UserData.WrongAddressValidData_Numeric.UNIT,data.UserData.WrongAddressValidData_Numeric.CITY,data.UserData.WrongAddressValidData_Numeric.STATE,data.UserData.WrongAddressValidData_Numeric.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        browser.sleep(3000);
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');

    });

    it("Wrong Address with valid data in Character Numeric form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID3, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_CharacterNumeric.ADDRESS1,data.UserData.WrongAddressValidData_CharacterNumeric.UNIT,data.UserData.WrongAddressValidData_CharacterNumeric.CITY,data.UserData.WrongAddressValidData_CharacterNumeric.STATE,data.UserData.WrongAddressValidData_CharacterNumeric.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        browser.sleep(3000);
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');

    });

    it("Wrong Address with valid data in Numeric Character form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID4, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_NumericCharacter.ADDRESS1,data.UserData.WrongAddressValidData_NumericCharacter.UNIT,data.UserData.WrongAddressValidData_NumericCharacter.CITY,data.UserData.WrongAddressValidData_NumericCharacter.STATE,data.UserData.WrongAddressValidData_NumericCharacter.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');

    });

    it("Wrong Address with valid data in CNNNNNNNN form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID5, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_CharacterNumericNNNNNNNNNN.ADDRESS1,data.UserData.WrongAddressValidData_CharacterNumericNNNNNNNNNN.UNIT,data.UserData.WrongAddressValidData_CharacterNumericNNNNNNNNNN.CITY,data.UserData.WrongAddressValidData_CharacterNumericNNNNNNNNNN.STATE,data.UserData.WrongAddressValidData_CharacterNumericNNNNNNNNNN.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');


    });

    it("Wrong Address with valid data in NCCCCCCCCCC form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID6, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_NumericCharacterCCCCCCCCC.ADDRESS1,data.UserData.WrongAddressValidData_NumericCharacterCCCCCCCCC.UNIT,data.UserData.WrongAddressValidData_NumericCharacterCCCCCCCCC.CITY,data.UserData.WrongAddressValidData_NumericCharacterCCCCCCCCC.STATE,data.UserData.WrongAddressValidData_NumericCharacterCCCCCCCCC.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');

    });

    it("Wrong Address with valid data in small character", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID7, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_smallCharacter.ADDRESS1,data.UserData.WrongAddressValidData_smallCharacter.UNIT,data.UserData.WrongAddressValidData_smallCharacter.CITY,data.UserData.WrongAddressValidData_smallCharacter.STATE,data.UserData.WrongAddressValidData_smallCharacter.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');


    });

    it("Wrong Address with city address in numeric form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID8, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_cityAddress.ADDRESS1,data.UserData.WrongAddressValidData_cityAddress.UNIT,data.UserData.WrongAddressValidData_cityAddress.CITY,data.UserData.WrongAddressValidData_cityAddress.STATE,data.UserData.WrongAddressValidData_cityAddress.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');


    });

    it("Wrong Address with city address in alpha numeric form", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID9, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_cityAddress_alphanumeric.ADDRESS1,data.UserData.WrongAddressValidData_cityAddress_alphanumeric.UNIT,data.UserData.WrongAddressValidData_cityAddress_alphanumeric.CITY,data.UserData.WrongAddressValidData_cityAddress_alphanumeric.STATE,data.UserData.WrongAddressValidData_cityAddress_alphanumeric.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');


    });

    it("Wrong Address with zipcode", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID10, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.wrongAddressValidData(data.UserData.WrongAddressValidData_Zipcode.ADDRESS1,data.UserData.WrongAddressValidData_Zipcode.UNIT,data.UserData.WrongAddressValidData_Zipcode.CITY,data.UserData.WrongAddressValidData_Zipcode.STATE,data.UserData.WrongAddressValidData_Zipcode.ZIPCODE);
        ssp_Page.accountNumberSubmit();
        var wrongAddressConfirmationMessage = ssp_Page.wrongAddressConfirmationMessage();
        expect(wrongAddressConfirmationMessage).toBe('Your Order Status: In Progress');

    });

    it("Wrong Address with blank data", function() {

        ssp_Page.wrongAddressLogin(data.UserData.WrongAddressLogin.GUID11, data.UserData.WrongAddressLogin.TELEPHONENUMBER);
        ssp_Page.Login();
        browser.sleep(3000);
        ssp_Page.accountNumberSubmit();
        var address1 = ssp_Page.BlankAddress_validation();
        expect(address1).toBe('Mailing Address cannot be left blank.');
        var city = ssp_Page.City_validation();
        expect(city).toBe('City cannot be left blank.');
        var State = ssp_Page.State_validation();
        expect(State).toBe('State cannot be left blank.');
        var Zipcode = ssp_Page.Zip_validation();
        expect(Zipcode).toBe('Zip code must be of 5 digits in length.');
    });


});
	