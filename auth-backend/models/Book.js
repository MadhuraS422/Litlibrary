const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    description:String,
    image:String,
    price:String,
    rating: Number,
    reviews:[String]
});

module.exports=mongoose.model('Book',bookSchema);