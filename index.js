const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT=8000
const DB = "mongodb://mymongo:27017/testup"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("Error in DB connection")
})


app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to multicontainer docker app"
    })
})

app.listen(PORT,()=>{
    console.log(`server is started on port ${PORT}`)
})