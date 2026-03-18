const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exist"],
        required: true
    },

    email: {
        type: String,
        unique: [true, "Account already exist fot this email id"],
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel