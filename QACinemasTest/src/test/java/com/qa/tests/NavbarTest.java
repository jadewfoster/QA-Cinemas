package com.qa.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.qa.pages.AboutUsPage;
import com.qa.pages.BookingsPage;
import com.qa.pages.ClassificationsPage;
import com.qa.pages.ContactUsPage;
import com.qa.pages.DiscussionsPage;
import com.qa.pages.GettingTherePage;
import com.qa.pages.HomePage;
import com.qa.pages.ListingsGalleryPage;
import com.qa.pages.Navbar;
import com.qa.pages.OpeningTimesPage;
import com.qa.pages.PlacesToGoPage;
import com.qa.pages.ScreensPage;
import com.qa.pages.UpcomingReleasesPage;

public class NavbarTest {
	
	WebDriver driver;
	Navbar navbar;
	HomePage homePage;
	BookingsPage bookingsPage;
	DiscussionsPage discussionsPage;
	AboutUsPage aboutUsPage;
	ClassificationsPage classificationsPage;
	ContactUsPage contactUsPage;
	PlacesToGoPage placesToGoPage;
	GettingTherePage gettingTherePage;
	OpeningTimesPage openingTimesPage;
	ScreensPage screensPage;
	ListingsGalleryPage listingsGalleryPage;
	UpcomingReleasesPage upcomingReleasesPage;
	
	@BeforeTest
	public void initiateBrowser() {
		//set path to where chrome driver is located on your machine!
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mniko\\Documents\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:3000/home");
	}
	
	@Test
	public void clickHomeButton() {
		navbar = new Navbar(driver);
		navbar.homePage();
		homePage = new HomePage(driver);
		WebElement header = homePage.getHeader();
		Assert.assertEquals("Welcome to QA Cinemas!", header.getText());
	}
	
	//testing the Info dropdown
	@Test
	public void clickAboutUsButton() {
		navbar = new Navbar(driver);
		navbar.info();
		WebElement aboutUsButton = navbar.getAboutUsButton();
		navbar.aboutUs();
		aboutUsPage = new AboutUsPage(driver);
		WebElement header = aboutUsPage.getHeader();
		Assert.assertEquals("ABOUT US", header.getText());
	}
	
	@Test
	public void clickContactUsButton() {
		navbar = new Navbar(driver);
		navbar.info();
		WebElement contactUsButton = navbar.getContactUsButton();
		navbar.contactUs();
		contactUsPage = new ContactUsPage(driver);
		WebElement header = contactUsPage.getHeader();
		Assert.assertEquals("Contact Us", header.getText());
	}

	@Test
	public void clickClassificationsButton() {
		navbar = new Navbar(driver);
		navbar.info();
		WebElement classificationsButton = navbar.getClassificationsButton();
		navbar.classifications();
		classificationsPage = new ClassificationsPage(driver);
		WebElement header = classificationsPage.getHeader();
		Assert.assertEquals("FILM CLASSIFICATIONS", header.getText());
	}
	
	
	//testing the Our cinemas dropdown
	
	@Test
	public void clickPlacesToGoButton() {
		navbar = new Navbar(driver);
		navbar.cinemas();
		WebElement placesToGoButton = navbar.getPlacesToGoButton();
		navbar.placesToGo();
		placesToGoPage = new PlacesToGoPage(driver);
		WebElement header = placesToGoPage.getHeader();
		Assert.assertEquals("Places to go", header.getText());
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void clickGettingThereButton() {
		navbar = new Navbar(driver);
		navbar.cinemas();
		WebElement gettingThereButton = navbar.getGettingThereButton();
		navbar.gettingThere();
		gettingTherePage = new GettingTherePage(driver);
		WebElement header = gettingTherePage.getHeader();
		Assert.assertEquals("Getting There", header.getText());
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void clickOpeningTimesButton() {
		navbar = new Navbar(driver);
		navbar.cinemas();
		WebElement openingTimesButton = navbar.getOpeningTimesButton();
		navbar.openingTimes();
		openingTimesPage = new OpeningTimesPage(driver);
		WebElement header = openingTimesPage.getHeader();
		Assert.assertEquals("OPENING TIMES", header.getText());
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void clickScreensButton() {
		navbar = new Navbar(driver);
		navbar.cinemas();
		WebElement screenInfoButton = navbar.getScreenInfoButton();
		navbar.screenInfo();
		screensPage = new ScreensPage(driver);
		WebElement header = screensPage.getHeader();
		Assert.assertEquals("Our Screens", header.getText());
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	//testing the What's on dropdown
	@Test
	public void clickListingsGalleryButton() {
		navbar = new Navbar(driver);
		navbar.whatsOn();
		WebElement listingsGallery = navbar.getListingsGallery();
		navbar.listingsGallery();
		listingsGalleryPage = new ListingsGalleryPage(driver);
		WebElement header = listingsGalleryPage.getHeader();
		Assert.assertEquals("What's On", header.getText());
	}
	
	@Test
	public void clickBookingsPage() {
		navbar = new Navbar(driver);
		navbar.whatsOn();
		WebElement bookingsButton = navbar.getBookingsButton();
		navbar.bookings();
		bookingsPage = new BookingsPage(driver);
		WebElement header = bookingsPage.getHeader();
		Assert.assertEquals("Make a booking", header.getText());
	}
	
	
	@Test
	public void clickUpcomingReleases() {
		navbar = new Navbar(driver);
		navbar.upcomingReleases();
		upcomingReleasesPage = new UpcomingReleasesPage(driver);
		WebElement header = upcomingReleasesPage.getHeader();
		Assert.assertEquals("Upcoming Releases", header.getText());
	}
	
	//testing the discussions button
	@Test
	public void clickDiscussionsPage() {
		navbar = new Navbar(driver);
		navbar.discussions();
		discussionsPage = new DiscussionsPage(driver);
		WebElement header = discussionsPage.getHeader();
		Assert.assertEquals("Discussion", header.getText());
	}

	@AfterTest
	public void terminateBrowser(){
	driver.close();
	}
}
