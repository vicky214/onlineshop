const express = require('express');
const router = express.Router();
var app = express();
const mongoose = require('mongoose');
const Product = require('../models/product')
const cors = require('cors')
var bodyParser = require('body-parser')
const {JWT_SECRET} = require('../config/db')
const User = require('../models/user')
const Seller = require('../models/seller')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

router.post('/createproduct',(req,res)=>{
    const {product_name,product_type,description,warranty,price,url,count} = req.body
    if(!product_type || !product_name || !description || !warranty || !price || !count){
       return res.status(422).json({error:"Please fill all the fields"})
    }
   const productData = {
       product_name,
       product_type,
       warranty,
       price,
       description,
       count,
       image:url,
   }
   Product.create(productData)
   .then(product=>{
       res.json({message: 'Your product has succesfully created'})
   })
   .catch(err=>{
       res.send({error:'error'})
   })
})

router.get('/allproduct',(req,res)=>{
    Product.find()
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
})

module.exports= router;