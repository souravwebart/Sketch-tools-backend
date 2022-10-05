const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Provide your email id'],
        unique: [true, 'Email already exist on our database'],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    penColor: {
        type: String,
        required: [true, "Please provide a color!"],
        unique: false,
    },
});

module.exports = mongoose.model.users || mongoose.model("users", userSchema)