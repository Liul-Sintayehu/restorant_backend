const express = require('express')
const { addOrder, getOrders } = require('./controller')

const Router = express.Router()

Router.post('/addorder',addOrder)
Router.get('/getorders',getOrders)

module.exports = Router