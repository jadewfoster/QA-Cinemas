package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class AboutUsPage {
	
	WebDriver driver;
	private WebElement header;
	
	public AboutUsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getHeader(){
	     header = driver.findElement(By.id("header"));
	     return header;
	}
}
