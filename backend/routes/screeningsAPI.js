const router = require("express").Router();
const {ScreeningsModel} = require("../schema/screenings.js");

router.get("/getAll", (req, res) => {
    ScreeningsModel.find({}).then(c => {
        res.status(200).json(c)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

//filter by cinema name and movie name => only gives back dates and times
router.get("/getDateAndTime", (req, res) => {
    const byCinemaName = ScreeningsModel.find({$and: [ {CinemaName:req.body.CinemaName}, {MovieName:req.body.MovieName}]}, {_id:0, Date:1, Time:1}).then(c => {
        res.status(200).json(c)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})


//filter by cinema name, movie name and date => only gives back time
router.get("/getScreeningTimes", (req,res) => {
    ScreeningsModel.find({$and: [ {CinemaName:req.body.CinemaName}, {MovieName:req.body.MovieName}, {Date:req.body.Date}]}, {_id:0, Time:1}).then(d => {
        res.status(200).json(d)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})


module.exports = router;

