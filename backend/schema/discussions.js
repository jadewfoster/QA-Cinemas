const mongoose = require("mongoose");
const{Schema, model} = mongoose;

const DiscussionsSchema = new Schema({

    "MovieName": String,
    Name: String,
    Comment: String,
    Rating: Number
})

const DiscussionsModel = model("Discussions", DiscussionsSchema);

module.exports = {DiscussionsModel, DiscussionsSchema};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           