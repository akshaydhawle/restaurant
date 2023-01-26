const UtilService = require('../services/utils');
const restaurantService = require('../services/restaurantService');
const restaurantValidation = require('../validation/restaurantValidation');
const { HTTP_CODES, MESSAGES } = require('../constants/constants');

const restaurantController = {
    createRestaurant,
    updateRestaurant,
    getRestaurantsForUsers,
    getRestaurantInformation,
    activateRestaurant
}

async function createRestaurant(req, res) {
    try {
        let logger = `restaurantController: createRestaurant`;
        console.log(logger);

        // extraction
        const { name } = req.body;

        // validation
        restaurantValidation.validateCreateRestaurant(req.body);
        console.log(`${logger} restaurant validated`);

        // check the existence 
        await restaurantService.checkIfRestaurantExists({ name });
        console.log(`${logger} restaurant not exists, checked`);

        // save the restaurant into database.
        const restaurant = await restaurantService.saveRestaurant(req.body);
        console.log(`${logger} restaurant data saved successfully`, restaurant);

        return res.status(HTTP_CODES.CREATED).send({
            message: MESSAGES.RESTAURANT_SUCCESS,
            data: restaurant
        })
    } catch (error) {
        return UtilService.serverError({ res, error })
    }
}

async function updateRestaurant(req, res) {
    try {
        let logger = `restaurantController: createRestaurant`;
        console.log(logger);

        // extraction
        const { id } = req.body;

        // validation
        await restaurantValidation.validateUpdateRestaurant(req.body);
        console.log(`${logger} restaurant validated`);

        // check if restaurant is exists which we want to update.
        await restaurantService.isValidRestaurant(id);
        console.log(`${logger} restaurant exists, we can proceed`);

        // update restaurant
        const restaurant = await restaurantService.updateRestaurant(id, req.body);
        console.log(`${logger} restaurant updated`, JSON.stringify(restaurant));

        // send success
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.RESTAURANT_UPDATED,
            data: restaurant
        })
    } catch (error) {
        return UtilService.serverError({ res, error })
    }
}

async function getRestaurantsForUsers(req, res) {
    try {
        let logger = `restaurantController: getRestaurantsForUsers`;
        console.log(logger);

        // validation
        const body = restaurantValidation.validateGetAllRestaurantForUsers(req.query);

        // retrieving restaurants.
        console.log(`${logger} : retrieving restaurants ...`);
        const response = await restaurantService.getRestaurantsForUsers(body);
        console.log(`${logger} : sending response ...`, JSON.stringify(response));

        // adding message to response
        response.message = MESSAGES.RESTAURANT_GET_ALL;

        return res.status(HTTP_CODES.OK).send(response);
    } catch (error) {
        return UtilService.serverError({ res, error })
    }
}

async function getRestaurantInformation(req, res) {
    try {
        let logger = `restaurantController: getRestaurantInformation`;
        console.log(logger);

        console.log(`${logger}: extracting data`);
        const { _id } = req.params;

        // validation
        console.log(`${logger}: validating data`);
        if (!_id) return res.status(HTTP_CODES.BAD_REQUEST).send('_id is required');

        console.log(`${logger} : checking restaurant ...`);
        const restaurant = await restaurantService.isValidRestaurant({ id: _id });

        return res.status(200).send({
            data: restaurant,
            message: MESSAGES.RESTAURANT_GET
        });

    } catch (error) {
        return UtilService.serverError({ res, error })
    }
}

async function activateRestaurant(req, res) {
    try {
        let logger = `restaurantController: activateRestaurant`;
        console.log(logger);

        console.log(`${logger}: extracting data`);
        const { restaurantId } = req.params;
        if (!restaurantId) return res.status(HTTP_CODES.BAD_REQUEST).send('restaurantId is required');

        console.log(`${logger} : checking restaurant ...`);
        await restaurantService.isValidRestaurant({ id: restaurantId });

        console.log(`${logger} : restaurant exists, updating restaurant ...`);
        const restaurant = await restaurantService.updateRestaurant(restaurantId, { isActive: true });

        return res.status(200).send({
            data: restaurant,
            message: MESSAGES.RESTAURANT_ACTIVATED
        });
    } catch (error) {
        return UtilService.serverError({ res, error })
    }
}


module.exports = {
    restaurantController,
}