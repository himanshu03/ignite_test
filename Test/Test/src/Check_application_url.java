
import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * @author hverma
 *
 *         This Class is Used to read the Url from Excel sheet,Launch the
 *         browser and Update the excel sheet.
 * 
 */

class Check_application_url {

	public WebDriver driver;
	String app_url = "";
	int RowCount = 0;
	int rs_cd = 0;
	String current_url;
	String page_title;
	String file_path = "D:\\SSP_Selenium Automation\\Test\\Test\\Url_Test_Data.xls";
	String browser_name = "IE";

	static boolean isRequstInProgress = false;

	/**
	 * 
	 * This Method is used to launch the browser.
	 * 
	 * @param browser
	 * @throws Exception
	 */
	public void Launch_Browser(String browser) throws Exception {

		if (browser.equalsIgnoreCase("firefox")) {
			// Open Fire fox
			driver = new FirefoxDriver();
		} else if (browser.equalsIgnoreCase("chrome")) {
			// OpenChrome

			File file = new File("D:\\Neustar\\Automation App support Tasks\\URL testing automation\\chromedriver.exe");

			System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("IE")) {
			// Internet Explorer
			File file = new File("D:\\JARS\\IEDriverServer_x64_2.53.1\\IEDriverServer.exe");
			System.setProperty("webdriver.ie.driver", file.getAbsolutePath());
			driver = new InternetExplorerDriver();
		} else {
			// Open Fire fox
			driver = new FirefoxDriver();
		}

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	/**
	 * 
	 * This Method is Used to update excel sheet according to url response.
	 * After Update excel sheet it forward request to Main Controller to read
	 * the data from updated excel. This is also handle the two request at same
	 * time.
	 * 
	 * @return forward:/readExcel
	 */
	// @RequestMapping(value = "/checkUrl")
	public ModelAndView check_url() {

		System.out.println("isRequstInProgress: " + isRequstInProgress);

		if (!isRequstInProgress) {

			isRequstInProgress = true;

			ModelAndView model = new ModelAndView("forward:/readExcel");
			ExcelUtils ExlObj = new ExcelUtils();

			try {

				ExlObj.setExcelFile(file_path);
			} catch (Exception e) {

				e.printStackTrace();
			}
			RowCount = ExlObj.getRowCount("URL");

			try {
				Launch_Browser(browser_name);
			} catch (Exception e) {

				e.printStackTrace();
			}
			driver.manage().window().maximize();

			for (int irow = 1; irow < RowCount; irow++)

			{
				try {
					app_url = ExlObj.getCellData(irow, "Application URL", "URL");
					ExlObj.setCellData("", irow, "Working Status", "URL", file_path);
					ExlObj.setCellData("", irow, "Message", "URL", file_path);
				} catch (Exception e) {

					e.printStackTrace();
				}

				driver.get(app_url);
				current_url = driver.getCurrentUrl();

				String actualTitle = driver.getTitle();
				System.out.println("ActualTitle is =" + actualTitle);
				try {
					ExlObj.setCellData(actualTitle, irow, "Message", "URL", file_path);
				} catch (Exception e1) {

					e1.printStackTrace();
				}

				if (actualTitle.equals("Problem loading page") || actualTitle.contains("Error")
						|| actualTitle.contains("failed to load") || actualTitle.contains("not available"))

					try {
						ExlObj.setCellData("FAILED", irow, "Working Status", "URL", file_path);

					} catch (Exception e) {

						e.printStackTrace();
					}
				else
					try {
						ExlObj.setCellData("PASSED", irow, "Working Status", "URL", file_path);

					} catch (Exception e) {

						e.printStackTrace();
					}
			}

			driver.quit();
			isRequstInProgress = false;
			return model;

		} else {

			System.out.println("forward .. requestDenied....");
			ModelAndView model = new ModelAndView("forward:/requestDenied");
			return model;
		}
	}

	public static void main(String[] args) throws Exception {

		Check_application_url obj = new Check_application_url();
		// obj.Launch_Browser("IE");
		obj.check_url();
	}
}