const { MESSAGES, HTTP_CODES } = require('../constants/constants');
const { locationsModel } = require('../models/locationsModel');
const { CustomError } = require('./utils');

async function checkIfLocationAlreadyExists({ name }) {
    const location = await locationsModel.findOne({ name });
    if (location) {
        console.log(`${logger} :  ${MESSAGES.LOCATION_ALREADY_EXISTS}`);
        throw CustomError({ message: MESSAGES.LOCATION_ALREADY_EXISTS, statusCode: HTTP_CODES.CONFLICT })
    }
    return location;
}

// save location data
async function saveLocation(locationInfo) {
    return await locationsModel(locationInfo).save();
}

async function findAllLocations() {
    return await locationsModel.find();
}

module.exports = {
    checkIfLocationAlreadyExists,
    saveLocation,
    findAllLocations
}