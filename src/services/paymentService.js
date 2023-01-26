const { paymentsModel } = require("../models/paymentsModel");

async function markPayment({ logName, userId, amount }) {
    console.log(`${logName}: markPayment: started`);
    return await paymentsModel({ userId, transactionAmount: amount })
};
async function markPaymentStatus(logName, paymentModel, { status, transactionId }) {
    console.log(`${logName}: markPaymentStatus: started, status: `, status);

    paymentModel.status = status;
    if (transactionId) paymentModel.transactionId = transactionId;
    await paymentModel.save();
};

module.exports = {
    markPayment,
    markPaymentStatus
}