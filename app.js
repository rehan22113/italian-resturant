const express =require("express")
const app= express();
const hbs =require("express-handlebars");
const routes = require("./routes/main");
const admin = require("./routes/admin");
const bodyParser = require("body-parser")
const port = process.env.PORT || 5050;
const mongodb = require("./db/mongodb")
const flash =require("connect-flash")
const cookieParser =require("cookie-parser")
const session =require("express-session")
mongodb();
app.engine(".hbs", hbs({defaultLayout:"main",extname:".hbs"}))
app.set("view engine",".hbs")
app.use("/public", express.static(__dirname + '/public'));
app.use("/",routes)
app.use("/admin",admin)
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash())
app.use(cookieParser());
app.use(session({
	secret:'24houritalian123',
	saveUninitialized:true,
	resave:true
	}));


app.listen(port,()=>{
    console.log(`server start at port ${port}`)
});