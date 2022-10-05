
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const server = require("../index.js");
const { ScreeningsModel } = require("../schema/screenings.js");
chai.use(chaiHttp);

let url = "localhost:3001/Cinema/screenings";

before("Start Server", async function(){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://localhost:27017/CinemaTest")
    console.log("Test DB Connected")

})

describe("screeningsAPI test", function() {

    this.beforeAll("Test data", async function(){
        await ScreeningsModel.deleteMany({});
        await ScreeningsModel.create({"CinemaName": "LondonNorth",
        "ScreenNum": 3,
        "ScreenType": "Director",
        "MovieName":"Mrs. Harris Goes to Paris",
        "Date": "23-10-2022",
        "Time": "20:00",
        "SeatsLeft": 50})
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

    it("/getDateAndTime", function() {
        const body = {CinemaName: "LondonNorth", MovieName:"Mrs. Harris Goes to Paris"}
        ScreeningsModel.find({$and: [ {CinemaName:body.CinemaName}, {MovieName:body.MovieName}]}, {_id:0, Date:1, Time:1}).then(c => {
            chai.request(url).get("/getDateAndTime").then( res => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(c)
            })
        })
    })

    it("/getScreeningTimes", function() {
        const body = {CinemaName: "LondonNorth", MovieName:"Mrs. Harris Goes to Paris", Date: "23-10-2022"}
        ScreeningsModel.find({$and: [ {CinemaName:body.CinemaName}, {MovieName:body.MovieName}, {Date:body.Date}]}, {_id:0, Time:1}).then(c => {
            chai.request(url).get("/getScreeningTimes").then( res => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(c)
            })
        })
    })

    it("/getSeatsLeft", function() {
        const body = {CinemaName: "LondonNorth", MovieName:"Mrs. Harris Goes to Paris", Date: "23-10-2022", Time: "20:00"}
        ScreeningsModel.find({$and: [ {CinemaName:body.CinemaName}, {MovieName:body.MovieName}, {Date:body.Date}, {Time:body.Time}]}, {_id:0, SeatsLeft:1}).then(sl => {
            chai.request(url).get("/getSeatsLeft").then( res => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(c)
            })        
        })
    })

    it("/put/:tickets", function() {
        const body = {CinemaName: "LondonNorth", ScreenType: "Director", MovieName:"Mrs. Harris Goes to Paris", Date: "23-10-2022", Time: "20:00", SeatsLeft: 50}
        const tickets = 1;
        const filter = { $and: [ {CinemaName:body.CinemaName}, {MovieName:body.MovieName},
            {ScreenType:body.ScreenType}, {Date:body.Date}, {Time:body.Time}, {SeatsLeft:body.SeatsLeft}] };
        const update = {SeatsLeft:(body.SeatsLeft-=tickets)};
        const opts = { new: true };
        ScreeningsModel.findOneAndUpdate(filter, update, opts).then(d => {
            chai.request(url).put("/put/:tickets").then( res => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(d)
            })

        })
    })

})

after("Stop Server", function(){
    server.close();
})