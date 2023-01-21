const mongoose = require('mongoose');

const options = { timestamps: true };

const users = new mongoose.Schema(
    {
        name: String,
        type: { type: String, enum: ["ADMIN", "SELLER", "USER"] },
        email: String,
        password: String,
        address: {
            street: String,
            zipcode: String,
            line1: String,
            line2: String
        },
        otp: {
            otp: Number,
            expireTime: Date
        },
        profilePic: String,
        phoneNumber: Number
    },
    options
);

const usersModel = mongoose.model('users', users);
module.exports = {
    usersModel
}