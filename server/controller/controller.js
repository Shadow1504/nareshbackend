const colls=require("../model/model");


exports.create=(req,res)=>{
    const adddetails=new colls({
        id:req.body.id,
        name:req.body.name,
        depart:req.body.depart,
        batch:req.body.batch,
        birth:req.body.birth,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
    })
    adddetails.save().then(doc=>{
        console.log(doc);
        res.redirect("/card");
    })
}
exports.find=(req,res)=>{
   
    colls.find().then((user)=>{
res.send(user);
    })
}
    
