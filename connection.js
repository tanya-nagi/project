const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect("mongodb://localhost:27017/mernstack",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then( ()=>{
    console.log("connected");
}).catch( (err)=>{
    console.log("not conneected")
})