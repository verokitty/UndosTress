$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Payment_Functionality.feature");
formatter.feature({
  "line": 2,
  "name": "Solution for UnDosTres Test",
  "description": "",
  "id": "solution-for-undostres-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UnDosTres_Solution"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify the Icon-HomePage",
  "description": "",
  "id": "solution-for-undostres-test;verify-the-icon-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@UnDosTres_Solution_1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Open URL \"\u003cURL\u003e\" in \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Select Recargas celular tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select operator as \"\u003coperador\u003e\" from operador field",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Give this number \"\u003ccelluar_number\u003e\" under numero de celluar field",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "under  monte de recharga select \"\u003cRecharge_Amount\u003e\" dollar normal recharge",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on siguiente",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify the user reach to Payment screen Succesfully",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "payment screen click on \"\u003cPaymentMode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter card name as \"\u003ccard name\u003e\" , Card number as \"\u003cCard number\u003e\"  , month as \"\u003cmonth\u003e\" ,date as \"\u003cdate\u003e\",cvv as \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "under correo electronico field give email id as \"\u003cemail id\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Payment Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "popup will appear.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the email \"\u003cPopup_email\u003e\"  and password \"\u003cPopup_password\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify user gets a success message  and recharge get successful.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "solution-for-undostres-test;verify-the-icon-homepage;",
  "rows": [
    {
      "cells": [
        "Browser",
        "URL",
        "operador",
        "celluar_number",
        "Recharge_Amount",
        "PaymentMode",
        "card name",
        "Card number",
        "month",
        "date",
        "cvv",
        "email id",
        "Popup_email",
        "Popup_password"
      ],
      "line": 25,
      "id": "solution-for-undostres-test;verify-the-icon-homepage;;1"
    },
    {
      "cells": [
        "FF",
        "http://prueba.undostres.com.mx",
        "telcel",
        "5523261151",
        "10",
        "tarjeta",
        "Test",
        "4111111111111111",
        "11",
        "2025",
        "111",
        "test@test.com",
        "automationexcersise@test.com",
        "123456"
      ],
      "line": 26,
      "id": "solution-for-undostres-test;verify-the-icon-homepage;;2"
    },
    {
      "cells": [
        "Chrome",
        "http://prueba.undostres.com.mx",
        "telcel",
        "5523261151",
        "10",
        "tarjeta",
        "Test",
        "4111111111111111",
        "11",
        "2025",
        "111",
        "test@test.com",
        "automationexcersise@test.com",
        "123456"
      ],
      "line": 27,
      "id": "solution-for-undostres-test;verify-the-icon-homepage;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the Icon-HomePage",
  "description": "",
  "id": "solution-for-undostres-test;verify-the-icon-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@UnDosTres_Solution_1"
    },
    {
      "line": 1,
      "name": "@UnDosTres_Solution"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Open URL \"http://prueba.undostres.com.mx\" in \"FF\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Select Recargas celular tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select operator as \"telcel\" from operador field",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Give this number \"5523261151\" under numero de celluar field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "under  monte de recharga select \"10\" dollar normal recharge",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on siguiente",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify the user reach to Payment screen Succesfully",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "payment screen click on \"tarjeta\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter card name as \"Test\" , Card number as \"4111111111111111\"  , month as \"11\" ,date as \"2025\",cvv as \"111\"",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "under correo electronico field give email id as \"test@test.com\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Payment Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "popup will appear.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the email \"automationexcersise@test.com\"  and password \"123456\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify user gets a success message  and recharge get successful.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://prueba.undostres.com.mx",
      "offset": 10
    },
    {
      "val": "FF",
      "offset": 46
    }
  ],
  "location": "Payment_Functionality_stepdef.open_URL(String,String)"
});
formatter.result({
  "duration": 35154244394,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.Select_Recargas_celular_tab()"
});
formatter.result({
  "duration": 573884005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telcel",
      "offset": 20
    }
  ],
  "location": "Payment_Functionality_stepdef.select_operator_as_from_operador_field(String)"
});
formatter.result({
  "duration": 960761951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5523261151",
      "offset": 18
    }
  ],
  "location": "Payment_Functionality_stepdef.give_this_number_under_numero_de_celluar_field(String)"
});
formatter.result({
  "duration": 176286552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "Payment_Functionality_stepdef.under_monte_de_recharga_select_dollar_normal_recharge(String)"
});
formatter.result({
  "duration": 940486354,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.click_on_siguiente()"
});
formatter.result({
  "duration": 373964425,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.verify_the_user_reach_to_Payment_screen_Succesfully()"
});
formatter.result({
  "duration": 4359017488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tarjeta",
      "offset": 25
    }
  ],
  "location": "Payment_Functionality_stepdef.payment_screen_click_on(String)"
});
formatter.result({
  "duration": 7420724543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    },
    {
      "val": "4111111111111111",
      "offset": 44
    },
    {
      "val": "11",
      "offset": 75
    },
    {
      "val": "2025",
      "offset": 89
    },
    {
      "val": "111",
      "offset": 103
    }
  ],
  "location": "Payment_Functionality_stepdef.enter_card_name_as_Card_number_as_month_as_date_as_cvv_as(String,String,String,String,String)"
});
formatter.result({
  "duration": 1131091343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 49
    }
  ],
  "location": "Payment_Functionality_stepdef.under_correo_electronico_field_give_email_id_as(String)"
});
formatter.result({
  "duration": 169143031,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.click_on_Payment_Button()"
});
formatter.result({
  "duration": 1094155378,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.popup_will_appear()"
});
formatter.result({
  "duration": 656848954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationexcersise@test.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 62
    }
  ],
  "location": "Payment_Functionality_stepdef.enter_the_email_and_password(String,String)"
});
formatter.result({
  "duration": 3710022061,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.verify_user_gets_a_success_message_and_recharge_get_successful()"
});
formatter.result({
  "duration": 23483795460,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.Close_the_Browser()"
});
formatter.result({
  "duration": 24684809029,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the Icon-HomePage",
  "description": "",
  "id": "solution-for-undostres-test;verify-the-icon-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@UnDosTres_Solution_1"
    },
    {
      "line": 1,
      "name": "@UnDosTres_Solution"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Open URL \"http://prueba.undostres.com.mx\" in \"Chrome\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Select Recargas celular tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select operator as \"telcel\" from operador field",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Give this number \"5523261151\" under numero de celluar field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "under  monte de recharga select \"10\" dollar normal recharge",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on siguiente",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify the user reach to Payment screen Succesfully",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "payment screen click on \"tarjeta\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter card name as \"Test\" , Card number as \"4111111111111111\"  , month as \"11\" ,date as \"2025\",cvv as \"111\"",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "under correo electronico field give email id as \"test@test.com\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Payment Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "popup will appear.",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the email \"automationexcersise@test.com\"  and password \"123456\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify user gets a success message  and recharge get successful.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://prueba.undostres.com.mx",
      "offset": 10
    },
    {
      "val": "Chrome",
      "offset": 46
    }
  ],
  "location": "Payment_Functionality_stepdef.open_URL(String,String)"
});
formatter.result({
  "duration": 25261463021,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.Select_Recargas_celular_tab()"
});
formatter.result({
  "duration": 111006529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telcel",
      "offset": 20
    }
  ],
  "location": "Payment_Functionality_stepdef.select_operator_as_from_operador_field(String)"
});
formatter.result({
  "duration": 1972784947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5523261151",
      "offset": 18
    }
  ],
  "location": "Payment_Functionality_stepdef.give_this_number_under_numero_de_celluar_field(String)"
});
formatter.result({
  "duration": 525488944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "Payment_Functionality_stepdef.under_monte_de_recharga_select_dollar_normal_recharge(String)"
});
formatter.result({
  "duration": 1575015425,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.click_on_siguiente()"
});
formatter.result({
  "duration": 346894875,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.verify_the_user_reach_to_Payment_screen_Succesfully()"
});
formatter.result({
  "duration": 11670645754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tarjeta",
      "offset": 25
    }
  ],
  "location": "Payment_Functionality_stepdef.payment_screen_click_on(String)"
});
formatter.result({
  "duration": 215618181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    },
    {
      "val": "4111111111111111",
      "offset": 44
    },
    {
      "val": "11",
      "offset": 75
    },
    {
      "val": "2025",
      "offset": 89
    },
    {
      "val": "111",
      "offset": 103
    }
  ],
  "location": "Payment_Functionality_stepdef.enter_card_name_as_Card_number_as_month_as_date_as_cvv_as(String,String,String,String,String)"
});
formatter.result({
  "duration": 4832543835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 49
    }
  ],
  "location": "Payment_Functionality_stepdef.under_correo_electronico_field_give_email_id_as(String)"
});
formatter.result({
  "duration": 456680629,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.click_on_Payment_Button()"
});
formatter.result({
  "duration": 970467166,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.popup_will_appear()"
});
formatter.result({
  "duration": 691548040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationexcersise@test.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 62
    }
  ],
  "location": "Payment_Functionality_stepdef.enter_the_email_and_password(String,String)"
});
formatter.result({
  "duration": 7647381614,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.verify_user_gets_a_success_message_and_recharge_get_successful()"
});
formatter.result({
  "duration": 32395833308,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Functionality_stepdef.Close_the_Browser()"
});
formatter.result({
  "duration": 235415612,
  "status": "passed"
});
});