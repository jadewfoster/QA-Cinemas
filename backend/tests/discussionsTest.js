const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const mongoose = require('mongoose');
const {DiscussionsModel} = require("../schema/discussions");

chai.use(chaiHttp);

let url = "localhost:3001/cinema";

before("Start server", async function(){
    await mongoose.connection.close()
    await mongoose.connect("mongodb://127.0.0.1:27017/cinemaTest")
    console.log("Test DB Connected!");
 })

 //clearing the discussions collection from test db
describe("discussionsAPI test", function(){
    
    this.beforeAll("Test data", async function(){
        await DiscussionsModel.deleteMany({});
    })

    it("/getAll", function(){
        DiscussionsModel.find({}).then(ts => {
            chai.request(url+"/discussionsTest").get("/getAll").then( res => {

                // chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(ts)
            })
        })
    })

    it("/getFiltered")
})

after("Stop server", function(){
    server.close();
})