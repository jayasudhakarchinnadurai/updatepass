const bcrypt=require("bcryptjs");

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



  

  module.exports={passwordchange, passwordupdate,passwodcheck}