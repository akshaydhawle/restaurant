const { MESSAGES, HTTP_CODES } = require("../constants/constants");
const { menusModel } = require("../models/menusModel");
const UtilService = require("./utils");
const { ObjectId } = require('mongoose').Types;

async function checkIfMenuItemAlreadyExists({ name }) {
    const menuItem = await menusModel.findOne({ name });
    if (menuItem) {
        throw UtilService.CustomError({ message: MESSAGES.MENU_ALREADY_EXISTS, statusCode: HTTP_CODES.CONFLICT })
    }
    return menuItem;
}

async function isValidMenuItem(id) {
    const menuItem = await menusModel.findById(id);
    if (!menuItem) {
        throw UtilService.CustomError({ message: MESSAGES.MENU_NOT_FOUND, statusCode: HTTP_CODES.NOT_FOUND })
    }
    return menuItem;
}

// save location data
async function saveMenuItem(menuInfo) {
    return await menusModel(menuInfo).save();
}

// save location data
async function updateMenuItem(id, menuInfo) {
    return await menusModel.findByIdAndUpdate(id, menuInfo);
}

async function getGroupByCategoriesMenus(restaurantId) {
    return await menusModel.aggregate(
        [
            {
                $match: {
                    restaurantId: ObjectId(restaurantId)
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "categories"
                }
            },
            { $unwind: { path: "$categories" } },
            {
                $group: {
                    _id: "$categoryId",
                    name: { "$first": "$categories.name" },
                    count: { $sum: 1 }
                }
            },
        ],
    );
}


async function getMenusOfRestaurant({
    filter = {},
    sortColumn = '_id',
    sortDirection = 'DESC',
    page = 1,
    size = 10,
}) {
    let logger = `getMenusOfRestaurant:`;
    console.log(`${logger} input values: filter, sortColumn, sortDirection, page, size`, filter, sortColumn, sortDirection, page, size);

    // convert the sortDirection in required syntax for mongodb
    sortDirection = sortDirection === 'ASC' ? 1 : -1;

    console.log(`${logger}: fetching restaurants ... : `, JSON.stringify(filter));
    const menus = await menusModel.find({ ...filter })
        .populate({ path: "restaurantId", select: ['_id', 'name'] })
        .populate({ path: "categoryId", select: ['_id', 'name'] })
        .limit(size)
        .skip((page - 1) * 10)
        .sort({ [sortColumn]: sortDirection });
    const menusCount = await menusModel.countDocuments({ ...filter })

    console.log(`${logger}: menus count : ${menusCount}`);

    const response = UtilService.formatResponseForPagination({
        data: menus,
        totalCount: menusCount,
        page: page,
        size: size
    })
    console.log(`${logger}: formatedd result : ${JSON.stringify(response)}`);

    return response;
}

module.exports = {
    checkIfMenuItemAlreadyExists,
    saveMenuItem,
    isValidMenuItem,
    updateMenuItem,
    getMenusOfRestaurant,
    getGroupByCategoriesMenus
};