const express = require('express')
require('dotenv').config();
const app=express();
const connectToDB= require("./configs/db.js")
connectToDB();
app.get("/",(req,res)=>{
res.send("Welcome to app")
})

module.exports=app