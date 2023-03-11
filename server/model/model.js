const mongoose=require("mongoose");

const datas=new mongoose.Schema({
   id:{
    type:String,
    
   },
    name:{
        type:String,
        required:true
    },
    depart:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    birth:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const colls=mongoose.model("collect",datas);
module.exports=colls;