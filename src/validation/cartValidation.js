const Joi = require('joi');
const UtilService = require('../services/utils');

function validateAddToCart(body) {
    // validation
    const schema = Joi.object({
        items: Joi.array().items(
            Joi.object({
                userId: Joi.string().required(),
                restaurantId: Joi.string().required(),
                menuId: Joi.string().required(),
                quantity: Joi.number().min(1).required()
            })
        ).min(1).required()
    });
    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: 400 })
    }
}

function validateGetAllCartItems(body) {
    body = UtilService.initializeValues(body);

    const schema = Joi.object({
        sortColumn: Joi.string().valid('_id').optional(),
        sortDirection: Joi.string().valid('ASC', 'DESC').optional(),
        page: Joi.number().positive().greater(0).optional(),
        size: Joi.number().positive().greater(0).optional(),
        filter: Joi.object({
            userId: Joi.string().required(),
            name: Joi.string().optional(),
        }).optional(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }

    return body;
}

module.exports = {
    validateAddToCart,
    validateGetAllCartItems
}