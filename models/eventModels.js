const mongoose = require('mongoose');

require('mongoose-type-url');

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product Name Required"],
            trim: true
        },
        // poster: {
        //     type: mongoose.SchemaTypes.Url
        // },
        deadline: {
            type:date,
            required:true
        },
        eventAt:{
            type:Date,
            required:true
        }
    }
)

module.exports = mongoose.model("Event", eventSchema);