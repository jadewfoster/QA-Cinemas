const router = require("express").Router();
const {TicketPricesModel} = require("../schema/ticketPrices");

router.get("/getAll", (req,res) => {
    TicketPricesModel.find({}).then(tp => {
        res.status(200).json(tp);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

//filtering ticket price by user type and screen type
router.get("/getFiltered", (req, res) => {
    TicketPricesModel.find({$and:
        [
            {UserType : req.body.UserType},
            {ScreenType : req.body.ScreenType}
        ]
    },{_id:0, Price:1}).then(tp => {
        res.status(200).json(tp)
    }).catch((err)=> {
        res.status(500).json(err)
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
})

module.exports = router;