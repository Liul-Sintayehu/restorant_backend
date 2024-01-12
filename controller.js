const mongoose = require('mongoose')
const OrderModel = require('./model')

const addOrder = (req,res)=>{
    const order = new OrderModel(req.body)
    order.save()
      .then((resp)=>{
        res.json('order accepted')
      })
      .catch((err)=>{
        res.json(err)
      })
}
const getOrders = (req,res)=>{
    OrderModel.find()
      .then((resp)=>{
        res.json(resp)
      })
      .catch((err)=>{
        res.json(err)
      })
}

module.exports = {
    addOrder,
    getOrders
}