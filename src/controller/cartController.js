const UtilService = require('../services/utils');
const cartService = require('../services/cartService');
const cartValidation = require('../validation/cartValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const cartController = {
    addToCart,
    getAllCartsData
};

async function addToCart(req, res) {
    try {
        let logger = `cartController: addToCart`
        console.log(logger);

        // validate the user
        cartValidation.validateAddToCart(req.body);
        console.log(`${logger} - cart validated`);

        // save the user in the database
        await cartService.saveToCart(req.body.items);
        console.log(`${logger} - cart data saved in database`);

        console.log(`${logger} - cart created success.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.CART_SUCCESS,
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getAllCartsData(req, res) {
    try {
        let logger = `cartController: getAllLocations`

        // validation
        let body = cartValidation.validateGetAllCartItems(req.query);

        // retrieving restaurants.
        console.log(`${logger} : retrieving cart items ...`);
        const response = await cartService.getCartItems(body);
        console.log(`${logger} : sending response ...`, JSON.stringify(response));

        // adding message to response
        response.message = MESSAGES.RESTAURANT_GET_ALL;
        return res.status(HTTP_CODES.OK).send(response);
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}



module.exports = {
    cartController
}