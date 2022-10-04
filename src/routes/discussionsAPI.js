const router = require('express').Router();
const {DiscussionsModel} = require("../schema/discussions.js");

router.post("/create", (req,res) => {
    DiscussionsModel.create(req.body).then(ds => {
        res.status(201).json(ds);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

//getting the latest 5 posts
router.get("/getFive", (req,res) => {
    DiscussionsModel.find({}).limit(5).then(ds => {
        res.status(200).json(ds);
    }).catch((err) => {
        res.status(500).json(err);
    })
})