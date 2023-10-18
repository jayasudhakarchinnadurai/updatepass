const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

 const passwordchange= (password)=>{
  const salt= bcrypt.genSaltSync(10)
  const hash=bcrypt.hashSync(password,salt)
  return hash
}

const passwodcheck = async(password,hash)=>{
  const hased =bcrypt.compareSync(password,hash)
  return hased
}



  const passwordupdate =async(password)=>{
    const data = bcrypt.genSaltSync(10);
    const value = bcrypt.hashSync(password,data);
    return value
}


const privateKey="adouipnaiooehzlaso"

const createtoken=(payload)=>{
    const token = jwt.sign(payload,privateKey,{expiresIn:"3m"})
    return  token
}
const validate =async(req, res, next)=>{
  if(req.headers.authorization){
      let token =req.headers.authorization.split(" ")[1]
      let data = jwt.decode(token)
      
      if(Math.floor((+new Date())/1000)<data.exp){
          next()
      }
     
      else{
       res.status(401).send({
       message:"token expried"})
          }
     
  }else{
      res.status(400).send({
          message:"invaild token"
      })

  }


}


  module.exports={passwordchange, passwordupdate,passwodcheck ,createtoken ,validate}