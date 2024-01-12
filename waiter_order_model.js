const mongoose = require('mongoose')

const waiterOrderSchema = new mongoose.Schema({
     reason: String,
     table: String
})

const WaiterOrderModel = mongoose.model('WaiterOrder',waiterOrderSchema)

module.exports = WaiterOrderModel