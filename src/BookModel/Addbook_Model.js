const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  "_id": String,
  "BookName":{ type: String, required:true },
  "Description":{ type: String, required:true },
  "ImageUrl":{ type: String, required:true },
  "Price":{ type: Number, required:true },
});

module.exports=new mongoose.model("addbooks",BookSchema);