package com.xavient.framework.WebApplicationSuite;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Hashtable;

import org.apache.log4j.Logger;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.xavient.framework.util.Constants;
import com.xavient.framework.util.Keywords_reflection;
import com.xavient.framework.util.Skip;
import com.xavient.framework.util.TestCaseDataProvider;
import com.xavient.framework.util.Utility;
import com.xavient.framework.util.Xls_Reader;

public class menu_management_search {
	
	
	@BeforeClass
	public void config() {
		Skip.screen();
		Skip.skip1();
	}
	
	@Test(dataProviderClass = TestCaseDataProvider.class, dataProvider = "getDataForWebApplicationSuite")
	public void menu_management_search(Hashtable<String, String> data)
			throws InterruptedException, IOException, IllegalAccessException, IllegalArgumentException,
			InvocationTargetException, NoSuchMethodException, SecurityException {

		Xls_Reader xls = new Xls_Reader(Constants.SUITEWEBAPPLICATION_XLS_PATH);

		String testName = "menu_management_search";

		Logger log = Utility.initLogs(testName, testName + " - " + data.get(Constants.ITERATION_COL));
		log.debug("Executing  " + testName + " - " + data.toString());
		Utility.validateTestExecution(testName, "webApplicationSuite", data.get(Constants.RUNMODE_COL), xls);
		// Keywords app = Keywords.getInstance();
		Keywords_reflection app = Keywords_reflection.getInstance();
		Keywords_reflection.setLogger(log);
		app.executeKeywords(testName, xls, data);
		log.debug("Ending " + testName);
		System.out.println(Thread.currentThread().getId());
	}

}
