const chai = require("chai");
const chaiHttp = require("chai-http");
const {DiscussionsModel} = require("../schema/discussions");
const mongoose = require("mongoose");
const server = require("../index.js");
 
chai.use(chaiHttp);
 
let url = "localhost:3001/cinema";

 //clearing the discussions collection from test db
describe("discussionsAPI test", function(){
    before("Start Server", async function(){
        await mongoose.connection.close()
        await mongoose.connect("mongodb://127.0.0.1:27017/CinemaTest")
        console.log("Test DB Connected")     
    })    
 
    this.beforeAll("Test data", async function(){
        await DiscussionsModel.deleteMany({});
        // await DiscussionsModel.create({})
    })
 
    it("/getAll", function(){
        DiscussionsModel.find({}).then(ds => {
            chai.request(url+"/discussionsTest").get("/getAll").then( res => {
 
                // chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(ds)
            })
        })
    })
 
    it("/getFive", function(){
        DiscussionsModel.find({}).limit(5).then(ds => {
            chai.request(url+"/discussionsTest").get("/getFive").then(res =>{
                chai.expect(res).to.have.status(200)
                chai.expect(res.body).to.equal(ds)
            })
    })
    })
})
 
after("Stop server", function(){
    server.close();
})
