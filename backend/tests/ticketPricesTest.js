const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const server = require("../index.js");
const { TicketPricesModel } = require("../schema/ticketPrices.js");
chai.use(chaiHttp);

let url = "localhost:3001/Cinema/ticketprices";



describe("ticketPricesAPI test", function() {

    before("Start Server", async function(){
        await mongoose.connection.close()
        await mongoose.connect("mongodb://127.0.0.1:27017/CinemaTest")
        console.log("Test DB Connected")
    
    })
    
    this.beforeAll("Test data", async function() {
        await TicketPricesModel.deleteMany({});
        await TicketPricesModel.create(
        {
            "UserType": "Adult",
            "ScreenType":"Standard", "Price":7.50
        })
    })

    it("/getAll", function() {
        TicketPricesModel.find({}).then(tp => {
            chai.request(url).get("/getAll").then( res => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.equal(tp)
            })
        })
    })

    it("/getFiltered", function() {
        const body = {UserType: "Adult", ScreenType:"Standard", "Price":7.50}
        TicketPricesModel.find({$and: [{UserType : body.UserType}, {ScreenType : body.ScreenType}]}, {_id:0, Price:1}).then(tp => {
                chai.request(url).get("/getFiltered").then( res => {
                    chai.expect(err).to.be.null;
                    chai.expect(res).to.have.status(200)
                    chai.expect(res.body).to.equal(tp)
                })
            })
    })
})

after("Stop Server", function(){
    server.close();
})
