const mongoose =require("mongoose");
const mongodb =()=>{
mongoose.connect("mongodb://localhost:27017/italian",{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database established")
}).catch((err)=>{
    console.log(err)
})
}


module.exports = mongodb;