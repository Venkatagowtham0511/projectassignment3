const express=require("express");
const router=express.Router();
const Inventory=require("../models/invmodel");
router.get('/',async function(req,res,next){
    //const plenty=await Inventory.find({});
    //res.json(plenty);
    await Inventory.find().then(foundinventory => res.json(foundinventory));
})
module.exports=router;