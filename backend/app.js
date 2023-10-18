const express=require("express");
const App_Server=express();
const body_parser=require("body-parser");
const userRouter = require("./controller/user.js");

require("./db.js")

App_Server.use(body_parser.json())
App_Server.use(body_parser.urlencoded({extended:true}))
App_Server.use("/api",userRouter)


module.exports=App_Server