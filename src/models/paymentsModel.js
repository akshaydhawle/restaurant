const mongoose = require('mongoose');

const options = { timestamps: true };

const paymentsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        mode: {
            type: String,
            enum: ["NETBANKING", 'DEBIT', 'CREDIT']
        },
        transactionAmount: Number,
        status: { type: String, enum: ['SUCCESS', 'FAILED', 'IN-PROCESS'] },
    },
    options
);

const paymentsModel = mongoose.model('payments', paymentsSchema);
module.exports = {
    paymentsModel
}