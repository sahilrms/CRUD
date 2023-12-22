const express = require('express')
require('dotenv').config();
const app=express();
const connectToDB= require("./configs/db.js")
connectToDB();
const userRoutes = require('./routes/userRoutes.js')
app.use("/",userRoutes)

module.exports=app