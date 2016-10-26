package com.xavient.framework.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class OracleConnection {
	
	
	public static void updateTable(){
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");			
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@omsdb_qa_basic.neustar.biz:2115:nfclqa2","system","oracle");			
			Statement stmt=con.createStatement();			
			ResultSet rs=stmt.executeQuery("update ssp_message set Customer_submitted='0' where Ported_tn='262-361-2111'");					
			con.close();			
			System.out.println("Customer Submitted column value is changed successfully");			
		}
		catch(Exception ex){
			ex.printStackTrace();
		}
	}

}
