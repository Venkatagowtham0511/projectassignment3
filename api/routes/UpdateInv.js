const express=require("express");
const router=express.Router();
const Inventory=require("../models/invmodel");
router.put('/:item_id', async function(req,res,next){
   const result=await Inventory.findByIdAndUpdate(req.params.item_id,{$set:req.body,},{new:true});
   res.json(result);
});
module.exports=router;