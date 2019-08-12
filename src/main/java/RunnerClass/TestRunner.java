package RunnerClass;

import java.util.Properties;

import org.apache.log4j.PropertyConfigurator;
import org.testng.annotations.BeforeSuite;

import Utility.CommonMethod;
import Utility.cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;

@CucumberOptions(
			features = "src/main/resources/FeatureFiles", 
			glue = { "StepDefinition" }, 
			plugin = { 
						"html:target/cucumber-reports/htmlReport",
						"json:target/cucumber-reports/JsonReport/CucumberTestReport.json", 
						"testng:target/cucumber-reports/xmlReport/CucumberTestReport.xml",
						"rerun:target/rerun.txt"
					 },
			//dryRun = true,
			monochrome = true
			//tags = {"@Basic,@Login"}  // - Logical OR
			//tags = {"@Basic","@Login"}   //- Logical AND
			//if want to ignore tag execution, Use ~ sign in front of tag
		)
public class TestRunner extends AbstractTestNGCucumberTests{
	
	public static CommonMethod commonMethod = new CommonMethod();;
	public static RequestSpecification httpRequest;
	public static Properties prop;
	public static String environment;
	
	@BeforeSuite
	public static void loggerProperties() {
		String configFileName = "./src/main/resources/log4j.properties";
		PropertyConfigurator.configure(configFileName);
		prop = commonMethod.getPropValues();
		httpRequest = RestAssured.given();
		environment = commonMethod.environmentDetails(prop.getProperty("Environment"));
	}
}
