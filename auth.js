const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../db/connection')
const User = require("../model/userSchema")
router.get('/',(req,res)=>{
    res.send('Hello from home page');
})
// promises
// router.post('/register', (req,res)=>{
//     const {name,email,phone, work,password,cpassword} = req.body
//     if(!name|| !email|| !phone||  !work|| !password|| !cpassword){
//         return res.status(422).json({error:"error"})
//     }

//     User.findOne({ email:email})
//         .then((userExist)=>{
//             if(userExist){
//             return res.status(422).json({error:"already registered"})
//         }
//         const user = new User({name,email,phone, work,password,cpassword})

//         user.save().then(()=>{
//             res.status(201).json({msg:"created"})
//         }).catch((err)=>{res.status(500).json({err:"fail to register"})})
//     }).catch(err =>{console.log(err)})
//     // res.json({message:req.body})
  
// })
// ASYNC/AWAIT
router.post('/register',async (req,res)=>{
    const {name,email,phone, work,password,cpassword} = req.body
    if(!name|| !email|| !phone||  !work|| !password|| !cpassword){
        return res.status(422).json({error:"error"})
    }
    try{
        const userExist = await User.findOne({ email:email})
        if(userExist){
            return res.status(422).json({error:"already registered"})
        }

        const user = new User({name,email,phone, work,password,cpassword})
        
        const userRegister = await user.save()
        if(userRegister){
            res.status(201).json({msg:"created"})
        }
    }catch(err){
        console.log(err)
    }
})

// LOGIN ROUTE
router.post('/signin',(req,res)=>{
    // console.log(res.body);
    // res.json({"message":"awesome"})
    try{
      const {email,password} = req.body;
      if(!email||!password){
          return res.status(400).json({message:"invalid"});
      }

      const userLogin = User.findOne({email:email})

      if(!userLogin){
        res.status(400).json({error:"user error successfull"})
        
      }
      else{
      res.json({message:"user signin successfull"})
      }
    }catch(err){
       console.log(err);
    }
})




    
    // res.json({message:req.body})
  


// router.get('/about',middleware,(req,res)=>{
//     res.send('Hello from about page');
// })

// router.get('/contact',(req,res)=>{
//     res.send('Hello from  page');
// })

module.exports = router;