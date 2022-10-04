const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use("/discussions", require("./routes/discussionsAPI"));
app.use("/ticketprices", require("./routes/ticketPricesAPI"));
app.use("/screenings", require("./routes/screeningsAPI"));

mongoose.connect("mongodb://localhost:27017/Pokemons").then(() => {
    console.log("DB connected!");
})

const server = app.listen(3001, () => {
    console.log("Server started successfully on port " + server.address().port);
})

module.exports = server;