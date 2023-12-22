const express= require("express")
const router = express.Router()
const {home,createUser,getUsers,deleteUser}=require('../controllers/userControllers')

router.get("/",home)
router.get("/getusers",getUsers)
router.post("/createuser",createUser)
router.delete("/deleteuser/:id",deleteUser)
module.exports=router