 const axios=require("axios");

exports.idel=(req,res)=>{
    res.render("details");
}
exports.idcard=(req,res)=>{
axios.get("http://localhost:10000/base")
    .then(function(responce){
        res.render("idcard",{base:responce.data}); 
    }
    )
   
 }
 exports.icard=(req,res)=>{
    axios.get("http://localhost:10000/base",{params :{name :req.query.name }})
    .then(function(response){
        res.render("card",{base:response.data});
        console.log({base:response.data}); 
    }
    )
 }
