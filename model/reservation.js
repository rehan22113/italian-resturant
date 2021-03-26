const mongoose =require("mongoose")

const struct = new mongoose.Schema({
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    party:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})


const model = new mongoose.model("reservation",struct);

module.exports = model;