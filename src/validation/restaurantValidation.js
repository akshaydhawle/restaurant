const Joi = require("joi");
const { HTTP_CODES } = require("../constants/constants");
const { CustomError } = require("../services/utils");

function validateCreateRestaurant(body) {
    const schema = Joi.object({
        name: Joi.string().required(),
        openTime: Joi.number().required(),
        closeTime: Joi.number().required(),
        openDays: Joi.array().items(),
        address: Joi.string().required(),
        ownerId: Joi.string().required(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
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
        throw CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}

function initializeValues(body) {
    body.sortColumn = body.hasOwnProperty('sortColumn') ? body.sortColumn : '_id';
    body.sortDirection = (body && body.sortDirection) ? body.sortDirection : 'DESC';
    body.filter = (typeof body.filter === 'string') ? JSON.parse(body.filter) : {};
    body.page = (body && body.page) ? Number(body.page) : 1;
    body.size = (body && body.size) ? Number(body.size) : 10;
    return body;
}


function validateGetAllRestaurantForUsers(body) {
    body = initializeValues(body);

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
        throw CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }

    return body;
}


module.exports = {
    validateCreateRestaurant,
    validateUpdateRestaurant,
    validateGetAllRestaurantForUsers
}