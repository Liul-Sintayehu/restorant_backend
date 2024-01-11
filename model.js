const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
     title: String,
     price: String,
     amount: String,
     table: String
})

const OrderModel = mongoose.model('Orders',orderSchema)

module.exports = OrderModel