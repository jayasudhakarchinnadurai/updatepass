const express=require("express");
const App_Server = require("./app.js");
const node_server=express();
const cors = require("cors")
node_server.use(cors())
require("dotenv").config()
node_server.use("/",App_Server)
node_server.listen(process.env.PORT,()=>console.log(`App Start${process.env.PORT}`))
