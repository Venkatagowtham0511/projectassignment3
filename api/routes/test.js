const express = require('express');
const router = express.Router();
const Inventory = require('../models/invmodel');

router.delete('/:item_id', async function(req,res,next){
  const fruitsdata = await Inventory.findByIdAndDelete(req.params.item_id);
  res.json(fruitsdata);
});
module.exports=router;