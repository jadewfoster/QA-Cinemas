import mongoose from "mongoose";
const{Schema, model} = mongoose;

const DiscussionsSchema = new Schema({

    "Movie name": String,
    Username: String,
    Comment: String,
    Rating: Number
})

const DiscussionsModel = model("Discussions", DiscussionsSchema);
module.exports = {DiscussionsModel, DiscussionsSchema};