package Project_UndosTres.UndosTres_Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.Assert;

public class Pay_Functionality_Page {
	
	
WebDriver driver;

public void UndosTres_Initiatedriver(String URL,String Browser) {
	if(Browser.equals("Chrome")){
					try {
	
								System.setProperty("webdriver.chrome.driver", "G:\\Milli-Appli_Poject\\UndosTres_Pages\\Resources\\Drivers\\chromedriver.exe");
						
								driver=new ChromeDriver();
								driver.get(URL);
								System.out.println("URL Opened in Chrome");
								driver.manage().window().maximize();
								
						}catch (Exception e) {
							
							System.out.println(e);
							
						}
	}
	if(Browser.equals("FF")){
		try {

					
					 System.setProperty("webdriver.gecko.driver","G:\\Milli-Appli_Poject\\UndosTres_Pages\\Resources\\Drivers\\geckodriver.exe");//set the chrome driver
						driver=new FirefoxDriver();
						driver.manage().window().maximize();
						driver.get(URL);
						System.out.println("URL Opened in FireFox");
						driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); 
			}catch (Exception e) {
				
				System.out.println(e);
				
			}
}
	
	
	
	
	
}


public void Select_Recargas_celular_tab(){
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	WebElement RecargaCelularTextElement =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1")));
	String RecargaCelularText=RecargaCelularTextElement.getText().toString();
	//driver.findElement(By.xpath("//a[1]//div[1]//span[1]"))
	if(!RecargaCelularText.contentEquals("Recarga Celular")) {
		WebElement RecargaCelularTab =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[1]//div[1]//span[1]")));
		RecargaCelularTab.click();
		System.out.println("Recarga Celular Tab selected");
		}
	else
	{	if(RecargaCelularText.contentEquals("Recarga Celular")) 
		System.out.println("Recarga Celular Tab Already selected");
	}
	
	
	
	
	
}

public void select_operator(String operador) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("Adding value for Operator...");
	WebElement OperadorFieldElementBox =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//html[1]/body[1]/div[3]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[1]")));
	//OperadorFieldElementBox.clear();
	OperadorFieldElementBox.click();
	WebElement OperadorFieldElement =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li//li [@data-show='Telcel']/a[1]")));
	if(operador.equalsIgnoreCase("telcel"))
	{OperadorFieldElement.click();
	}
	System.out.println("Added Operator");
}

public void monte_de_recharga_select(String recharge_Amount) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("Adding... Recharge Amount");
	WebElement MontoDeRecargaBox =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/div/div/div/div/div/form/div/div/div/div[2]/ul[1]/li[3]/div[1]/div[1]/input[1]")));
	MontoDeRecargaBox.click();
	WebElement RecargaSaldoBox =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'category active')]")));
	String RecargaSaldoBoxText=RecargaSaldoBox.getText().toString();
	if(RecargaSaldoBoxText.contentEquals("Recarga Saldo")) {
		WebElement RecargaSaldoValue =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul[contains(@class,'cat1')]//li[1]//a[1]//div[1]//b[contains(text(),'$"+recharge_Amount+"')]")));
			RecargaSaldoValue.click();
	}
	System.out.println("Added... Recharge Amount");
}

public void select_numero_de_celluar(String celluar_number) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	
	System.out.println("Adding... Phone number to be Recharged");
	WebElement NumeroDeCelularBox =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/div/div[@id='mainBlueContainer']/div/div/div[@id='col-sm-12']/form/div/div/div/div[2]/ul[1]/li[2]/div[1]/div[1]/input[1]")));
	NumeroDeCelularBox.sendKeys(celluar_number);
	System.out.println("Added... Phone number to be Recharged");
}

public void Recarga_Celular_siguiente() {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	WebElement SiguienteButton =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'box menuitem')]//div[3]//div[1]//button[contains(text(),'Siguiente')]")));
	SiguienteButton.click();
	System.out.println("Clicked on... Siguiente Button");
}


