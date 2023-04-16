const express = require('express');
const router = express.Router();
const Inventory = require('../models/invmodel');

router.get('/:item_id', async function(req,res,next){
  console.log("Gowtham");
  res.json("HI");
});
module.exports=router;