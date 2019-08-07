Feature: Enrollment Wizard Page
  
    In order to enroll a new patient
    launch enrollment wizard and enter the details

  Scenario: Enroll New Patient
    Given User provides environment and EndPoint details along with body
    When User submit a Rest webservice request
    Then Verify Existing Patient Account Message
    And Verify Application is closed