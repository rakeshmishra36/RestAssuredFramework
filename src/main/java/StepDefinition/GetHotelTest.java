package StepDefinition;

import java.io.File;

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
	public void verify_Existing_Patient_Account_Message() {
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
		getResponseTagValue(response, "address.city");
	    Assert.assertEquals(getTagValue.get(0), "Atlanta");
	    logger.info("Body data verified");
	}
	
}