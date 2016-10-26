

import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;


    public class ExcelUtils {
    	
	        private  HSSFSheet ExcelWSheet;
	        private  HSSFWorkbook ExcelWBook;
	        private  org.apache.poi.ss.usermodel.Cell Cell;
	        private  HSSFRow Row;               
	  
           
            public void setExcelFile(String Path) throws Exception {
            	try {
                    FileInputStream ExcelFile = new FileInputStream(Path);
                    ExcelWBook = new HSSFWorkbook(ExcelFile);
            	} catch (Exception e){
            		System.out.println("   Class Utils | Method setExcelFile | Exception desc : "+e.getMessage());
            	
                	}
            	}
            
              	
        	public int getRowCount(String SheetName){
        		int iNumber=0;
        		try {
        			ExcelWSheet = ExcelWBook.getSheet(SheetName);
        			iNumber=ExcelWSheet.getLastRowNum()+1;
        		} catch (Exception e){
        			System.out.println("   Class Utils | Method getRowCount | Exception desc : "+e.getMessage());
        	
        			}
        		return iNumber;
        		}
        	
        	public int getRowContains(String sTestCaseName, String ColName,String SheetName) throws Exception{
        		int iRowNum=0;	
        	//	int iRowNum=1;	
        		try {
        			int rowCount = getRowCount(SheetName);
        			for (; iRowNum<rowCount; iRowNum++){
        				if  (getCellData(iRowNum,ColName,SheetName).equalsIgnoreCase(sTestCaseName)){
        					break;
        				}
        			}       			
        		} catch (Exception e){
        			System.out.println("   Class Utils | Method getRowContains | Exception desc : "+e.getMessage());
        			
        			}
        		return iRowNum;
        		}
        	
        	public int getTestStepsCount(String SheetName, String sTestCaseID, int iTestCaseStart) throws Exception{
        		try {
        			int rowCount = getRowCount(SheetName)-1;
	        		for(int i=iTestCaseStart;i<rowCount;i++){
	        			if(!sTestCaseID.equals(getCellData(i, "Test Case ID", SheetName))){
	        				int number = i;
	        				return number;      				
	        				}
	        			}
	        		ExcelWSheet = ExcelWBook.getSheet(SheetName);
	        		int number=ExcelWSheet.getLastRowNum()+1;
	        		return number;
        		} catch (Exception e){
        			System.out.println("   Class Utils | Method getRowContains | Exception desc : "+e.getMessage());
        		
        			return 0;
                }
        	}
        	
        	@SuppressWarnings("static-access")
        	public void setCellData(String Result, int RowNum, String ColName, String SheetName,String test_data_file) throws Exception    {
               try{
            	   HSSFCellStyle cell_style;
            	   int ColNum = getColumnNumber(ColName,SheetName);
            	   ExcelWSheet = ExcelWBook.getSheet(SheetName);               	               		   
            	   cell_style = CreateCellStyle(ExcelWBook,Result);
                   Row  = ExcelWSheet.getRow(RowNum);
                   Cell = Row.getCell(ColNum, Row.RETURN_BLANK_AS_NULL);
                   if (Cell == null) {
                	   Cell = Row.createCell(ColNum);                     	   
                	   Cell.setCellValue(Result);
                	   //Cell.setCellStyle(cell_style);
                    } else {
                        Cell.setCellValue(Result);
                    }
                   Cell.setCellStyle(cell_style);
                   FileOutputStream fileOut = new FileOutputStream(test_data_file);
                   ExcelWBook.write(fileOut);                        
                   fileOut.close();
                   ExcelWBook = new HSSFWorkbook(new FileInputStream(test_data_file));
                 }catch(Exception e){
                	
          
                 }
            }
        	
            public int getColumnNumber(String ColName, String SheetName ) throws Exception{
                try{
	                	int ColNum=0;
	                	String CellData;                	
	                	ExcelWSheet = ExcelWBook.getSheet(SheetName);                 	
	                	int NumOfCols =ExcelWSheet.getRow(0).getLastCellNum();
                	
                	for(int iColNum=0; iColNum<NumOfCols;iColNum++)
                	{
                		Cell = ExcelWSheet.getRow(0).getCell(iColNum);
                		CellData = Cell.getStringCellValue();
                		if(CellData.equalsIgnoreCase(ColName))
                		{
                			ColNum = iColNum;
                			break;
                		}
                	}
                   	
                     return ColNum;
             
                 }catch (Exception e){                	 
                     System.out.println("   Class Utils | Method getColumnNumber | Exception desc : "+e);
                    
                     return -1;
                     }
                 }
            public String getCellData(int RowNum, String ColName, String SheetName ) throws Exception{
                try{
                	int ColNum = getColumnNumber(ColName,SheetName);
                	ExcelWSheet = ExcelWBook.getSheet(SheetName);
                   	Cell = ExcelWSheet.getRow(RowNum).getCell(ColNum);
                    String CellData = Cell.getStringCellValue();
                    return CellData.trim();              
                 }catch (Exception e){                	 
                     System.out.println("   Class Utils | Method getCellData | Exception desc : "+e);
                    
                     return"";
                     }
                 }
            
            public String getTestCaseID(String test_data_file) throws Exception{
            	
            	String sRunMode;
            	String sTestCaseID = "";
            	
            	setExcelFile(test_data_file);
            	int iTotalTestCases = getRowCount("Test Cases");	  
            	for(int iTestcase=1;iTestcase<iTotalTestCases;iTestcase++){
            		
            		sRunMode = getCellData(iTestcase, "Runmode","Test Cases");	
            		if (sRunMode.equals("Yes")){
            			sTestCaseID = getCellData(iTestcase, "Test Case ID", "Test Cases");
            			break;
            		}            	
            	}
            	return sTestCaseID;
            }
            
            private HSSFCellStyle CreateCellStyle(HSSFWorkbook wb,String Result) {
            	
            	HSSFCellStyle style = wb.createCellStyle();            	
        
               return style;
            }
            
            public void closeTestfile() throws Exception{
            	
            	//ExcelWBook.close();
            	
            	
            }

    	}