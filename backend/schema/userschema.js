const mongoose=require("mongoose");
const validator=require("validator");


const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
     type:String,
     required:true,
     lowercase:true,
     validate:(value)=>{
        return validator.isEmail(value)
     }
    },
    password:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        required:true,
        default:Date.now
    }


},
{
    versionKey:false
}

);




let user=mongoose.model("userdatas", userschema)

module.exports=user