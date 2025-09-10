const express = require('express');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router= express.Router();

//Sign Up
router.post('/signup' , async(req,res)=>{
    const{email,password}=req.body;
    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({email,password:hashedPassword});
        await user.save();
        res.status(201).json({message:" User Created Successfully"});
    }
    catch(err){
        res.status(400).json({error: 'Cannot Create the User. Please Check your Email or Password.'});
    }
});

//Login
router.post('/login' , async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({error:'User not Found \n If you don\'t have an account, please Sign Up to generate an account.'});

        const isMatch=await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(401).json({error:'Invalid Credentials'});

        const token =jwt.sign({id:user._id},'secretkey');
        res.json({token});
    }
    catch(err){
        res.status(500).json({error: ' Can\'t Login'});
    }
});

module.exports=router;