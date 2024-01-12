const express = require('express')
const { addOrder, getOrders, requestWaiter, deleteOrder } = require('./controller')

const Router = express.Router()

Router.post('/addorder',addOrder)
Router.get('/getorders',getOrders)
Router.post('/requestwaiter',requestWaiter)
Router.post('/deleteorder',deleteOrder)

module.exports = Router