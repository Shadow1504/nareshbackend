const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();

mongoose.connect("mongodb+srv://1:1@cluster0.awtvh5m.mongodb.net/?retryWrites=true&w=majority",{

})



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",require("./server/routes/route"));



app.listen(10000,()=>{
    console.log("connected");
})