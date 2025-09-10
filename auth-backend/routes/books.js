const express=require('express');
const router = require('./auth');
const Book=require('../models/Book');

router.get('/',async(req,res)=>{
    try{
        const books=await Book.find();
        res.json(books);
    }
    catch(err){
        res.status(500).json({error:'Server error'});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        if(!book)
        {
            return res.status(404).json({error:'Book not Found'});
        }
        res.json(book);
    }
    catch(err){
        res.status(500).json({error:'Server error'});
    }
});

module.exports=router;