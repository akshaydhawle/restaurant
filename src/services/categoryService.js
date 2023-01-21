const { MESSAGES, HTTP_CODES } = require('../constants/constants');
const { categoriesModel } = require('../models/categoriesModel');
const { CustomError } = require('./utils');

async function checkIfCategoryAlreadyExists({ name }) {
    const location = await categoriesModel.findOne({ name });
    if (location) {
        console.log(`${logger} :  ${MESSAGES.CATEGORIES_ALREADY_EXISTS}`);
        throw CustomError({ message: MESSAGES.CATEGORIES_ALREADY_EXISTS, statusCode: HTTP_CODES.CONFLICT })
    }
    return location;
}

// save location data
async function saveCategory(locationInfo) {
    return await categoriesModel(locationInfo).save();
}

async function findAllCategories() {
    return await categoriesModel.find();
}

module.exports = {
    checkIfCategoryAlreadyExists,
    saveCategory,
    findAllCategories
}