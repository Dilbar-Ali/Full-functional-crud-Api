const express=require('express');
const app=express();
const student = require('./students');
// const teacher = require('./teachers');

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true}));

app.get('/api/v1/test',(req,res)=>{
    console.log("Student data fetched successfully");
    res.send('Hello World i am response from test server');
}); 


app.use('/api/v1/students',student);
// app.use('/api/v1/teacher',teacher);


app.listen(4300,()=>{
    console.log('Server is running on port 4300');
});