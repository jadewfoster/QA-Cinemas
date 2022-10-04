const router = require("express").Router();
const {TicketPricesModel} = require("../schema/ticketPrices");

router.get("/get", (req,res) => {
    TicketPricesModel.find({}).then(tp => {
        res.status(200).json(tp);
    }).catch((err) => {
        res.status(500).json(err);
    })
})

//filter by user type and screen type
router.get("/getFiltered", (req, res) => {
    TicketPricesModel.find({UserType:req.body.UserType, "Price.ScreenType":req.body.Price.ScreenType}).then(tp => {
        res.status(200).json(tp)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})