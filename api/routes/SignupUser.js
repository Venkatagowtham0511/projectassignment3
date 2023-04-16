const express=require("express");
const router=express.Router();
const Inventory=require("../models/Userdata");
router.post('/', async function(req,res,next){
    const pp=req.body;
    const pq=new Inventory(pp);
    await pq.save();
    res.json(pp);
});
module.exports=router;