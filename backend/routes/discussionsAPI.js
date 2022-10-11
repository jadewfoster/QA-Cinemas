const router = require('express').Router();
const {DiscussionsModel} = require("../schema/discussions");

router.post("/create", (req,res) => {
    DiscussionsModel.create(req.body).then(ds => {
        res.status(201).json(ds);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

//get the latest 5 discussions
router.get("/getAll", (req,res) => {
    DiscussionsModel.find({}).limit(5).then(ds => {
        res.status(200).json(ds);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

//getting the latest 5 posts filtered by movie name
router.get("/getFive", (req,res) => {
    DiscussionsModel.find({MovieName:req.body.MovieName}).limit(5).then(ds => {
        res.status(200).json(ds);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

module.exports = router;