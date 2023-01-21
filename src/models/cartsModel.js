const mongoose = require('mongoose');

const options = { timestamps: true };

const cartsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'restaurants'
        },
        menuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menus'
        }
    },
    options
);

const cartsModel = mongoose.model('carts', cartsSchema);
module.exports = {
    cartsModel
}