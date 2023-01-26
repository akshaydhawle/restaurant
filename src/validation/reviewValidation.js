const Joi = require("joi");
const { HTTP_CODES } = require("../constants/constants");
const UtilService = require("../services/utils");

function validatePostReview(body) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        restaurantId: Joi.string().required(),
        comment: Joi.string().required(),
        rating: Joi.number().required(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }
}

function validateGetAllReviewsOfRestaurant(body) {
    body = UtilService.initializeValues(body);

    const schema = Joi.object({
        sortColumn: Joi.string().valid('_id', 'rating').optional(),
        sortDirection: Joi.string().valid('ASC', 'DESC').optional(),
        page: Joi.number().positive().greater(0).optional(),
        size: Joi.number().positive().greater(0).optional(),
        filter: Joi.object({
            restaurantId: Joi.string().required(),
            rating: Joi.number().optional()
        }).optional(),
    })

    const { error } = schema.validate(body);
    if (error) {
        throw UtilService.CustomError({ message: error.details[0].message, statusCode: HTTP_CODES.BAD_REQUEST })
    }

    return body;
}


module.exports = {
    validatePostReview,
    validateGetAllReviewsOfRestaurant
}