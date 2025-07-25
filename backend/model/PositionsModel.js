const {model} = require('mongoose');

const {PositionsSchema} = require("../schema/PositionsSchema")

const PositionsModel = new model("Position", PositionsSchema)   

module.exports = {PositionsModel}