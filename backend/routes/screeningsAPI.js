const router = require("express").Router();
const {ScreeningsModel} = require("../schema/screenings");

router.get("/getAll", (req,res) => {
    ScreeningsModel.find({CinemaName:req.body.CinemaName, Movie}).then(b => {
        res.status(200).json(b)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

module.exports = router;