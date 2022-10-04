import mongoose from "mongoose"
const {Schema, model} = mongoose;

const MovieSchema = new Schema({

    Name: String,
    Actors: [String],
    Director: String,
    Genre: String,
    "Release Date": String,
    Duration: Number,
    Classification: String
})

const CinemaSchema = new Schema({

    Name: String,
    Location: String,
    "Phone number": Number,
    "Manager's email": String,
    "Standard Screens": {"Number of screens": Number, Capacity:Number},
    "Movies shown": [MovieSchema],
})

const CinemaModel = model("Cinemas", CinemaSchema);
module.exports = {CinemaModel, CinemaSchema};

