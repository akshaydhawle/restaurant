const mongoose = require('mongoose');

const options = { timestamps: true };

const menusSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'restaurants'
        },
        price: Number,
        image: String,
        quantityAllowed: { type: Number },
    },
    options
);

const menusModel = mongoose.model('menus', menusSchema);
module.exports = {
    menusModel
}