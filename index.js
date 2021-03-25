require('dotenv').config({path:'./config.env'})

// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
var app = express();

require('./db/connection')
//  const DB= "mongodb+srv://tanya:tanyanagi@cluster0.mjjmk.mongodb.net/mernstack?retryWrites=true&w=majority"
// const User = require("./model/userSchema");
app.use(express.json())


app.use(require('./router/auth'))

// dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;

const middleware=(req,res,next)=>{
    console.log("heelo");
    next();
}
middleware;

app.listen(PORT,()=>{
    console.log(`server is listening ${PORT}`);
})