const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const authuser = require('./routes/authuser')
const app = express()
const {MONGOURI} = require('./config/db')
const product = require('./routes/product')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(MONGOURI,{
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser:true,
});
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb yeah..")
});

mongoose.connection.on('error',(err)=>{
    console.log("error during connection" ,err)
});


app.use('/',authuser);
app.use('/',product)


port = process.env.PORT || 5000
app.listen(port,()=>{console.log(`server is running on port ${port}`)})
