package com.UndosTres.stepdefs;

import Project_UndosTres.UndosTres_Pages.Pay_Functionality_Page;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Payment_Functionality_stepdef {

	Pay_Functionality_Page pay_Functionality_page=new Pay_Functionality_Page();
	
	@Given("^Open URL \"(.*?)\" in \"(.*?)\"$")
	public void open_URL(String URL,String Browser){
	    
		pay_Functionality_page.UndosTres_Initiatedriver(URL,Browser);
		
	}
	
	@Then("^Select Recargas celular tab$")
	public void Select_Recargas_celular_tab() {
		
		pay_Functionality_page.Select_Recargas_celular_tab();
		
	    
	}
	@Then("^select operator as \"(.*?)\" from operador field$")
	public void select_operator_as_from_operador_field(String operador)  {
		pay_Functionality_page.select_operator(operador);
	    
	}

	@Then("^Give this number \"(.*?)\" under numero de celluar field$")
	public void give_this_number_under_numero_de_celluar_field(String celluar_number) {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.select_numero_de_celluar(celluar_number);
	   
	}

	@Then("^under  monte de recharga select \"(.*?)\" dollar normal recharge$")
	public void under_monte_de_recharga_select_dollar_normal_recharge(String Recharge_Amount){
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.monte_de_recharga_select(Recharge_Amount);
		
	}

	@Then("^click on siguiente$")
	public void click_on_siguiente() {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.Recarga_Celular_siguiente();
		
	}

	@Then("^Verify the user reach to Payment screen Succesfully$")
	public void verify_the_user_reach_to_Payment_screen_Succesfully()  {
	    // Write code here that turns the phrase above into concrete actions
		
		pay_Functionality_page.verify_the_user_reach_to_Payment_screen_Succesfully();
	}

	@Then("^payment screen click on \"(.*?)\"$")
	public void payment_screen_click_on(String PaymentMode)  {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.Select_PaymentMode(PaymentMode);
		
	}

	@Then("^Enter card name as \"(.*?)\" , Card number as \"(.*?)\"  , month as \"(.*?)\" ,date as \"(.*?)\",cvv as \"(.*?)\"$")
	public void enter_card_name_as_Card_number_as_month_as_date_as_cvv_as(String card_name, String card_number, String month, String date, String cvv) {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.enter_card_Details(card_name,card_number,month,date,cvv);
	}

	@Then("^under correo electronico field give email id as \"(.*?)\"$")
	public void under_correo_electronico_field_give_email_id_as(String email_id) {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.Payment_email_id(email_id);
	}
	@And("^click on Payment Button$")
	public void click_on_Payment_Button() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.Payment_Button();
	}
	@When("^popup will appear\\.$")
	public void popup_will_appear()  {
	    // Write code here that turns the phrase above into concrete actions
	    pay_Functionality_page.popup_appear();
	  
	}

	@Then("^Enter the email \"(.*?)\"  and password \"(.*?)\"$")
	public void enter_the_email_and_password(String arg1, String arg2)  {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.enter_the_email_password();
	}
	
	@Then("^Verify user gets a success message  and recharge get successful\\.$")
	public void verify_user_gets_a_success_message_and_recharge_get_successful()  {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.verify_user_gets_a_success_message();
	}
	
	@Then("^Close the Browser$")
	public void Close_the_Browser()  {
	    // Write code here that turns the phrase above into concrete actions
		pay_Functionality_page.Close_the_Browser();
	}
}
