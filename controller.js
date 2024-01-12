const mongoose = require('mongoose')
const OrderModel = require('./model')
const WaiterOrderModel = require('./waiter_order_model')

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

const deleteOrder = (req,res)=>{
  OrderModel.deleteOne({title:req.body.title, table: req.body.table})
        .then((resp)=>{
          res.json(resp)
        })
        .catch((err)=>{
          res.json(err)
        })
}

const requestWaiter = (req,res)=>{
  const waiterOrder = new WaiterOrderModel(req.body)
  waiterOrder.save()
  .then((resp)=>{
    res.json('order accepted')
  })
  .catch((err)=>{
    res.json(err)
  })
}

const getWaiterOrder = (req,res)=>{
  WaiterOrderModel.find()
    .then((resp)=>{
      res.json(resp)
    })
    .catch((err)=>{
      res.json(err)
    })
}

module.exports = {
    addOrder,
    getOrders,
    requestWaiter,
    deleteOrder,
    getWaiterOrder
}