const mongoose = require('mongoose');

const options = { timestamps: true };

const ordersSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        totalAmount: Number,
        totalPayable: Number,
        tax: Number,
        quantity: Number,
        status: String,
        transactionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'payments',
        },
        deliverAddress: Object
    },
    options
);

const ordersModel = mongoose.model('orders', ordersSchema);
module.exports = {
    ordersModel
}