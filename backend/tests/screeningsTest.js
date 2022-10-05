
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const server = require("../index.js");
const { ScreeningsModel } = require("../schema/screenings.js");
chai.use(chaiHttp);

let url = "localhost:3001/Cinema/screenings";

before("Start Server", async function(){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://localhost:27017/Cinema")
    console.log("Test DB Connected")
 //   await ScreeningsModel.deleteMany({});
})

describe("Screenings", function() {
    it("/getAll", function() {
        chai.request(url).get("/getAll").end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.length).to.equal(57)
        })
    })
})

after("Stop Server", function(){
    server.close();
})