const mongoose = require('mongoose');

const eventRegSchema = new mongoose.Schema(
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
        contactDetails :
        {
            type: Number,
            limit : 10,
            required: [true,'Contact Details Required']
        }
    }
)

module.exports = mongoose.model("Event", eventRegSchema);