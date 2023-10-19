require('dotenv').config();
const express = require('express');

const app = express();

const port = 3000;

const taskRoutes= require('./routes/tasks');

const connectDB = require('./db/connect');
app.use(express.json());

app.get('/tasks', (req, res)=>{
    res.end("Hello from home side");
});


app.use('/api/v1/task', taskRoutes);      

const start = async()=>{
    try{
       await connectDB(process.env.MONGO_URI);
       app.listen(port, (req, res)=>{
        console.log(`connected on port number ${port}..`)
    }); 
    }catch(err){
        console.log(err);
    }
}

start();

