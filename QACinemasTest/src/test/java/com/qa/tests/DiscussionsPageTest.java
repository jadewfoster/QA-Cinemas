package com.qa.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.qa.pages.DiscussionsPage;

public class DiscussionsPageTest {
	
	WebDriver driver;
	DiscussionsPage discussionsPage;
	

	@BeforeTest
	public void initiateBrowser() {
		//set path to where chrome driver is located on your machine!
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mniko\\Documents\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:3000/discussion");
	}
	
	@Test
	public void showDiscussions() {
	discussionsPage = new DiscussionsPage(driver);
	discussionsPage.chooseMovie(1);
	//adding timeout to allow the dropdown to close
	try {
		Thread.sleep(2000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	discussionsPage.getDiscussions();
	WebElement discussionsTable = discussionsPage.getDiscussionsTable();
	Assert.assertEquals(true, discussionsTable.isDisplayed());
	}
	
	@Test
	public void postValidDiscussion() {
		discussionsPage = new DiscussionsPage(driver);
		discussionsPage.chooseMovie(3);
		discussionsPage.setName("testName");
		discussionsPage.setComment("testComment");
		discussionsPage.setRating(5);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		discussionsPage.postComment();
		Assert.assertEquals("Comment added successfully!", driver.switchTo().alert().getText());
		driver.switchTo().alert().accept();
	}
	
	@Test
	public void postInvalidComment() {
		discussionsPage = new DiscussionsPage(driver);
		discussionsPage.chooseMovie(3);
		discussionsPage.setName("testName");
		discussionsPage.setComment("shit Comment");
		discussionsPage.setRating(5);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		discussionsPage.postComment();
		Assert.assertEquals("Profanity is not allowed!", driver.switchTo().alert().getText());
		driver.switchTo().alert().accept();
	}
	
	@Test
	public void postInvalidName() {
		discussionsPage = new DiscussionsPage(driver);
		discussionsPage.chooseMovie(3);
		discussionsPage.setName("shit testName");
		discussionsPage.setComment("Comment");
		discussionsPage.setRating(5);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		discussionsPage.postComment();
		Assert.assertEquals("Profanity is not allowed!", driver.switchTo().alert().getText());
		driver.switchTo().alert().accept();
	}
	
	@AfterTest
	public void terminateBrowser(){
	driver.close();
	}
}
