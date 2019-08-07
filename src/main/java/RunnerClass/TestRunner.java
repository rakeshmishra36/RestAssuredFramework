package RunnerClass;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.testng.annotations.BeforeSuite;

import Utility.cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;
import Utility.CommonMethod;

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
	

	@BeforeSuite
	public static void loggerProperties() {
		String configFileName = "./src/main/resources/log4j.properties";
		PropertyConfigurator.configure(configFileName);
	}
}
