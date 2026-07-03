const mongoose = require("mongoose")

const userScehma = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "normal"
    }

}, {timestamps: true})

const userModel = mongoose.model("users", userScehma)

module.exports = userModel