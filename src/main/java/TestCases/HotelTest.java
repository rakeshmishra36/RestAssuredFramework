package TestCases;

import static org.hamcrest.Matchers.equalTo;

import java.io.File;

import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Utility.CommonMethod;
import io.restassured.http.Cookies;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.http.Method;
import io.restassured.response.Response;

public class HotelTest extends CommonMethod {

	public Response response;
	public File file;

	@BeforeTest
	public void setup() {
		Setup();

	}

	// @Test
	public void distanceToCityCenter() {

		response = httpRequest.spec(requestBuilder()).request(Method.GET, prop.getProperty("HOTELINFOCALL"));

		statusCode = response.statusCode();
		System.out.println("Status Code => " + statusCode);
		Assert.assertEquals(statusCode, 200);

		String statusLine = response.statusLine();
		System.out.println("Status Line => " + statusLine);

		String contentType = response.contentType();
		System.out.println("Content Type => " + contentType);

		Headers headers = response.getHeaders();
		for (Header header1 : headers) {
			System.out.println("Key: " + header1.getName() + " Value: " + header1.getValue());
		}

		String cookies = response.getCookie("x");
		System.out.println("Cookies => " + cookies);

		Cookies detailedCookies = response.getDetailedCookies();
		System.out.println("Detailed Cookies => " + detailedCookies);

		String responseBody = response.getBody().asString();
		System.out.println("Response Body is =>  " + responseBody);

		response.then().body("address.city", equalTo("Atlanta"));

	}

	@Test
	public void Rating() {

		response = httpRequest.spec(requestBuilder()).request(Method.GET, prop.getProperty("HOTELINFOCALL"));

		statusCode = response.statusCode();
		System.out.println("Status Code => " + statusCode);
		Assert.assertEquals(statusCode, 200);

		String responseBody = response.getBody().prettyPrint();

		System.out.println("Response Body is =>  " + responseBody);

		response.then().body("averageOverallRating".toString(), equalTo(3.0811309157959434));

	}

	// @Test
	public void postService() throws Exception {
		file = new File("./src/main/resources/TestData/test.json");

		response = httpRequest.spec(requestBuilder()).body(file).request(Method.POST,
				prop.getProperty("AVAILABILITYRATES"));

		statusCode = getStatusCode(response);
		Assert.assertEquals(statusCode, 200);

		statusLine = getStatusLine(response);

		contentType = getContentType(response);

		headerKeyValue = getHeader(response, "ihg-language");

		cookies = getCookies(response);

		detailedCookies = getDetailedCookies(response);

		// response.getBody().prettyPrint();

		getTagValue = getResponseTagValue(response, "ratePlanDefinitions.code");
		System.out.println(getTagValue.get(5));

	}
}