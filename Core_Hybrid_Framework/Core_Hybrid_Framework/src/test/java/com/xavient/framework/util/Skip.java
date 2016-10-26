package com.xavient.framework.util;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.xavient.framework.util.Constants;
import com.xavient.framework.util.Xls_Reader;
public class Skip {

	
	static Logger Application_Log;
	static Properties prop;
	public static Method method[];
	public static WebDriver driver;
	static HashMap<String,WebDriver> map;

	static String currentTestCaseName;
	static String currentIteration;
	public static Hashtable<String, String> data1;
	public static Xls_Reader xls = new Xls_Reader(Constants.SUITEWEBAPPLICATION_XLS_PATH);
	public static Xls_Reader xls1 = new Xls_Reader(Constants.TESTSUITE_XLS_PATH);
	public static int commonrunmod=1;
	public static int iterno=0;
	
	
	
	//Skip at suite level
	
	public static void skipatsuitelevel(String suitename)
	{
		int irow = xls1.getRowCount(Constants.TESTSUITE_SHEET);
		xls1.setCellData(Constants.TESTSUITE_SHEET, 2,1,"RESULT ");
		for(int rNum1 =2; rNum1<=irow;rNum1++)
		{
			String runmode = xls1.getCellData(Constants.TESTSUITE_SHEET, 1, rNum1);
			String value = xls1.getCellData(Constants.TESTSUITE_SHEET, 0, rNum1);
			
			if(value.equalsIgnoreCase(suitename)&&runmode.equalsIgnoreCase(Constants.RUNMODE_NO))
			{
				boolean flag1=xls1.setCellData(Constants.TESTSUITE_SHEET, 2, rNum1,Constants.SKIP);
			//System.out.println(flag1+" "+runmode+" "+value+" "+rNum1);
			}
		}
		
	}
	
	
	
	//Skip at test case level
	
	public static void skipattestlevel(String testid)
	{

		int irow = xls.getRowCount(Constants.TESTCASES_SHEET);
	boolean flag=xls.setCellData(Constants.TESTCASES_SHEET, 2,1,"RESULT ");
	System.out.println(flag);
		for(int rNum1 =2; rNum1<=irow;rNum1++)
		{
			String runmode = xls.getCellData(Constants.TESTCASES_SHEET, 1, rNum1);
			String value = xls.getCellData(Constants.TESTCASES_SHEET, 0, rNum1);
			if(value.equalsIgnoreCase(testid)&&runmode.equalsIgnoreCase(Constants.RUNMODE_NO))
			{
				boolean flag1=xls.setCellData(Constants.TESTCASES_SHEET, 2, rNum1,Constants.SKIP);
			//System.out.println(flag1+" "+runmode+" "+value+" "+rNum1);
			}
		}
		
	}
	
	

	//Skip data level function to write Skip text on xls
	public static void skipfunctiondatalevel(String testid,int iteration_no,int iTestidFRow)
	{
	int commoncounter=0;
	//Xls_Reader xls = new Xls_Reader(Constants.SUITEWEBAPPLICATION_XLS_PATH);
	int irow = xls.getRowCount(Constants.KEYWORDS_SHEET);
	int  tcidcount=1;
		//String sVlue = xls.getCellData(Constants.KEYWORDS_SHEET, 0, 1);
	//String sVlue1 = xls.getCellData(Constants.KEYWORDS_SHEET, 0, 2);
	//Skip result column
	int iCol = iteration_no + 4;
	xls.setCellData(Constants.KEYWORDS_SHEET, iCol,1,"RESULT "+iteration_no);
	//test id storage array
	String[] tcid= new String[irow+2];
	
	//array to read all test cases 
	//loop to store test ids.
	for(int rNum=2;rNum<=irow;rNum++)
	{
		String sVlue2 = xls.getCellData(Constants.KEYWORDS_SHEET, 0, rNum);
		//System.out.println(sVlue2);
		 tcid[rNum] =sVlue2;
		 if(sVlue2.equalsIgnoreCase(testid))
			 commoncounter++;
	}
	//System.out.println("Common counter ====="+commoncounter);
		int skiplimit = iTestidFRow+commoncounter;
		
		for(int setvlue=iTestidFRow; setvlue<skiplimit;setvlue++)
		
		{
			boolean mydataset =xls.setCellData(Constants.KEYWORDS_SHEET, iteration_no+4, setvlue,Constants.SKIP);
			System.out.println(mydataset+"---------------SKIP Function----------------- "+iteration_no);
		}
	
	}
	
	
	
	//Returns iteration number
	
	
	
