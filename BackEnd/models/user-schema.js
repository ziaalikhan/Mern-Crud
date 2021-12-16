const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String,
    mobile: Number,
    country: String
})

const User = mongoose.model("User", userSchema);

module.exports = User;