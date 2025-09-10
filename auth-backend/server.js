const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes= require('./routes/auth');

const app=express();
app.use(cors());
app.use(express.json());

//MongoDb connect
mongoose.connect('mongodb://localhost:27017/authdb'
    /*,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}*/
    )
.then(()=>console.log('MongoDb Connected'))
.catch((error)=>console.error('MongoDb Connection Error: ',error));

//Routes
app.use('/api',authRoutes);

//Start server
app.listen(5000,()=>{
    console.log('Server running on http://localhost:5000');
});
