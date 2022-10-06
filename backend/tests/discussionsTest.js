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
        const testBody = [{"Movie name": "test1",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5},{"Movie name": "test2",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5},{"Movie name": "test3",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5},{"Movie name": "test4",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5},{"Movie name": "test5",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5},{"Movie name": "test6",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5}]

        await DiscussionsModel.deleteMany({});
        await DiscussionsModel.create(testBody)
    })
 
    it("/getAll", function(){
        DiscussionsModel.find({}).then(testBody => {
                chai.request(url+"/discussionsTest").get("/getAll").then( res => {
     
                    chai.expect(err).to.be.null;
                    chai.expect(res).to.have.status(200)
                    chai.expect(res.body).to.equal(testBody)
            })
        })
    })
 
    it("/getFive", function(){
        DiscussionsModel.find({}).limit(5).then(testBody => {
            chai.request(url+"/discussionsTest").get("/getFive").then(res =>{
                chai.expect(err).to.be.null;
                    chai.expect(res).to.have.status(200)
                    chai.expect(res.body).to.equal(testBody.slice(0,4))
            })
    })
    })

    it("/create", function(){
        const testBody2 = {"Movie name": "test7",
        "Username": "TestName",
        "Comment": "Great movie",
        "Rating": 5}
        DiscussionsModel.create(testBody2).then(res => {
            chai.request(url+"/discussionsTest").post("/create").then( res => {

            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(201);
            chai.expect(JSON.stringify(res.body)).to.equal(JSON.stringify(testBody.push(testBody2)));
        })
    })
})
})
 
after("Stop server", function(){
    server.close();
})
