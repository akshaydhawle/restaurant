const Joi = require("joi");
const { HTTP_CODES } = require("../constants/constants");
const UtilService = require("../services/utils");

function validateCreateRestaurant(body) {
    const schema = Joi.object({
        name: Joi.string().required(),
        openTime: Joi.number().required(),
        closeTime: Joi.number().required(),
        openDays: Joi.array().items(),
        address: Joi.string().required(),
        ownerId: Joi.string().required(),
        locationId: Joi.string().required()
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}

function validateUpdateRestaurant(body) {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().optional(),
        openTime: Joi.number().optional(),
        closeTime: Joi.number().optional(),
        openDays: Joi.array().items(),
        address: Joi.string().optional(),
        ownerId: Joi.string().optional(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}


function validateGetAllRestaurantForUsers(body) {
    body = UtilService.initializeValues(body);

    const schema = Joi.object({
        sortColumn: Joi.string().valid('name', '_id', 'openTime', 'closeTime').optional(),
        sortDirection: Joi.string().valid('ASC', 'DESC').optional(),
        page: Joi.number().positive().greater(0).optional(),
        size: Joi.number().positive().greater(0).optional(),
        filter: Joi.object({
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
    validateCreateRestaurant,
    validateUpdateRestaurant,
    validateGetAllRestaurantForUsers
}