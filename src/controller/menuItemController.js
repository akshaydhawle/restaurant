const UtilService = require('../services/utils');
const menuItemService = require('../services/menuItemService');
const menuItemValidation = require('../validation/menuItemValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const menuItemController = {
    createMenuItem,
    updateMenuItem,
    getAllMenusOfRestaurant,
    getCatgoryWiseMenuItemsCount
};

async function createMenuItem(req, res) {
    try {
        let logger = `menuItemController: createMenuItem`
        console.log(`${logger}`);

        const { name } = req.body;

        // validate the user
        menuItemValidation.validateCreateMenuItem(req.body);
        console.log(`${logger} - , menu item validated ...`, JSON.stringify(req.body));

        // check if user with name already exists
        await menuItemService.checkIfMenuItemAlreadyExists({ name });
        console.log(`${logger} - menu item does not exists already, proceeding`, name);

        // save the user in the database
        const menuData = await menuItemService.saveMenuItem(req.body);
        console.log(`${logger} - menu item saved in database`);

        console.log(`${logger} - menuData created success.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.MENU_SUCCESS,
            data: menuData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function updateMenuItem(req, res) {
    try {
        let logger = `menuItemController: updateMenuItem`;
        console.log(`${logger}`);

        // extraction
        const { id } = req.params;

        // validate the user
        menuItemValidation.validateUpdateMenuItem({ id, ...req.body });
        console.log(`${logger} - , menu item validated ...`, JSON.stringify(req.body));

        // check if user with name already exists
        await menuItemService.isValidMenuItem(id);
        console.log(`${logger} - menu item does not exists already, proceeding`);

        const menuData = await menuItemService.updateMenuItem(id, req.body);
        console.log(`${logger} - menu item updated`);

        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.MENU_UPDATED,
            data: menuData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getAllMenusOfRestaurant(req, res) {
    try {
        let logger = `menuItemController: getAllMenusOfRestaurant`;
        console.log(`${logger}`);

        // validation
        const body = menuItemValidation.validateGetAllMenusOfRestaurant(req.query);

        // retrieving menus.
        console.log(`${logger} : retrieving menus of restaurant: ${body.id} ...`);
        const response = await menuItemService.getMenusOfRestaurant(body);
        console.log(`${logger} : sending response ...`, JSON.stringify(response));

        // adding message to response
        response.message = MESSAGES.MENU_GET;
        return res.status(HTTP_CODES.OK).send(response);
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getCatgoryWiseMenuItemsCount(req, res) {
    try {
        let logger = `menuItemController: getCatgoryWiseMenuItemsCount`;
        console.log(`${logger}`);

        // validation
        const { restaurantId } = req.query;
        if (!restaurantId) return res.status(HTTP_CODES.BAD_REQUEST).send("restaurantId is required");

        // retrieving menus.
        console.log(`${logger} : retrieving menus of restaurant: ${restaurantId} ...`);
        const response = await menuItemService.getGroupByCategoriesMenus(restaurantId);
        console.log(`${logger} : sending response ...`, JSON.stringify(response));

        // adding message to response
        return res.status(HTTP_CODES.OK).send({
            data: response,
            message: MESSAGES.RESTAURANT_MENU_CATEGORIES_COUNT
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}


module.exports = {
    menuItemController
}