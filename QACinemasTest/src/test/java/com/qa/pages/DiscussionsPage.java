package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class DiscussionsPage {

	WebDriver driver;
	private WebElement discussionsTable;
	
	public DiscussionsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getDiscussionsTable(){
	     discussionsTable = driver.findElement(By.id("discussionsTable"));
	     return discussionsTable;
	}
	
	@FindBy(id = "movie")
	WebElement movieDropdown;
	
	@FindBy(id = "getDiscussionsButton")
	WebElement getDiscussionsButton;
	
	@FindBy(id = "name")
	WebElement nameInput;
	
	@FindBy(id = "comment")
	WebElement commentInput;
	
	@FindBy(id = "rating")
	WebElement ratingDropdown;
	
	@FindBy(id = "postDiscussionButton")
	WebElement postDiscussionButton;
	
	public void chooseMovie(int index) {
		Select movie = new Select(movieDropdown);
		movie.selectByIndex(index);
	}
	
	public void getDiscussions() {
		getDiscussionsButton.click();
	}
	
	public void setName(String name) {
		nameInput.sendKeys(name);
	}
	
	public void setComment(String comment) {
		commentInput.sendKeys(comment);
	}
	
	public void setRating(int index) {
		Select rating = new Select(ratingDropdown);
		rating.selectByIndex(index);
	}
	
	public void postComment() {
		postDiscussionButton.click();
	}
}
