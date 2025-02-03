const mongoose = require("mongoose")

const {Schema} = mongoose

const TestimonalSchema = new Schema({
    image : {
        type : String
    },
    name : {
        type : String
    },
    position :{
        type : String
    },
    reviews : {
        type : String
    }
})

module.exports = mongoose.model("testimonal",TestimonalSchema)