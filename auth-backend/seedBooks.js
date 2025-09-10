const mongoose = require('mongoose');
const Book = require('./models/Book');

mongoose.connect('mongodb://localhost:27017/bookstore')
    .then(() => console.log('Mongo Book Database Connected'))
    .catch((err) => console.error('MongoDB Book Database Connection Error.', err));

const books = [{
    title: "Energize Your Mind",
    author: "Guru Gopal Das",
    description: 'In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works. He combines his anecdotal style with analytical research to teach us how to discipline our mind for our greater well-being. Throughout this book, he provides interactive exercises, meditation techniques and worksheets to help us take charge of our mind.This book is an essential read for anyone who wants to work towards a better, more fulfilling future for themselves.',
    image: "../src/assets/Books_img/book1.jpg",
    price: '199/-',
    rating: '4.5',
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Big Magic",
    author: "",
    description: 'A book by Elizabeth Gilbert...',
    image: 'Book2',
    price: "219/-",
    rating: 4.3,
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "One Day Life will...",
    author: "",
    description: "A story of love and inspiration to win life... ",
    image: 'Book3',
    price: "189/-",
    rating: 4.2,
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Atomic Habits",
    author: "",
    description: "A comprehensive, practical guide on...",
    image: 'Book4',
    rating: 3.5,
    price: "201/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Ikigai",
    author: "",
    description: "book which talks about finding your purpose...",
    image: 'Book5',
    rating: 4,
    price: "179/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "You Can",
    author: "",
    description: "Do you often wonder whether you really have...",
    image: 'Book6',
    rating: 3.9,
    price: "250/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "You Become What...",
    author: "",
    description: "Description",
    image: 'Book7',
    rating: 4,
    price: "199/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Mindset",
    author: "",
    description: "Description",
    image: 'Book8',
    rating: 3.5,
    price: "199/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Don't Believe...",
    author: "",
    description: "Description",
    image: 'Book9',
    rating: 3.9,
    price: "199/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    author: "",
    title: "Do It Today",
    description: "Description",
    image: 'Book10',
    rating: 4.6,
    price: "199/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "Miracles of Your...",
    author: "",
    description: "Description",
    image: 'Book11',
    rating: 3.8,
    price: "199/-",
    reviews: ['Very inspiring', 'Great Book']
},
{
    title: "The Secret of Success",
    author: "",
    description: "Description",
    image: 'Book12',
    price: "199/-",
    rating: 4.1,
    reviews: ['Very inspiring', 'Great Book']
},];

// eslint-disable-next-line no-unused-vars
async function seedBooks() {
    try {
        await Book.deleteMany();
        await Book.insertMany(books);
        console.log("Books seeded successfully!");
        mongoose.connection.close();
    }
    catch (err) {
        console.error("Sending error: ", err);
    }
}

seedBooks();