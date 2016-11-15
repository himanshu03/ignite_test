/**
 * Created by hverma on 7/29/2016.
 */

describe('Verifying alert dialog', function(){
    
   it('Alert', function(){
      
       browser.get("https://sspgui-qa.neustar.com/charter#/");
       element(by.model('uuid')).sendKeys('SGPOM5');
       element(by.model('telephoneNumber')).sendKeys('262-361-0330');

       element(by.buttonText('Continue...')).click();

       element(by.buttonText('Submit')).click();
       browser.sleep("4000");

       element(by.buttonText('Ok')).click();
       /*var alertDialog = browser.switchTo().alert();
       alertDialog.getText().then(function(text){
       console.log(text);
       alertDialog.accept();  */
   });

   });


