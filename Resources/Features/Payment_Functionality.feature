@UnDosTres_Solution
Feature: Solution for UnDosTres Test



@UnDosTres_Solution_1
Scenario Outline: Verify the Payment functionality

Given Open URL "<URL>" in "<Browser>"
Then Select Recargas celular tab
Then select operator as "<operador>" from operador field
Then Give this number "<celluar_number>" under numero de celluar field
And under  monte de recharga select "<Recharge_Amount>" dollar normal recharge
Then click on siguiente
And Verify the user reach to Payment screen Succesfully
Then payment screen click on "<PaymentMode>"
And Enter card name as "<card name>" , Card number as "<Card number>"  , month as "<month>" ,date as "<date>",cvv as "<cvv>" 
And under correo electronico field give email id as "<email id>" 
And click on Payment Button
Then popup will appear. 
Then Enter the email "<Popup_email>"  and password "<Popup_password>"
And Verify user gets a success message  and recharge get successful.
Then Close the Browser
Examples:
|Browser|URL|operador|celluar_number|Recharge_Amount|PaymentMode|card name|Card number|month|date|cvv|email id|Popup_email|Popup_password|
|FF|http://prueba.undostres.com.mx|telcel|5523261151|10|tarjeta|Test|4111111111111111|11|2025|111|test@test.com|automationexcersise@test.com|123456|
|Chrome|http://prueba.undostres.com.mx|telcel|5523261151|10|tarjeta|Test|4111111111111111|11|2025|111|test@test.com|automationexcersise@test.com|123456|


