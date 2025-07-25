const { model } = require('mongoose');
const { HoldingsSchema } = require("../schema/HoldingsSchema")

const HoldingsModel = new model("Holding", HoldingsSchema)


module.exports = { HoldingsModel }