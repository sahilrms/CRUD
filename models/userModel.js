const mongoose =require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[30,"Max length must be <30"]
    },
    email:{
        type:string,
        required:[true,"Email is required"],
        trim:true,
        maxLength:[50,"Max length must be <30"]
    }
})
module.exports=mongoose.model("user",userSchema)