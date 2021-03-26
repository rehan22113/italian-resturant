const express = require("express")
const routes = express.Router();
const bodyParser = require("body-parser")
const reservation = require("../model/reservation")
const cookieParser =require("cookie-parser")
const session =require("express-session")
routes.use(express.json())
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(cookieParser());
routes.use(session({
	secret:'24houritalian123',
	saveUninitialized:true,
	resave:true
	}));
routes.get("/",(req,res)=>{
    res.render("index")
})
routes.post("/reservation",async(req,res)=>{
try{ const date= req.body.date;
 const time=req.body.time;
const party = req.body.party;
const name = req.body.reservation_name;
const email= req.body.reservation_email;
const phone = req.body.reservation_phone;
const message = req.body.reservation_message;

const data = new reservation({
    date:date,
    time:time,
    party:party,
    name:name,
    email:email,
    phone:phone,
    message:message
})
await data.save()
res.redirect("/").status(200);
}
catch(err){
    console.log(err)
}

})

routes.get("/menu",(req,res)=>{
    res.render("menu")
})
routes.get("/index",(req,res)=>{
    res.render("index")
})
routes.get("/logout",(req,res)=>{
    req.session.loggedin=false;
    res.render("index")
})
//login post routes that on {{admin.js}}
routes.post("/logins",(req,res)=>{
    if(req.body.name == "123italian" && req.body.password == "123admin")
    {
        req.session.loggedin=true;
    res.redirect("/admin")
}
    else
    res.render("login").status(401)
})
module.exports = routes;