package com.UndosTres.Test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		monochrome=true,
		features="Resources/Features/",
		glue={"com.UndosTres.stepdefs","com.UndosTres.test"},
		plugin= {"pretty", "html:target/Report/CucumberReport"}, 
		tags= {"@UnDosTres_Solution_1"}//Add Test tags here
		)
public class TestRunner {
	
	
 
}