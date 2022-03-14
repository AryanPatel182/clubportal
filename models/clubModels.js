const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Product Name Required"],
            trim:true
        },
        description:{
            type:String,
            required:[true,"Description Required"]
        }
  }  
);

module.exports = mongoose.model("Club", clubSchema);