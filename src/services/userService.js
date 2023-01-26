const { MESSAGES, HTTP_CODES } = require('../constants/constants');
const { usersModel } = require('../models/usersModel');
const { CustomError } = require('./utils');

// check if user with email id already registered
async function checkIfUserAlreadyExists({ email }) {
    const user = await usersModel.findOne({ email });
    if (user) {
        console.log(`${logger} :  ${MESSAGES.USER_ALREADY_EXISTS}`);
        throw CustomError({ message: MESSAGES.USER_ALREADY_EXISTS, statusCode: HTTP_CODES.CONFLICT })
    }
    return user;
}

// find user
async function isUserValid({ key, value }) {
    const user = await usersModel.findOne({ [key]: value });
    if (!user) {
        throw CustomError({ message: MESSAGES.USER_NOT_FOUND, statusCode: HTTP_CODES.NOT_FOUND })
    }
    return user;
}

// save user data
async function saveUser(userInfo) {
    return await usersModel(userInfo).save();
}

module.exports = {
    checkIfUserAlreadyExists,
    saveUser,
    isUserValid
}