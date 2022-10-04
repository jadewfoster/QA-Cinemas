const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({

    Name: String,
    Actors: [String],
    Director: String,
    Genre: String,
    "Release Date": String,
    Duration: Number,
    Classification: String
})

const ScreeningSchema = mongoose.Schema({
    CinemaName: {type:String, required:true},
    ScreenNum: {type:Number, required:true},
    ScreenType: {type:String, required:true},
    Movie: {type:[MovieSchema], required:true},
    Date: {type:String, required:true},
    Time: {type:String, required:true},
    SeatsLeft: {type:Number, required:true}
});

const ScreeningsModel = mongoose.model("Screenings", ScreeningSchema);

module.exports = {ScreeningsModel, ScreeningSchema};