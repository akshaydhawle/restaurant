const Joi = require('joi');
const { CustomError } = require('../services/utils');

const payment = Joi.object({
    card: Joi.object({
        number: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
        exp_month: Joi.number().positive().min(1).max(12).required(),
        exp_year: Joi.number().positive().min(2000).max(3000).required(),
        cvc: Joi.string().length(3).pattern(/^[0-9]+$/).required(),
    }),
}).required();

const cartItems = Joi.array().items(
    Joi.object({
        _id: Joi.string().required(),
        userId: Joi.string().required(),
        restaurantId: Joi.string().required(),
        menuId: Joi.string().required(),
        quantity: Joi.number().min(1).required()
    })
).min(1).required();

function validateCheckout(logName, body) {
    console.log(`${logName} : validing body input : userId | cartItems | payments ...`);
    // validation
    const schema = Joi.object({
        userId: Joi.string().required(),
        payment: payment,
        cartItems: cartItems,
        shipping: Joi.object().optional(),
    })
    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: 400 })
    }
    console.log(`${logName} : validation done ...`);
}

module.exports = {
    validateCheckout
}