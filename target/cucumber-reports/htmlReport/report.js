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
  "location": "GetHotelTest.verify_Status_Code()"
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
  "error_message": "java.lang.IllegalArgumentException: Invalid JSON expression:\r\nScript1.groovy: 1: unexpected token: *. @ line 1, column 44.\r\n   onRootObject.secondaryRatings.*.Id\r\n                                 ^\r\n\r\n1 error\r\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:257)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getAsJsonObject(JSONAssertion.groovy:57)\r\n\tat io.restassured.internal.path.json.JSONAssertion$getAsJsonObject.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getResult(JSONAssertion.groovy:28)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:203)\r\n\tat io.restassured.path.json.JsonPath$get$0.call(Unknown Source)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsGroovyImpl.path(RestAssuredResponseOptionsGroovyImpl.groovy:405)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsImpl.path(RestAssuredResponseOptionsImpl.java:230)\r\n\tat Utility.CommonMethod.getResponseTagValue(CommonMethod.java:174)\r\n\tat StepDefinition.GetHotelTest.verify_data_of_the_body_of_response(GetHotelTest.java:113)\r\n\tat ✽.Verify data of the body of response(file:src/main/resources/FeatureFiles/getHotelDetails.feature:15)\r\nCaused by: org.codehaus.groovy.control.MultipleCompilationErrorsException: startup failed:\r\nScript1.groovy: 1: unexpected token: *. @ line 1, column 44.\r\n   onRootObject.secondaryRatings.*.Id\r\n                                 ^\r\n\r\n1 error\r\n\r\n\tat org.codehaus.groovy.control.ErrorCollector.failIfErrors(ErrorCollector.java:311)\r\n\tat org.codehaus.groovy.control.ErrorCollector.addFatalError(ErrorCollector.java:151)\r\n\tat org.codehaus.groovy.control.ErrorCollector.addError(ErrorCollector.java:121)\r\n\tat org.codehaus.groovy.control.ErrorCollector.addError(ErrorCollector.java:133)\r\n\tat org.codehaus.groovy.control.SourceUnit.addError(SourceUnit.java:325)\r\n\tat org.codehaus.groovy.antlr.AntlrParserPlugin.transformCSTIntoAST(AntlrParserPlugin.java:224)\r\n\tat org.codehaus.groovy.antlr.AntlrParserPlugin.parseCST(AntlrParserPlugin.java:190)\r\n\tat org.codehaus.groovy.control.SourceUnit.parse(SourceUnit.java:226)\r\n\tat org.codehaus.groovy.control.CompilationUnit$1.call(CompilationUnit.java:196)\r\n\tat org.codehaus.groovy.control.CompilationUnit.applyToSourceUnits(CompilationUnit.java:965)\r\n\tat org.codehaus.groovy.control.CompilationUnit.doPhaseOperation(CompilationUnit.java:647)\r\n\tat org.codehaus.groovy.control.CompilationUnit.processPhaseOperations(CompilationUnit.java:623)\r\n\tat org.codehaus.groovy.control.CompilationUnit.compile(CompilationUnit.java:600)\r\n\tat groovy.lang.GroovyClassLoader.doParseClass(GroovyClassLoader.java:390)\r\n\tat groovy.lang.GroovyClassLoader.access$300(GroovyClassLoader.java:89)\r\n\tat groovy.lang.GroovyClassLoader$5.provide(GroovyClassLoader.java:330)\r\n\tat groovy.lang.GroovyClassLoader$5.provide(GroovyClassLoader.java:327)\r\n\tat org.codehaus.groovy.runtime.memoize.ConcurrentCommonCache.getAndPut(ConcurrentCommonCache.java:147)\r\n\tat groovy.lang.GroovyClassLoader.parseClass(GroovyClassLoader.java:325)\r\n\tat groovy.lang.GroovyShell.parseClass(GroovyShell.java:540)\r\n\tat groovy.lang.GroovyShell.parse(GroovyShell.java:552)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:436)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:475)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:446)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:179)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.call(PogoMetaMethodSite.java:70)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:127)\r\n\tat io.restassured.internal.path.json.JSONAssertion.eval(JSONAssertion.groovy:80)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getAsJsonObject(JSONAssertion.groovy:46)\r\n\tat io.restassured.internal.path.json.JSONAssertion$getAsJsonObject.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getResult(JSONAssertion.groovy:28)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:203)\r\n\tat io.restassured.path.json.JsonPath$get$0.call(Unknown Source)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsGroovyImpl.path(RestAssuredResponseOptionsGroovyImpl.groovy:405)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsImpl.path(RestAssuredResponseOptionsImpl.java:230)\r\n\tat Utility.CommonMethod.getResponseTagValue(CommonMethod.java:174)\r\n\tat StepDefinition.GetHotelTest.verify_data_of_the_body_of_response(GetHotelTest.java:113)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat Utility.cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:92)\r\n\tat Utility.cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
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
  "location": "GetHotelTest.verify_Status_Code()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [200] but found [422]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat StepDefinition.GetHotelTest.verify_Status_Code(GetHotelTest.java:51)\r\n\tat ✽.Verify status code of response(file:src/main/resources/FeatureFiles/postHotelDetails.feature:9)\r\n",
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
});