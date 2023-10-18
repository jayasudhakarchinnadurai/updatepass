const usermodel = require("../schema/userschema.js");
const userRouter=require("express").Router();

const {passwordchange,passwordupdate,passwodcheck,createtoken,validate}=require("../auth.js")

userRouter.post("/createuser" ,async(req, res)=>{
  const {name, email, password}=req.body

    try {
        
    const user= await usermodel.findOne({email:email})
        if(!user){
            const value = await passwordchange(password)
            const userdata = await usermodel({
                name:name,
                email:email,
                password:value
            })
            userdata.save();
            res.status(201).send({
                message:"sign up successful"
            })
        }else {
          
            res.status(400).send({
                message:"its email already taken",
               
    
            })
        }
       

        
    } catch (error) {
        res.status(500).send({message:"internal server error",error})
        
    }

})




userRouter.patch("/edit",validate, async(req,res)=>{
  try {
      const {email,password}=req.body
      const user= await usermodel.findOne({email:email});
      const updatepass= await passwordupdate(password)
      const edit =  await usermodel.findByIdAndUpdate(user.id,
          {$set:
          {
          
        password:updatepass
         }})
         res.status(201).send({
          message:"update succesfull",
          data:edit

         })

  } catch (error) {
      res.status(500).send({
          message:error
      })
      
  }

})

userRouter.post("/check",async(req,res)=>{
      const {email,password}=req.body
    try {
        const user = await usermodel.findOne({email:email})
        
     if(user){
        
            const check= await passwodcheck(password,user.password)   
            if(check == true){
                res.status(200).send({
                    message:"login successfull"
                })

            }else{
                res.status(402).send({
                    message:"password wrong"
                })
            } 
        } else{
            res.status(402).send({
                message:"invaild creadentials"
            })   
        }
    
       
      
    } catch (error) {
        res.status(500).send({
            message:"internal server"
        })
        
    }
})

userRouter.post("/email",async(req,res)=>{
       const {email}=req.body
    try {
        const user=await usermodel.findOne({email:email})
        if(user){
            const token=createtoken({
                name:user.name, 
                email:user.email,
                id:user._id
            })
           return  res.status(201).send({message:"fetch successfull",token});
            
        }else{
            return  res.status(402).send({
                message:"invaild cretendials"
            })
        }
        
    } catch (error) {
        return  res.status(500).send({
            message:"your internal server"
        })
        
    }

})
module.exports=userRouter;