import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class test_001 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		WebDriver driver = new FirefoxDriver();
		//driver.manage().timeouts().implicitlyWait(8L, TimeUnit.SECONDS);
		driver.get("http://www.rediff.com");
		driver.findElement(By.xpath("//*[@id='signin_info']/a[1]")).click();
		driver.findElement(By.xpath("//*[@id='btn_login']")).click();
		
		
		Alert alert = driver.switchTo().alert();
		alert.getText();
		alert.accept();
		driver.close();

	}

}
