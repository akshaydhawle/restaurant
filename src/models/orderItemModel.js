const mongoose = require('mongoose');

const options = { timestamps: true };

const orderItemsSchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders'
        },
        itemDetails: Object,
        quantity: Number,
        price: Number,
        status: String,
        waitTime: String
    },
    options
);

const orderItemsModel = mongoose.model('orderItems', orderItemsSchema);
module.exports = {
    orderItemsModel
}