const { model } = require('mongoose');
const { OrdersSchema } = require("../schema/OrdersSchema")

const OrdersModel = new model("Order", OrdersSchema)

module.exports = { OrdersModel }