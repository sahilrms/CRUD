const express= require("express")
const router = express.Router()
const {home,createUser}=require('../controllers/userControllers')

router.get("/",home)
router.post("/createuser",createUser)
module.exports=router