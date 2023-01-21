const Joi = require('joi');
const { CustomError } = require('../services/utils');

function validateCategory(body) {
    // validation
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: 400 })
    }
}

module.exports = {
    validateCategory
}