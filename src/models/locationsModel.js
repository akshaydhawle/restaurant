const mongoose = require('mongoose');

const options = { timestamps: true };

const locationSchema = new mongoose.Schema(
    {
        name: String,
    },
    options
);

const locationsModel = mongoose.model('locations', locationSchema);
module.exports = {
    locationsModel
}