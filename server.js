const express = require('express')
const mongoose = require('mongoose');
const Router = require('./router');
const cors = require('cors')


const app = express()
app.use(cors())

const url = 'mongodb://127.0.0.1/food_orders';
const newUrl = 'mongodb+srv://liulsintayehu7:KJjTL4UEF0IDW0Jk@cluster0.j9gxzve.mongodb.net/food-ordering-app?retryWrites=true&w=majority'

mongoose.connect(newUrl)
    .then((resp)=>{
        console.log('connected');
    })
    .catch((err)=>{
        console.log(err);
    })

app.listen(3003,()=>{
    console.log('listening to port 3003');
})

//all middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Router)