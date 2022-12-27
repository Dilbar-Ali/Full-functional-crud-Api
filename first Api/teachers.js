const express=require('express');
const router=express.Router();


//Get Api
//Get all teacher data  from database
//End point: /api/v1/teachers

router.get('/',async(req,res)=>{
    try{
    
   res.send('Hello World i am response from Teacher  server');
        console.log("Teacher data fetched successfully");
    }catch(err){
        res.send('Error'+err);
    }
});

module.exports=router;