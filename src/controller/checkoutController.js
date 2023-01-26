const stripeService = require('../services/stripeService');
const paymentService = require('../services/paymentService');
const cartService = require('../services/cartService');
const checkoutValidation = require('../validation/checkoutValidation');
const UtilService = require('../services/utils');
const ordersService = require('../services/orderService');
const { HTTP_CODES, MESSAGES } = require('../constants/constants');

const checkoutController = {
    placeOrder,
};

async function placeOrder(req, res) {
    let logger = `checkoutController: placeOrder`;
    let logName = logger;
    console.log(`${logger}`);

    // extraction
    const { userId, payment, cartItems, shipping } = req.body;

    // global object for payment
    let paymentsResponse;

    try {
        // input validation
        checkoutValidation.validateCheckout(logName, req.body);

        // db validation
        console.log(`validing cart items : restaurants | menus existstence in database ...`);
        // await cartService.validateCartItems(cartItems);

        // payments
        console.log(`${logger}: processing payment ...`);

        // process order
        console.log(`${logger}: processing order & order items`);
        const { order, orderItems } = await ordersService.processOrder({ logName, userId, cartItems });

        // marking payment entry as processing
        console.log(`${logger}: marking payment status to in-progress ...`);
        paymentsResponse = await paymentService.markPayment({ logName, userId, amount: order.totalPayable });

        // calling stripe api for payment
        console.log(`${logger}: stripe: calling checkout api ...`);
        const transaction = await stripeService.checkout(logName, payment.card, order.totalPayable);

        // mark transaction status to successful.
        console.log(`${logger}: marking payment status to success ...`);
        if (paymentsResponse) await paymentService.markPaymentStatus(logName, paymentsResponse, { status: "SUCCESS", transactionId: transaction.id });

        // order
        console.log(`${logger}: processing order`);

        // create order, if failed then refund
        order.transactionId = paymentsResponse._id;
        const orderResponse = await ordersService.createOrder({ logName, order, orderItems });
        console.log(`${logger}: order created: `, JSON.stringify(orderResponse.order));
        console.log(`${logger}: order items count: `, orderResponse.orderItems.length);

        // remove items from cart
        await cartService.removeItems(logName, cartItems);
        console.log(`${logger}: remove items from cart: `);

        // send notifications to the restaurant and user., retry logic. 
        console.log(`${logger}: sending success response ...`);

        // send success.
        return res.status(HTTP_CODES.CREATED).send({
            message: MESSAGES.ORDER_SUCCESS,
            data: orderResponse.order
        })
    } catch (error) {
        // revert transaction status
        if (paymentsResponse && paymentsResponse.status === 'SUCCESS') {
            // refund

        }
        else if (paymentsResponse) {
            await paymentService.markPaymentStatus(logName, paymentsResponse, { status: "FAILED" });
        }

        return UtilService.serverError({ res, error });
    }
}



module.exports = {
    checkoutController
}