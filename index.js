const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
app.listen(3000,async()=>{
 await  mongoose.connect(process.env.mongoURI).then(()=>{
    console.log('db connect')
  }).catch((err)=>console.log(err.message))  
})

app.use(express.json())
app.use('/',require('./routes'))
app.use(async(err,req,res,next)=>{
    console.log('caught')
    res.json(err.message).status(400)
    }) 