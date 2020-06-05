const express = require('express');
const router = express.Router();
var app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
var bodyParser = require('body-parser')
const {JWT_SECRET} = require('../config/db')
const User = require('../models/user')
const Seller = require('../models/seller')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

router.post('/register',(req,res)=>{
    const {name,email,password,phone, address,city,country,state,zip} = req.body ;
    if(!email || !password || !name || !phone|| !address|| !city|| !state|| !zip|| !country){
       return res.status(422).json({error:"please add all the fields"})
    }
    const userData = {
        email,
        password,
        name,
        phone,
        state,
        city,
        country,
        zip,
        address,
    }
    User.findOne({email:email})
    .then(user=>{
        if(!user){
            bcrypt.hash(password, 10, (err,hash)=>{
                userData.password = hash
                User.create(userData)
                    .then(user=>{
                        res.json({message: 'registered succesfully'})
                    })
                    .catch(err=>{
                        res.send('error: ' + err)
                    })
            })
        }
        else{
            res.json({error: 'user already exists'})
        }
    })
    .catch(err=>{
        res.send('error: ' + err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(user=>{
        if (!user){
            return res.json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,user.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:user._id},JWT_SECRET)
                const {_id,name,phone,address,email,state,city,zip,country} = user
                res.json({token,user:{_id,name,phone,address,email,state,city,zip,country}})
            }
            else{
                return res.json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })

    })
})

router.post('/sellersignin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    Seller.findOne({email:email})
    .then(seller=>{
        if (!seller){
            return res.json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,seller.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:seller._id},JWT_SECRET)
                const {_id,name,phone,address,email,city,zip,country} = seller
                res.json({token,seller:{_id,name,phone,address,email,city,zip,country}})
            }
            else{
                return res.json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })

    })
})

router.post('/sellersignup',(req,res)=>{
    const {name,email,password,phone, address,city,country,zip} = req.body ;
    if(!email || !password || !name || !phone|| !address|| !city|| !zip|| !country){
       return res.status(422).json({error:"please add all the fields"})
    }
    const sellerData = {
        email,
        password,
        name,
        phone,
        city,
        country,
        zip,
        address,
    }
    Seller.findOne({email:email})
    .then(seller=>{
        if(!seller){
            bcrypt.hash(password, 10, (err,hash)=>{
                sellerData.password = hash
                Seller.create(sellerData)
                    .then(seller=>{
                        res.json({message: 'Seller registered succesfully'})
                    })
                    .catch(err=>{
                        res.send({error:'error'})
                    })
            })
        }
        else{
            res.json({error: 'Seller already exists'})
        }
    })
    .catch(err=>{
        res.send('error: ' + err)
    })
})

module.exports = router;