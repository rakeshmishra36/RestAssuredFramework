package Utility;

import static org.hamcrest.Matchers.equalTo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.Assert;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.Cookies;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class CommonMethod {

	public InputStream inputStream;
	public Properties prop;
	public List<String> list;
	public List<List<String>> excelSheetRows;
	public Workbook workBook = null;

	public static Logger logger;
	public RequestSpecification requestSpec;
	public RequestSpecification httpRequest;
	private String sessionId;
	private long time;

	public static int statusCode;
	public static String statusLine;
	public static String contentType;
	public static String headerKeyValue;
	public static String cookies;
	public static Cookies detailedCookies;
	public static List getTagValue;

	public static String environment;

	public void Setup() {
		logger = Logger.getLogger("ApplicationLog");
		String configFileName = "./src/main/resources/log4j.properties";
		PropertyConfigurator.configure(configFileName);
		getPropValues();
		httpRequest = RestAssured.given();
		environmentDetails(prop.getProperty("Environment"));

	}

	public void TearDown() throws IOException {
		inputStream.close();

	}

	public void getPropValues() {
		try {
			prop = new Properties();
			String propFileName = "configuration.properties";

			inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);

			if (inputStream != null) {
				prop.load(inputStream);
			} else {
				throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
			}

		} catch (IOException e) {
			System.out.println("Exception: " + e);
		}
	}
	
	public Response httpPostMethod(RequestSpecification requestSpec, File file, String uri) {
		return RestAssured.given().spec(requestSpec).body(file).request(Method.POST, uri);
	}
	
	public Response httpGetMethod(RequestSpecification requestSpec, String uri) {
		return RestAssured.given().spec(requestSpec).request(Method.GET, uri);
	}

	public void environmentDetails(String env) {
		switch (env) {
		case "INT":
			environment = "https://int-api.ihg.com";
			break;
		case "STG":
			environment = "https://int-api.ihg.com";
			break;
		case "PRD":
			environment = "https://int-api.ihg.com";
			break;
		case "QA":
			environment = "https://int-api.ihg.com";
			break;
		default:
			break;
		}

	}

	public RequestSpecification requestBuilder() {
		return requestSpec = new RequestSpecBuilder().setBaseUri(environment).setBasePath("/channels/native/")
				.addHeader("Content-Type", "application/json")
				.addHeader("X-IHG-API-KEY", "TcY3rs1QNdaVmlIng0LIIQNcQGj1CBE1")
				.addHeader("X-IHG-MWS-API-Token", "TcY3rs1QNdaVmlIng0LIIQNcQGj1CBE1")
				.addHeader("cache-control", "no-cache").addHeader("IHG-LANGUAGE", "en-us").build();
	}

	public int getStatusCode(Response response) {
		statusCode = response.statusCode();
		System.out.println("Status Code => " + statusCode);
		return statusCode;
	}

	public String getStatusLine(Response response) {
		statusLine = response.statusLine();
		System.out.println("Status Code => " + statusLine);
		return statusLine;
	}
	
	public String getSessionId(Response response) {
		sessionId = response.getSessionId();
		System.out.println("Session Id => " + sessionId);
		return sessionId;
	}
	
	public long getTime(Response response) {
		time = response.getTime();
		System.out.println("Session Id => " + time);
		return time;
	}
	
	

	public String getContentType(Response response) {
		contentType = response.contentType();
		System.out.println("Content Type => " + contentType);
		return contentType;
	}

	public String getHeader(Response response, String header) {
		Headers headers = response.getHeaders();
		System.out.println("All headers >>>>>>> " + headers);
		for (Header headerKey : headers) {
			if (header.toUpperCase().equalsIgnoreCase(headerKey.getName().toUpperCase())) {
				System.out.println("Key: " + headerKey.getName() + ", Value: " + headerKey.getValue());
				headerKeyValue = headerKey.getValue();
			}
		}
		return headerKeyValue;
	}

	public String getCookies(Response response) {
		cookies = response.getCookie("x");
		System.out.println("Cookies => " + cookies);
		return cookies;
	}

	public Cookies getDetailedCookies(Response response) {
		detailedCookies = response.getDetailedCookies();
		System.out.println("Detailed Cookies => " + detailedCookies);
		return detailedCookies;
	}

	public List getResponseTagValue(Response response, String xpath) {
		
		 /*if (response.getBody().path(xpath) instanceof Integer) {
		        System.out.println("This is an Integer");
		        getTagValue = response.getBody().path(xpath);
		    } else if(response.getBody().path(xpath) instanceof String) {
		        System.out.println("This is a String");
		        getTagValue = response.getBody().path(xpath);
		    } else if(response.getBody().path(xpath) instanceof Float) {
		        System.out.println("This is a Float");
		        getTagValue = response.getBody().path(xpath);
		    } else if(response.getBody().path(xpath) instanceof Long) {
		    	System.out.println("This is a Long");
		        getTagValue = response.getBody().path(xpath);
		    } else if(response.getBody().path(xpath) instanceof Date) {
		    	System.out.println("This is a Date");
		        getTagValue = response.getBody().path(xpath);
		    }*/
		
		
		
		 getTagValue = response.getBody().path(xpath);
		System.out.println("Tag Name : " + xpath + ",   Tag Value : " + getTagValue);
		return getTagValue;
	}
	
	
	
	
	public <T, U> List<U> getIntegerList(List<T> listOfString, Function<T, U> function) {
		return listOfString.stream().map(function).collect(Collectors.toList());		
	}
	
	

	public void getCellType(List<String> innerList, Row row, int j) {
		switch (row.getCell(j).getCellType()) {
		case BLANK:
			innerList.add("");
			break;

		case STRING:
			innerList.add(row.getCell(j).getStringCellValue());
			break;

		case NUMERIC:
			innerList.add(row.getCell(j).getNumericCellValue() + "");
			break;

		case BOOLEAN:
			innerList.add(row.getCell(j).getBooleanCellValue() + "");
			break;

		default:
			throw new IllegalArgumentException("Cannot read the column : " + j);
		}
	}

	public Workbook fileType(String filePath, String fileName) throws IOException {
		File file = new File(filePath + "/" + fileName);
		inputStream = new FileInputStream(file);
		String fileExtensionName = fileName.substring(fileName.indexOf("."));
		if (fileExtensionName.equals(".xlsx")) {
			workBook = new XSSFWorkbook(inputStream);
		} else if (fileExtensionName.equals(".xls")) {
			workBook = new HSSFWorkbook(inputStream);
		}
		return workBook;
	}

	public List<List<String>> readExcel(String filePath, String fileName, String sheetName) throws IOException {
		workBook = fileType(filePath, fileName);
		Sheet sheet = workBook.getSheet(sheetName);
		int rowCount = sheet.getLastRowNum() + 1;
		int columnCount = sheet.getRow(0).getLastCellNum();
		excelSheetRows = new LinkedList<>();
		for (int i = 1; i < rowCount; i++) {
			Row row = sheet.getRow(i);
			list = new LinkedList<>();
			for (int j = 0; j < columnCount; j++) {
				getCellType(list, row, j);
			}
			excelSheetRows.add(list);
		}
		inputStream.close();
		return excelSheetRows;
	}

	public void listToMap(String filePath, String fileName, String sheetName) throws IOException {
		List<List<String>> myList = readExcel(filePath, fileName, sheetName);
		System.out.println("List data >> \n" + myList);

		int size = myList.size();

		Map<String, String> testCaseMap = new HashMap<String, String>();

		for (int i = 0; i < size; i++) {
			String key = myList.get(i).get(0).toString();
			String value = myList.get(i).get(1).toString();
			testCaseMap.put(key, value);
			System.out.println("Value of " + key + " : " + testCaseMap.get(key));
		}
		System.out.println("Test case Map " + "\n" + testCaseMap);
	}

}