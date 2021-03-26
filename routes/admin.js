const express =require("express")
const routes = express.Router();
const mongoose = require("mongoose")
const collection = require("../model/reservation")
const auth = require("../auth/auth")
const time = require("../model/time")




routes.get("/",auth,async(req,res)=>{
    const data = await collection.find().lean();
    res.render("admin",{data:data})
})
routes.get("/login",(req,res)=>{
    res.render("login")
})
routes.get("/time",auth,async(req,res)=>{
    res.render("time")
})

module.exports = routes;