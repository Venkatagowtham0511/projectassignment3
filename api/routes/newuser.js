const express=require("express");
const router=express.Router();
const Signup=require("../models/sgmodel");
router.post('/', async function(req,res,next){
    alert('data recived');
});
module.exports=router;