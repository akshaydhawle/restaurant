const UtilService = require('../services/utils');
const locationService = require('../services/locationService');
const locationValidation = require('../validation/locationValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const locationController = {
    createLocation,
    getAllLocations
};

async function createLocation(req, res) {
    try {
        let logger = `locationController: createLocation`
        const { name } = req.body;
        
        // validate the user
        locationValidation.validateLocation(req.body);
        console.log(`${logger} - location validated`);

        // check if user with name already exists
        await locationService.checkIfLocationAlreadyExists({ name });
        console.log(`${logger} - location does not exists already, proceeding`, name);

        // save the user in the database
        const locationData = await locationService.saveLocation(req.body);
        console.log(`${logger} - location saved in database`);

        console.log(`${logger} - location created success.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.LOCATION_SUCCESS,
            data: locationData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getAllLocations(req,res) {
    try {
        let logger = `locationController: getAllLocations`

        const locationData = await locationService.findAllLocations();
        console.log(`${logger} - location fetched successfully, count:`, locationData.length);

        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.LOCATION_GET,
            data: locationData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}



module.exports = {
    locationController
}