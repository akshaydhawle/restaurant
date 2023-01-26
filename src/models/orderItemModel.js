const mongoose = require('mongoose');

const options = { timestamps: true };

const orderItemsSchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders'
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'restaurants'
        },
        restaurantDetails: Object,
        itemDetails: Object,
        quantity: Number,
        price: Number,
        status: { type: String, default: 'order_placed' },
        waitTime: { type: String, default: "30 min" }
    },
    options
);

const orderItemsModel = mongoose.model('orderItems', orderItemsSchema);
module.exports = {
    orderItemsModel
}