public void verify_the_user_reach_to_Payment_screen_Succesfully() {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	WebElement PaymentScreenText =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/header/div/nav/div/div/div[2]/center/table/tbody/tr/td[2]/h2")));
	String PaymentScreenTextvalue=PaymentScreenText.getText().toString();
	String PaymentScreenURLvalue= driver.getCurrentUrl().toString();
	if(PaymentScreenTextvalue.equalsIgnoreCase("Paga de Forma Segura por Tu Recarga")&& PaymentScreenURLvalue.contentEquals("https://prueba.undostres.com.mx/payment.php"))
		{
		System.out.println("Payment Screen Opened");
		
		}
	else
		Assert.fail("Paga de Forma Segura por Tu Recarga -Page not Navigated");
	
}


public void Select_PaymentMode(String paymentMode) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("Selecting Payment mode...");
	if(paymentMode.equals("tarjeta")){
	WebElement paymentModename =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='payform']//div//a[@class='list-group-item text-center select-card active']//p[contains(text(),'Tarjeta')]")));
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	paymentModename.click();
	System.out.println("Selected Payment mode..."+paymentMode);
	
	}
	}


public void enter_card_Details(String card_name, String card_number, String month, String date, String cvv) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("Adding Card Credentials....");
	WebElement paymentcardname =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form[@id='payment-form']//div//div//div//div//input[@name='cardname']")));
	paymentcardname.sendKeys(card_name);
	WebElement paymentcardnumberunique =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='cardnumberunique']")));
	paymentcardnumberunique.sendKeys(card_number);
	WebElement paymentexpmonth =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form[@id='payment-form']//div//div//div//div//div//input[@name='expmonth']")));
	paymentexpmonth.sendKeys(month);
	WebElement paymentexpyear =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form[@id='payment-form']//div//div//div//div//div//input[@name='expyear']")));
	paymentexpyear.sendKeys(date);
	WebElement paymentcvv =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form[@id='payment-form']//div//div//div//div//input[@name='cvvno']")));
	paymentcvv.sendKeys(cvv);
	System.out.println("Added Card Credentials");
	
}


public void Payment_email_id(String email_id) {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("adding email INFO...");
	WebElement paymentemail =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form[@id='payment-form']//input[@name='txtEmail']")));
	paymentemail.sendKeys(email_id);
	System.out.println("added email info");
}


public void Payment_Button()  {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);	
	WebElement paymentButton =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='card']//div[6]//div[1]/button")));
	paymentButton.click();
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	
		
	}


public void enter_the_email_password() {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	System.out.println("Loging in as user ....adding email and Password");
	WebElement paymentUsername =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='usrname']")));
	paymentUsername.sendKeys("automationexcersise@test.com");
	
	WebElement paymentEmail =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='psw']")));
	paymentEmail.sendKeys("123456");
	
	WebElement frameSwitch=wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("iframe")));
	driver.switchTo().frame(frameSwitch); 
	
	WebElement paymentCaptcha =wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#recaptcha-anchor > div.recaptcha-checkbox-border")));
	paymentCaptcha.click();
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	
	driver.switchTo().defaultContent();
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	
	WebElement paymentPopupButton =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@type='submit']")));
	JavascriptExecutor executor = (JavascriptExecutor)driver; 
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
	executor. executeScript("arguments[0].click();", paymentPopupButton);
	//paymentPopupButton.click();
	
	System.out.println("Payment button clicked");
	driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS) ;
}


public void verify_user_gets_a_success_message() {
	// TODO Auto-generated method stub
	WebDriverWait wait=new WebDriverWait(driver, 40);
	WebElement PaymentStatusText =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='recharge-status success-msg']")));
	String PaymentStatusTextvalue= PaymentStatusText.getText().toString();
	if(PaymentStatusTextvalue.contentEquals("¡Exitosa!")) {
		
			System.out.println("Payment Sucessful-¡Exitosa!");
			
			}
		else
			Assert.fail("Payment Not Sucessful"+PaymentStatusTextvalue);
}


public void popup_appear() {
	// TODO Auto-generated method stub
	try{
		WebDriverWait wait=new WebDriverWait(driver, 40);
	
		WebElement PaymentStatusText =wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'o Acceso con correo')]")));
	} 
	catch (NoSuchElementException e){
		
		System.out.println(e);
		Assert.fail("Popup not visible");
	}
	
	
}
		
	

public void Close_the_Browser() {
	// TODO Auto-generated method stub
	driver.close();
	System.out.println("Closing Browser");
	
}


}







