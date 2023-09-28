const express = require('express')
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const userRoutes = require("./routes/userRoutes");

const app= express()
dotenv.config();

app.use(express.json());

const cors = require('cors')
app.use(cors());

const connectDb = async() =>{
    try{
        const connect= await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is conneceted to MongoDB database..")
    }
    catch(err){
        console.log("Server Not Connected to database",err.message)
    }
}

connectDb();

app.get('/', (req,res) =>{
    res.send('API is Running 1234..')
})


app.use("/user",userRoutes);

/*

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin accordingly in a production environment
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/register',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})
*/
const MONGO_URI = process.env.MONGO_URI

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('server started....')
})