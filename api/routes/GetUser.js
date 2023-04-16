const express=require("express");
const router=express.Router();
const Inventory=require("../models/Userdata");
router.get("/:id",async function(req,res,next){
    const user=await Inventory.findById(req.params.id);
    res.json(user);
});


module.exports=router;