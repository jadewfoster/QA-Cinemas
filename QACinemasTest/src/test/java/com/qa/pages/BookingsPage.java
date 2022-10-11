package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class BookingsPage {
	
	WebDriver driver;
	private WebElement screeningsTable;
	
	public BookingsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "cinema")
	WebElement cinemaDropdown;
	
	@FindBy(id = "movie")
	WebElement movieDropdown;
	
	@FindBy(id = "filterButton")
	WebElement filterButton;
	
	@FindBy(id = "chooseScreening")
	WebElement chooseScreening;
	
	public WebElement getScreeningsTable(){
	     screeningsTable = driver.findElement(By.id("screeningsTable"));
	     return screeningsTable;
	}
	
	public void chooseCinema(int index) {
		Select cinema = new Select(cinemaDropdown);
		cinema.selectByIndex(index);
	}
	
	public void chooseMovie(int index) {
		Select movie = new Select(movieDropdown);
		movie.selectByIndex(index);
	}
	
	public void getScreenings() {
		filterButton.click();
	}
	
	public void chooseScreening() {
		chooseScreening.click();
	}
	
}