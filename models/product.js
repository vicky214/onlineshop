const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    warranty:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
   });
module.exports= mongoose.model('Product',productSchema);
