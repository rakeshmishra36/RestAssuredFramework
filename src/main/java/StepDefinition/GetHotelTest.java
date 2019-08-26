package StepDefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.testng.Assert;

import Utility.CommonMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class GetHotelTest extends CommonMethod{
	
	public Response response;
	public File file;

	@Given("User provides environment and EndPoint details along with body")
	public void user_provides_environment_and_EndPoint_details_along_with_body() {
		Setup();
		logger.info("Environment data loaded");
	}

	@When("User submits a Rest webservice request with Get Method")
	public void Get_Rest_webservice_request() {
		response = httpGetMethod(requestBuilder(), prop.getProperty("HOTELINFOCALL"));
		logger.info("Rest request submitted with Get method");
	}
	
	@When("User submits a Rest webservice request with Post Method")
	public void Post_Rest_webservice_request() {
		file = new File("./src/main/resources/TestData/test.json");
		response = httpPostMethod(requestBuilder(), file, prop.getProperty("AVAILABILITYRATES"));
		logger.info("Rest request submitted with Post Method");
	}

	@Then("Verify status code of response")
	public void verify_Status_Code() {
		statusCode = getStatusCode(response);
		Assert.assertEquals(statusCode, 200);
		logger.info("Status code verified");
	}

	@Then("Verify status line of response")
	public void verify_Application_is_closed() {
		getStatusLine(response);
		logger.info("Status Line verified");
	}
	
	@Then("Verify contentType of response")
	public void verify_contentType_of_response() {
	    getContentType(response);
	    logger.info("Content Type verified");
	}

	@Then("Verify header value of response")
	public void verify_header_value_of_response() {
		getHeader(response, "ihg-language");
		logger.info("Header value verified");
	}

	@Then("Verify cookies of response")
	public void verify_cookies_of_response() {
	    getCookies(response);
	    logger.info("Cookies information verified");
	}

	@Then("Verify detailedCookies of response")
	public void verify_detailedCookies_of_response() {
	    getDetailedCookies(response);
	    logger.info("Detailed Cookies information verified");
	}

	@Then("Verify data of the body of response")
	public void verify_data_of_the_body_of_response() {
		getResponseTagValue(response, "roomPhotos.attributeCode");
		Assert.assertEquals(getTagValue.get(0), "K1QN");

		getResponseTagValue(response, "address.city");
		Assert.assertEquals(getTagValue.get(0), "Atlanta");
		
		getResponseTagValue(response, "address.postalCode");
		int postal = Integer.parseInt(getTagValue.get(0).toString());
		Assert.assertEquals(postal, 30338);
		
		getResponseTagValue(response, "address.lat");
		float Actual = Float.parseFloat(getTagValue.get(0).toString());
		Assert.assertEquals(Actual, 33.931834f);
		
		getResponseTagValue(response, "address.lng");
		float lng = Float.parseFloat(getTagValue.get(0).toString());
		Assert.assertEquals(lng, -84.344045f);
		
		getResponseTagValue(response, "address.distanceToCityCenter");
		float distanceToCityCenter = Float.parseFloat(getTagValue.get(0).toString());
		Assert.assertTrue(distanceToCityCenter > 0f);
		
		getResponseTagValue(response, "averageOverallRating");		
		double averageOverallRating = Double.parseDouble(getTagValue.get(0).toString());
		Assert.assertEquals(averageOverallRating, 4.7483444);
		
		System.out.println("Below is the response of Request");
		System.out.println("================================\n");
		
		response.getBody().prettyPeek();
		
		System.out.println("End of Response");
		System.out.println("===============");	
		

		List<String> list = rawToJson(response).getList("imageGroups.WELCM.images.caption");
		System.out.println("Value of list ======= " +list);
		
		
		Map<String, Map> hashMap = rawToJson(response).getMap("secondaryRatings");

		List labelList = new ArrayList();
		for (Entry<String, Map> outer : hashMap.entrySet()) {
			System.out.print(outer.getKey() + " >>> \n" + outer.getValue() + "\n");

			Map<String, Object> hashMap2 = outer.getValue();

			for (Entry<String, Object> inner : hashMap2.entrySet()) {
				System.out.print(inner.getKey() + " >>> \n" + inner.getValue() + "\n");
				if (inner.getKey().toString().equalsIgnoreCase("Label")) {
					labelList.add(inner.getValue());
					break;
				}
			}
		}
		System.out.println("Label Values for all >>> " + labelList);
		
		logger.info("Body data verified");		
	}	
}