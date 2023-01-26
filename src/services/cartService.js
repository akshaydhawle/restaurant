const { cartsModel } = require("../models/cartsModel")
const { restaurantsModel } = require("../models/restaurantsModel")
const { menusModel } = require("../models/menusModel")
const UtilService = require('../services/utils');
const { ObjectId } = require('mongoose').Types;
const _ = require('lodash');
const { MESSAGES, HTTP_CODES } = require("../constants/constants");

async function saveToCart(data) {
    return await cartsModel.insertMany(data);
}

async function getCartItems({
    filter = {},
    sortColumn = '_id',
    sortDirection = 'DESC',
    page = 1,
    size = 10,
}) {
    let logger = `getCartItems:`;
    console.log(`${logger} input values: filter, sortColumn, sortDirection, page, size`, filter, sortColumn, sortDirection, page, size);

    // convert the sortDirection in required syntax for mongodb
    sortDirection = sortDirection === 'ASC' ? 1 : -1;

    console.log(`${logger}: fetching cart items ... : `, JSON.stringify(filter));
    const cartItems = await cartsModel.find({ ...filter })
        .populate({ path: "restaurantId", select: ['name'] })
        .populate({ path: "menuId", select: ['_id', 'name', 'price', 'image'] })
        .limit(size)
        .skip((page - 1) * 10)
        .sort({ [sortColumn]: sortDirection });
    const cartItemsCount = await cartsModel.countDocuments({ ...filter })

    console.log(`${logger}: cart items count : ${cartItemsCount}`);

    const response = UtilService.formatResponseForPagination({
        data: cartItems,
        totalCount: cartItemsCount,
        page: page,
        size: size
    })
    console.log(`${logger}: formatedd result : ${JSON.stringify(response)}`);

    return response;
}

function ObjectIdToString(objectIds) {
    return objectIds.map(item => item.toString())
}

async function validateCartItems(data) {
    let logger = `validateCartItems`;
    console.log(`${logger}: `);
    // find non existing restaurants
    const restaurants = data.map(item => ObjectId(item.restaurantId));
    console.log(`${logger}: mapped restaurants Ids: ${restaurants}`);

    const restaurantsResponse = (await restaurantsModel.find({
        _id: { $in: restaurants }
    })).map(item => item._id);
    console.log(`${logger}: existing restaurants Ids: ${restaurantsResponse}`);

    const nonExistsingRestaurants = _.difference(ObjectIdToString(restaurants), restaurantsResponse);
    console.log(`${logger}: non existing restaurants Ids: ${nonExistsingRestaurants}`);

    if (nonExistsingRestaurants.length > 0) {
        throw UtilService.CustomError({ message: MESSAGES.RESTAURANT_NOT_FOUND, statusCode: HTTP_CODES.NOT_FOUND, data: nonExistsingRestaurants })
    }

    // find non existing menus
    const menus = data.map(item => ObjectId(item.menuId));
    console.log(`${logger}: mapped menus Ids: ${menus}`);

    const menusResponse = (await menusModel.find({
        id: { $in: menus }
    })).map(item => item._id);
    console.log(`${logger}: existing menus Ids: ${menusResponse}`);

    const nonExistsingMenus = _.difference(ObjectIdToString(menus), menusResponse);
    console.log(`${logger}: non existing menus Ids: ${nonExistsingMenus}`);

    if (nonExistsingMenus.length > 0) {
        throw UtilService.CustomError({ message: MESSAGES.MENU_NOT_FOUND, statusCode: HTTP_CODES.NOT_FOUND, data: nonExistsingMenus })
    }

    console.log(`${logger}: restaurants and menus are valid, processing next step ...`);

}

async function removeItems(logName, cartItems) {
    console.log(`${logName}: remove cart Items : ${cartItems?.length}`);
    let ids = cartItems.map(cartItem => ObjectId(cartItem._id));
    await cartsModel.deleteMany({ _id: { $in: ids } });
}

module.exports = {
    saveToCart,
    getCartItems,
    validateCartItems,
    removeItems
}