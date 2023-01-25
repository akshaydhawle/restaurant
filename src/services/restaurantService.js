const { MESSAGES, HTTP_CODES } = require("../constants/constants");
const { restaurantsModel } = require("../models/restaurantsModel");
const UtilService = require("./utils");

async function checkIfRestaurantExists({ name }) {
    const restaurant = await restaurantsModel.findOne({ name });
    if (restaurant) {
        throw UtilService.CustomError({ message: MESSAGES.RESTAURANT_ALREADY_EXISTS, statusCode: HTTP_CODES.CONFLICT })
    }
}

async function isValidRestaurant({ id }) {
    const restaurant = await restaurantsModel.findById(id);
    if (!restaurant) {
        throw UtilService.CustomError({ message: MESSAGES.RESTAURANT_NOT_FOUND, statusCode: HTTP_CODES.NOT_FOUND })
    }
    return restaurant;
}


async function saveRestaurant(restaurantInfo) {
    return await restaurantsModel(restaurantInfo).save();
}

async function updateRestaurant(id, restaurantInfo) {
    return await restaurantsModel.findByIdAndUpdate(id, restaurantInfo);
}

async function getRestaurantsForUsers({
    filter = {},
    sortColumn = '_id',
    sortDirection = 'DESC',
    page = 1,
    size = 10,
}) {
    let logger = `getRestaurantsForUsers:`;
    console.log(`${logger} input values: filter, sortColumn, sortDirection, page, size`, filter, sortColumn, sortDirection, page, size);

    // convert the sortDirection in required syntax for mongodb
    sortDirection = sortDirection === 'ASC' ? 1 : -1;

    // should return only restaurants which are active.
    filter.isActive = true;

    // filter the restaurants based on time
    const currentTime = new Date().getHours();
    filter.openTime = { $gte: currentTime };

    console.log(`${logger}: fetching restaurants ... : `);
    const restaurants = await restaurantsModel.find({ ...filter })
        .limit(size)
        .skip((page - 1) * 10)
        .sort({ [sortColumn]: sortDirection });
    const restaurantsCount = await restaurantsModel.countDocuments({ ...filter })

    console.dir(restaurants, { depth: null, colors: true });
    console.log(`${logger}: restaurants count : ${restaurantsCount}`);

    const response = UtilService.formatResponseForPagination({
        data: restaurants,
        totalCount: restaurantsCount,
        page: page,
        size: size
    })
    console.log(`${logger}: formatedd result : ${JSON.stringify(response)}`);

    return response;
}



module.exports = {
    checkIfRestaurantExists,
    saveRestaurant,
    isValidRestaurant,
    updateRestaurant,
    getRestaurantsForUsers
}