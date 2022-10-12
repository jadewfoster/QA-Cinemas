# QA-Cinemas

QA Final Project - Creating a functional website for a cinema

This is a functional website for a cinema company called QA Cinemas using the MERN stack - MongoDB, Express, React and Node.

This website has
- A home page with a carosel of relevant images and navigation to the rest of the site.
- A listings gallery which shows what films are currently being shown at this cinema.
- A page for the opening times for each of the 3 branches of QA Cinemas (London North, London South and London Central).
- A page showing the upcoming releases for the cinema.
- A page descibing the movie classification system.
- A page decribing the different screens in each of the cinemas.
- A bookings page which allows users to select their cinema and movie preference, then see the available screenings for those selections. From there they can select which date and time they would like to go to and this then redirects them to the payments page.
- The payments page allows the user to select the number of tickets, where prices depend on the screen type. They then enter their payment details and will recieve an email confirmation. This uses a plug-in called stripe. No payment is actually taken.
- A page for places to go which inlcudes information on locals venues where customers could visit before or after the movie.
- A page with details on how to get to each cinema, including a map.
- A discussion board page which allows people to post comments and rates the movies they've seen.
- A page for how to get in contact with us.
- A page with some backgroud about us, as well as some information on how we used the Scrum process throughout this project.

## Getting Started

To see this website:
1. Clone this repo from the main branch.
2. Open the app in your IDE (it was built on VSCode).
3. Run npm install to install all the required packages.
4. Open one terminal and navigate into the folder called "backend".
5. From here run "nodemon index.js". You should see the messages "Server started successfully on port 3001" and "DB connected".
6. In a separate terminal make sure you are in the QA-Cinemas folder.
7. From here run "npm start".
8. A browser window should pop-up with you on the website, feel free to navigate around.

### Prerequisites

This website was built on:
- React verison *** which can be downloaded here: https://react-cn.github.io/react/downloads.html
- Node version 16.18.0 which can be downloaded here: https://nodejs.org/en/download/
- MongoDB version 6.0.1 which can be downloaded here: https://www.mongodb.com/try/download/community2
- Express version *** which can be installed through these instructions: https://expressjs.com/en/starter/installing.html

## Testing

### Testing the backend

To test the backend apis we used mocha, chai and istanbul (for coverage). For this we used a mock database called Cinema-test.
To run these tests, navigate to the backend folder and in the terminal run "npm run test".
- Mocha version ***
- Chai version ***
- Istanbul version ***

```
//Example test from the ScreeningsAPI

describe("screeningsAPI test", function() {

    before("Start Server", async function(){
        await mongoose.connection.close()
        await mongoose.connect("mongodb://127.0.0.1:27017/CinemaTest")
        console.log("Test DB Connected")
     
    }) 
    
    it("/getAll", function() {
        ScreeningsModel.find({}).then(g => {
            chai.request(url).get("/getAll").then( res => {
 
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(g)
            })
 
        })
    })
  ```
    
### Testing the frontend

We tested the front-end using automation testing in Selenium. We wrote these tests in Java on Eclipse. 
To run these tests, ensure you change the Chromedriver file path to your local path for chromedriver. 
- Chrome driver can be downloaded here: https://chromedriver.chromium.org/downloads

```
//Example Selenium test from the Bookings page
@BeforeTest
public void initiateBrowser() {
		//set path to where chrome driver is located on your machine!
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mniko\\Documents\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:3000/bookings");
}
  
@Test(priority = 1)
public void showScreenings() {
    bookingsPage = new BookingsPage(driver);
    bookingsPage.chooseCinema(2);
    bookingsPage.chooseMovie(2);
    bookingsPage.getScreenings();
    WebElement screeningsTable = bookingsPage.getScreeningsTable();
    Assert.assertEquals(true, screeningsTable.isDisplayed());
}
```

## Built With

* [MongoDB](https://www.mongodb.com/) - Database
* [Express](https://expressjs.com/) - API Routing
* [React](https://reactjs.org/) - Front-end/UI
* [Node](https://nodejs.org/en/) 

## Versioning

We used [Git](https://git-scm.com) for version control.

## Authors

* **Isabella O'Hara** - *Back End, Testing, Front End* - [IsabellaOHara](https://github.com/IsabellaOHara)
* **Mariana Nikolova** - *Back End, Testing, Front End* - [mariana-ks01](https://github.com/mariana-ks01)
* **Jade Foster** - *Front End* - [jadewfoster](https://github.com/jadewfoster)
* **Fatima Sheikhnur** - *Front End* - [fjeylani](https://github.com/fjeylani)

## Acknowledgments
* Thank you to all our trainers at QA for all your teaching, guidance and help which enabled us to complete this project.
