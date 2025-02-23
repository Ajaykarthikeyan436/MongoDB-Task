const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/library").then(()=>{console.log("Database Connected....")})
.catch(()=>{console.log("Database Did not Connected !")})

const Books = mongoose.model("Books",{title:String,author:String,published_year:Number},"books")

app.get("/",(req,res)=>{
    res.send("You are Enterted To the Backend")
})

Books.find().sort({published_year:1}).limit(1).then((retdata)=>{console.log(retdata)})

app.listen(5000,function(){
    console.log("Server Started....")
})