const mongoose= require("mongoose");

const inventorySchema ={
    uname:String,
    snum:String,
    clg:String,
    psw:String
}

const Users=mongoose.model("UserData",inventorySchema);

module.exports =Users;