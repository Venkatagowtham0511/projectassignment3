const express=require("express");
const router=express.Router();
const Inventory=require("../models/invmodel")

router.route("/inv/create").post((req, res) => {
    const pn=req.body.pn;
    const qn=req.body.qn;
    const dbim=req.body.dbim;
    const newinvent =new Inventory({
        pn,
        qn,
        dbim
    });

    newinvent.save();
});

router.route("/inv/Inventory").get((req,res) => {
            Inventory.find().then(foundinventory => res.json(foundinventory))
})

module.exports=router;
 