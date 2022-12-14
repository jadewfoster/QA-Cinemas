const mongoose = require("mongoose");

const TicketPriceSchema = mongoose.Schema({
    UserType: {type:String, required:true},
    ScreenType: String,
    Price: Number
})

const TicketPricesModel = mongoose.model("TicketPrices", TicketPriceSchema);

module.exports = {TicketPricesModel, TicketPriceSchema};