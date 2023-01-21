const Joi = require('joi');
const { CustomError } = require('../services/utils');

function validateRegister(body) {
    // validation
    const schema = Joi.object({
        type: Joi.string().required(),
        name: Joi.string().optional(),
        email: Joi.string().required(),
        password: Joi.string().min(5).max(15).required(),
    })
    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: 400 })
    }
}

function validateLogin(body) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: 400 })
    }
}

function validateResetPassword(body) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.ref('password').required()
    })
    const { error } = schema.validate(body);
    if (error) {
        throw CustomError({ message: error.details[0].message, statusCode: 400 })
    }
}

module.exports = {
    validateRegister,
    validateLogin,
    validateResetPassword
}