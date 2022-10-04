import mongoose from "mongoose";
const{Schema, model} = mongoose;

const MovieSchema = new Schema({

    Name: String,
    Actors: [String],
    Director: String,
    Genre: String,
    "Release Date": String,
    Duration: Number,
    Classification: String
})

const MovieModel = model("Movies", MovieSchema);
module.exports = {MovieModel, MovieSchema};