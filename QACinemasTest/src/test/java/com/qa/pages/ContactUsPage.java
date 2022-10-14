package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class ContactUsPage {
	
	WebDriver driver;
	private WebElement header;
	
	public ContactUsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getHeader(){
	     header = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/h1"));
	     return header;
	}
}
