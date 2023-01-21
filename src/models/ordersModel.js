const mongoose = require('mongoose');

const options = { timestamps: true };

const ordersSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'restaurants'
        },
        total: Number,
        tax: Number,
        quantity: Number,
        status: String
    },
    options
);

const ordersModel = mongoose.model('orders', ordersSchema);
module.exports = {
    ordersModel
}