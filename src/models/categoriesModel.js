const mongoose = require('mongoose');

const options = { timestamps: true };

const categoriesSchema = new mongoose.Schema(
    {
        name: String,
    },
    options
);

const categoriesModel = mongoose.model('categories', categoriesSchema);
module.exports = {
    categoriesModel
}