const Joi = require("joi");
const { HTTP_CODES } = require("../constants/constants");
const UtilService = require("../services/utils");

function validateCreateMenuItem(body) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
        categoryId: Joi.string().required(),
        restaurantId: Joi.string().required(),
        price: Joi.number().positive().required(),
        image: Joi.string().optional(),
        quantityAllowed: Joi.number().min(1).max(30).required()
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}

function validateUpdateMenuItem(body) {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().optional(),
        description: Joi.string().optional(),
        categoryId: Joi.string().optional(),
        price: Joi.number().positive().optional(),
        image: Joi.string().optional(),
        quantityAllowed: Joi.number().min(1).max(30).optional()
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}

function validateGetAllMenusOfRestaurant(body) {
    body = UtilService.initializeValues(body);

    const schema = Joi.object({
        sortColumn: Joi.string().valid('price', '_id').optional(),
        sortDirection: Joi.string().valid('ASC', 'DESC').optional(),
        page: Joi.number().positive().greater(0).optional(),
        size: Joi.number().positive().greater(0).optional(),
        filter: Joi.object({
            restaurantId: Joi.string().required(),
            name: Joi.string().optional(),
            categoryId: Joi.string().optional(),
            price: Joi.number().optional(),
        }).optional(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }

    return body;
}


module.exports = {
    validateCreateMenuItem,
    validateUpdateMenuItem,
    validateGetAllMenusOfRestaurant
}