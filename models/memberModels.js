const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Product Name Required"],
            trim:true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, 'Email address is required'],
        },
        position: {
            type: String,
            enum: ['President', 'Member', 'Vice President'],
            required : [true,'Position Required'] 
        },
        year:{
            type : Number,
            required:[true,'Year Required']
        }
    }
)

module.exports=mongoose.model("Member",memberSchema);