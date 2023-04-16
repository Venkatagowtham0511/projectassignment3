const express=require("express");
const router=express.Router();
const Inventory=require("../models/Userdata");

router.post("/",async function(req,res,next){
    const user=await Inventory.findOne({uname:req.body.uname});
    if(!user)
        res.json("InvalidUsername");
    if(user && user.psw!==req.body.psw)
        res.json("InvalidPassword");
    if(user && user.psw===req.body.psw)
        res.json(user.id);
});




module.exports=router;