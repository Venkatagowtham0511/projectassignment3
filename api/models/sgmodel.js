const mongoosee= require("mongoose");

const signupSchema ={
    uname:String,
    snum:Number,
    clg:String,
    psw:String
}
const Signup=mongoosee.model("Signup",signupSchema);
module.exports =Signup;
