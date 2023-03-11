const express=require("express");
const route=express.Router();

const expo=require("../export/export");
const con=require("../controller/controller");



route.get("/",expo.idel);
route.get("/card",expo.icard);
route.get("/idcard",expo.idcard);

route.post("/base",con.create);
route.get("/base",con.find);

module.exports=route;