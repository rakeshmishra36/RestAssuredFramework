$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/FeatureFiles/getHotelDetails.feature");
formatter.feature({
  "name": "Hotel details webservices with Get Method",
  "description": "    In order to get hotel details\n    Submit hotel details Rest services with GET method",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hotel details Get request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User provides environment and EndPoint details along with body",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHotelTest.user_provides_environment_and_EndPoint_details_along_with_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User submits a Rest webservice request with Get Method",
  "keyword": "When "
});
formatter.match({
  "location": "GetHotelTest.Get_Rest_webservice_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code of response",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHotelTest.verify_Existing_Patient_Account_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status line of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_Application_is_closed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify contentType of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_contentType_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify header value of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_header_value_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify cookies of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_cookies_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify detailedCookies of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_detailedCookies_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify data of the body of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_data_of_the_body_of_response()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinition.GetHotelTest.verify_data_of_the_body_of_response(GetHotelTest.java:77)\r\n\tat ✽.Verify data of the body of response(file:src/main/resources/FeatureFiles/getHotelDetails.feature:15)\r\n",
  "status": "failed"
});
formatter.uri("file:src/main/resources/FeatureFiles/postHotelDetails.feature");
formatter.feature({
  "name": "Hotel details webservices with Post Method",
  "description": "  In order to get hotel details\n    Submit hotel details Rest services with GET method",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hotel details Post request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User provides environment and EndPoint details along with body",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHotelTest.user_provides_environment_and_EndPoint_details_along_with_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User submits a Rest webservice request with Post Method",
  "keyword": "When "
});
formatter.match({
  "location": "GetHotelTest.Post_Rest_webservice_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code of response",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHotelTest.verify_Existing_Patient_Account_Message()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [200] but found [422]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat StepDefinition.GetHotelTest.verify_Existing_Patient_Account_Message(GetHotelTest.java:40)\r\n\tat ✽.Verify status code of response(file:src/main/resources/FeatureFiles/postHotelDetails.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify status line of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_Application_is_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify contentType of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_contentType_of_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify header value of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_header_value_of_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify cookies of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_cookies_of_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify detailedCookies of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_detailedCookies_of_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify data of the body of response",
  "keyword": "And "
});
formatter.match({
  "location": "GetHotelTest.verify_data_of_the_body_of_response()"
});
formatter.result({
  "status": "skipped"
});
});