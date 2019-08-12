Feature: Hotel details webservices with Post Method
  
  In order to get hotel details
    Submit hotel details Rest services with GET method

  Scenario: Hotel details Post request
    Given User provides environment and EndPoint details along with body
    When User submits a Rest webservice request with Post Method
    Then Verify status code of response
    And Verify status line of response
    And Verify contentType of response
    And Verify header value of response
    And Verify cookies of response
    And Verify detailedCookies of response