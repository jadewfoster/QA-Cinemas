package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Navbar {
	
	WebDriver driver;
	private WebElement aboutUsButton;
	private WebElement placesToGoButton;
	private WebElement listingsGallery;
	private WebElement classificationsButton;
	private WebElement bookingsButton;
	private WebElement gettingThereButton;
	private WebElement openingTimesButton;
	private WebElement contactUsButton;
	private WebElement screenInfoButton;	
	
	public Navbar(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/li[1]/li/a")
	WebElement homeButton;	
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/div[1]/button")
	WebElement infoDropdown;
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/div[2]/button")
	WebElement cinemaDropdown;
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/div[3]/button")
	WebElement whatsOnDropdown;
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/li[2]/li/a")
	WebElement upcomingReleasesButton;
	
	@FindBy(xpath = "/html/body/div/div/nav/ul/li[3]/li/a")
	WebElement discussionsButton;
	
	public WebElement getAboutUsButton(){
	     aboutUsButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[1]/div/a[1]"));
	     return aboutUsButton;
	}
	
	public WebElement getClassificationsButton() {
		classificationsButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[1]/div/a[3]"));
	     return classificationsButton;
	}
	
	public WebElement getPlacesToGoButton() {
		placesToGoButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[2]/div/a[1]"));
		return placesToGoButton;
	}
	
	public WebElement getListingsGallery() {
		listingsGallery = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[3]/div/a[1]"));
		return listingsGallery;
	}
	
	public WebElement getBookingsButton() {
		bookingsButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[3]/div/a[2]"));
		return bookingsButton;
	}
	
	public WebElement getGettingThereButton() {
		gettingThereButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[2]/div/a[2]"));
		return gettingThereButton;
	}
	
	public WebElement getOpeningTimesButton() {
		openingTimesButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[2]/div/a[3]"));
		return openingTimesButton;
	}
	
	public WebElement getContactUsButton() {
		contactUsButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[1]/div/a[2]"));
		return contactUsButton;
	}
	
	public WebElement getScreenInfoButton() {
		screenInfoButton = driver.findElement(By.xpath("/html/body/div/div/nav/ul/div[2]/div/a[4]"));
		return screenInfoButton;
	}

	public void homePage() {
		homeButton.click();
	}
	
	public void info() {
		infoDropdown.click();
	}
	
	public void cinemas() {
		cinemaDropdown.click();
	}
	
	public void whatsOn() {
		whatsOnDropdown.click();
	}
	
	public void bookings() {
		bookingsButton.click();
	}
	
	public void discussions() {
		discussionsButton.click();
	}
	
	public void aboutUs() {
		aboutUsButton.click();
	}
	
	public void classifications() {
		classificationsButton.click();
	}
	
	public void contactUs() {
		contactUsButton.click();
	}
	
	public void placesToGo() {
		placesToGoButton.click();
	}
	
	public void gettingThere() {
		gettingThereButton.click();
	}
	
	public void openingTimes() {
		openingTimesButton.click();
	}
	
	public void screenInfo() {
		screenInfoButton.click();
	}
	
	public void listingsGallery() {
		listingsGallery.click();
	}
	
	public void upcomingReleases() {
		upcomingReleasesButton.click();
	}
}
