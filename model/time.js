const mongoose =require("mongoose")

const struct = new mongoose.Schema({
  time:{
      type:String
  }
})


const model = new mongoose.model("time",struct);

module.exports = model;