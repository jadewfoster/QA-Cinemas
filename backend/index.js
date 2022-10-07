const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use("/cinema/discussions", require("./routes/discussionsAPI"));
app.use("/cinema/ticketprices", require("./routes/ticketPricesAPI"));
app.use("/cinema/screenings", require("./routes/screeningsAPI"));

//testing routes
app.use("/cinema/discussionsTest", require("./routes/discussionsAPI"));
app.use("/cinema/ticketpricesTest", require("./routes/ticketPricesAPI"));
app.use("/cinema/screeningsTest", require("./routes/screeningsAPI"));

mongoose.connect("mongodb://127.0.0.1:27017/Cinema").then(() => {
    console.log("DB connected!");
})

const server = app.listen(3001, () => {
    console.log("Server started successfully on port " + server.address().port);
}) 


server.on("close", () => {
    mongoose.connection.close();
})

module.exports = server;