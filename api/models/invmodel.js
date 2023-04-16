const mongoose= require("mongoose");

const inventorySchema ={
    pn:String,
    qn:Number,
    dbim:String
}

const Inventory=mongoose.model("Inventory",inventorySchema);

module.exports =Inventory;