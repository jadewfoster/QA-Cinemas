const router = require("express").Router();
const {ScreeningsModel} = require("../schema/screenings.js");

router.get("/getAll", (req, res) => {
    ScreeningsModel.find({}).then(c => {
        res.status(200).json(c)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

//filter by cinema name and movie name
router.get("/getAllScreenings", (req, res) => {
    ScreeningsModel.find({CinemaName:req.body.CinemaName}).then(c => {
        res.status(200).json(c)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

//filter by cinema name, movie name and date
router.get("/getScreeningTimes", (req,res) => {
    ScreeningsModel.find({CinemaName:req.body.CinemaName, Movie:req.body.Movie.Name, Date:req.body.Date}).then(c => {
        res.status(200).json(c)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

module.exports = router;

