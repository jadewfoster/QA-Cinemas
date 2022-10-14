package com.qa.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.qa.pages.BookingsPage;
import com.qa.pages.HomePage;

public class BookingsPageTest {
	
	WebDriver driver;
	BookingsPage bookingsPage;
	HomePage homePage;
	
	@BeforeTest
	public void initiateBrowser() {
		//set path to where chrome driver is located on your machine!
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mniko\\Documents\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:3000/book-your-ticket");
	}
	
	@Test(priority = 1)
	public void showScreenings() {
	bookingsPage = new BookingsPage(driver);
	bookingsPage.chooseCinema(2);
	bookingsPage.chooseMovie(2);
	try {
		Thread.sleep(2000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	bookingsPage.getScreenings();
	WebElement screeningsTable = bookingsPage.getScreeningsTable();
	Assert.assertEquals(true, screeningsTable.isDisplayed());
	}

	//needs to direct to payments page - currently not working
//	@Test(priority = 2, dependsOnMethods = "showScreenings")
//	public void redirectPage() {
//		bookingsPage.chooseScreening();
//		homePage = new HomePage(driver);
//		WebElement header = homePage.getHeader();
//		Assert.assertEquals("Welcome to QA Cinemas!", header.getText());
//	}
	
	@AfterTest
	public void terminateBrowser(){
	driver.close();
	}
}