	/*public static int iter_no(String testid)
	{
		
		String itrow;
		int counter2=0;
		int testCaseRowNum=1;
		while(!xls.getCellData(Constants.TestData_SHEET, 0, testCaseRowNum).trim().toLowerCase().equals(testid.toLowerCase())){
			testCaseRowNum++;
		}
		System.out.println(testCaseRowNum);
	
		// row for Column and Data
		int colStartRowNum=testCaseRowNum+1;
		int dataStartRowNum=testCaseRowNum+2;
		int rows=0;
		// total rows of data in the test
		while(!xls.getCellData(Constants.TestData_SHEET, 0, dataStartRowNum+rows).trim().equals("")){
			rows++;
		}
		System.out.println("Total rows "+ rows);

		//total cols
		int cols=0;
		while(!xls.getCellData(Constants.TestData_SHEET, cols, colStartRowNum).trim().equals("")){
			cols++;
		}
		//data of datasheet
		Object[][] testData = new Object[rows][1];
		int i =0;
		
		mainloop:

		for(int rNum=dataStartRowNum;rNum<dataStartRowNum+rows;rNum++){
			Hashtable<String,String> table = new Hashtable<String,String> ();
		
			
			for(int cNum=0;cNum<cols;cNum++){
			String data = xls.getCellData(Constants.TestData_SHEET, cNum, rNum);
			String colName = xls.getCellData(Constants.TestData_SHEET, cNum, colStartRowNum);
			
			System.out.println(colName+" --- "+data);
			
			table.put(colName, data);
			}
			
			for(int itr=dataStartRowNum;itr<dataStartRowNum+rows;itr++)
			{
				counter2++;
				String runm=xls.getCellData(Constants.TestData_SHEET, 1, itr);
				if(runm.equalsIgnoreCase(Constants.RUNMODE_NO)){
					//itrow = xls.getCellData(Constants.TestData_SHEET, 0, itr);
					System.out.println("entered in if condition.................");
					break mainloop;
				}
			}
			
			
			//put the hashtable in object Array
			testData[i][0]=table;
			i++;
		
		System.out.println("------------------------------------");
		iterno = counter2;
		
		}
		
		return counter2;
	
	}
	*/
	
	
	//Returns first row to of the testcase id
	
	public static int FRowtestcase(String testid)
	{
		int irow = xls.getRowCount(Constants.KEYWORDS_SHEET);
		//String[] tcid= new String[irow+2];
		int counter=0;
		//array to read all test cases 
		//loop to store test ids.
		for(int rNum=2;rNum<=irow;rNum++)
		{
			String sVlue2 = xls.getCellData(Constants.KEYWORDS_SHEET, 0, rNum);
			//System.out.println(sVlue2);
			 //tcid[rNum] =sVlue2;
			 if(sVlue2.equalsIgnoreCase(testid)){
				counter++; 
				break;
			 }
			 counter++;
		}
		System.out.println("counter    "+ counter);
		return counter+1;
		
	}
	
	//function to write test case name to Screeshot sheet.
	
	
	
	//screenshot
	
	public static void screen()
	{
		
		int irow =xls.getRowCount(Constants.TESTCASES_SHEET);
		
		for(int i=2;i<=irow;i++)
		{
			String testid = xls.getCellData(Constants.TESTCASES_SHEET, 0, i);
		System.out.println(testid);
		
		int testCaseRowNum=1;
		while(!xls.getCellData(Constants.TestData_SHEET, 0, testCaseRowNum).trim().toLowerCase().equals(testid.toLowerCase())){
			testCaseRowNum++;
		}
		System.out.println(testCaseRowNum+"----------------------------"+"Screen Function");
		int dataStartRowNum = testCaseRowNum +1;
		int rows =0;
		while(!xls.getCellData(Constants.TestData_SHEET, 0, dataStartRowNum+rows).trim().equals("")){
			rows++;
		}
		System.out.println("Total rows=========== "+ rows);
		
		xls.setCellData(Constants.SCREENSHOTS_SHEET,0,dataStartRowNum,testid);
	}
	}
	
	//try for varial skip numbers
	
	public static void skip1()
	{
		
		int irow =xls.getRowCount(Constants.TESTCASES_SHEET);
		String testid;
		for(int i=2;i<=irow;i++)
		{
			testid = xls.getCellData(Constants.TESTCASES_SHEET, 0, i);
		System.out.println(testid);
	
		int testCaseRowNum=1;
		while(!xls.getCellData(Constants.TestData_SHEET, 0, testCaseRowNum).trim().toLowerCase().equals(testid.toLowerCase())){
			testCaseRowNum++;
		}
		
		
		//System.out.println(testCaseRowNum+"----------------------------"+"Screen Function");
		
		
		int dataStartRowNum = testCaseRowNum +1;
		int rowno = testCaseRowNum +1;
		int rows =0;
		while(!xls.getCellData(Constants.TestData_SHEET, 0, dataStartRowNum+rows).trim().equals("")){
			rows++;
			String myvalue =xls.getCellData(Constants.TestData_SHEET,1,rowno);
			System.out.println(myvalue);
			if(myvalue.equalsIgnoreCase(Constants.RUNMODE_NO))
			{
				String myvalue1 =xls.getCellData(Constants.TestData_SHEET,0,rowno);	
				System.out.println("Iteration no. "+myvalue1 );
				int intvalue = Integer.parseInt(myvalue1);
				skipfunctiondatalevel(testid,intvalue, FRowtestcase(testid));
			}
			rowno++;
		}
		}
		//System.out.println("Total rows=========== "+ rows);
		
		
		
	}
	
	//running the class in stand alone
	
	
	
	public static void main(String[] args) {
		
		skip1();
		
	}

}
