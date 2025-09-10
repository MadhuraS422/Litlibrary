const express=require('express');
const { default: mongoose } = require('mongoose');
const cors=require('cors');
const bookRoutes=require('./routes/books');

const app=express();
const PORT=3001;

mongoose.connect('mongodb://localhost:27017/bookstore')
.then(()=>console.log('Mongo Book Database Connected'))
.catch((err)=>console.error('MongoDB Book Database Connection Error.',err));

app.use(cors());
app.use(express.json());
app.use('/books',bookRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
