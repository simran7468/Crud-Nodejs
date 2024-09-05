 const mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/Productdetail').then(()=>{
    console.log("connection successfull")
 }).catch((e)=>{
    console.log(e);
 })

 const Schema = new mongoose.Schema({
    id:Number,
    name:String,
    price:String

 })

 const Productmodel = mongoose.model("Product", Schema);

 module.exports = Productmodel;