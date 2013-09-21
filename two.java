package igt1;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;


public class Combinetesting_inIE {
	
	@Test (priority=1)

	public void login() throws InterruptedException
	{
		System.setProperty("webdriver.ie.driver", "D://Downloads//IEDriverServer_Win32_2.33.0//IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
		driver.get("https://ignite.where2stageit.com");
		
		driver.findElement(By.xpath("//*[@id='loginid']")).sendKeys("qa_tester");
		driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Where2getit!");
		Thread.sleep(3000L);
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		driver.close();
	}
	
	@Test (priority=1)

	public void logout() throws InterruptedException
	{
		System.setProperty("webdriver.ie.driver", "D://Downloads//IEDriverServer_Win32_2.33.0//IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
		driver.get("https://ignite.where2stageit.com");
		
		driver.findElement(By.xpath("//*[@id='loginid']")).sendKeys("qa_tester");
		driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Where2getit!");
		Thread.sleep(3000L);
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		Thread.sleep(3000L);
		
		driver.findElement(By.xpath("//*[@id='logout-button']")).click();
		Thread.sleep(5000L);
		//File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		//FileUtils.copyFile(scrFile, new File("E://logout.jpg"),true);
		driver.close();

	}
	
	@Test(priority=1)

	public void forgot_password() throws InterruptedException
	{
		System.setProperty("webdriver.ie.driver", "D://Downloads//IEDriverServer_Win32_2.33.0//IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver();
		driver.get("https://ignite.where2stageit.com");
		
		driver.findElement(By.xpath("//*[@id='authenticate']/p/a")).click();
		Thread.sleep(3000L);
		String s1 = driver.findElement(By.xpath("//*[@id='authenticate']/div[1]/p[1]")).getText();
		System.out.println(s1);
		
		driver.findElement(By.xpath("//*[@id='username']")).sendKeys("qa_tester");
		
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		Thread.sleep(5000L);
		String s2 = driver.findElement(By.xpath("//*[@id='authenticate']/div")).getText();
		System.out.println(s2);
		driver.close();
		
	}

	@Test(priority=1)

	public void forgot_passwordwithAlert() throws InterruptedException
	{
		System.setProperty("webdriver.ie.driver", "D://Downloads//IEDriverServer_Win32_2.33.0//IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver();
		driver.get("https://ignite.where2stageit.com");
		
		driver.findElement(By.xpath("//*[@id='authenticate']/p/a")).click();
		Thread.sleep(3000L);
		String s1 = driver.findElement(By.xpath("//*[@id='authenticate']/div[1]/p[1]")).getText();
		System.out.println(s1);
		
		driver.findElement(By.xpath("//*[@id='username']")).sendKeys("");
		Thread.sleep(5000L);
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		Thread.sleep(3000L);
		
		Alert alert = driver.switchTo().alert();
		alert.getText();
		Thread.sleep(3000L);
		alert.accept();
		
        driver.findElement(By.xpath("//*[@id='username']")).sendKeys("qa_tester");
		
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		Thread.sleep(3000L);
		String s2 = driver.findElement(By.xpath("//*[@id='authenticate']/div")).getText();
		System.out.println(s2);
		driver.close();

	}
	@Test(priority=1)

	public void select_account() throws IOException, InterruptedException
	{
		System.setProperty("webdriver.ie.driver", "D://Downloads//IEDriverServer_Win32_2.33.0//IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
		driver.get("https://ignite.where2stageit.com");
		
		driver.findElement(By.xpath("//*[@id='loginid']")).sendKeys("qa_tester");
		driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Where2getit!");
		Thread.sleep(3000L);
		driver.findElement(By.xpath("//*[@id='submit']")).click();
		Thread.sleep(3000L);
		
		driver.findElement(By.xpath("//*[@id='accounts_chzn']/a/span")).sendKeys("chickfila");
		Thread.sleep(3000L);
		driver.findElement(By.xpath("//*[@id='btn-select-account']")).click();
		//Thread.sleep(10000L);
		
		//File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		//FileUtils.copyFile(scrFile, new File("E://account selection.jpg"),true);
		
		driver.close();
