const express = require('express');

const { menuItemController } = require('../controller/menuItemController');

const menuRouter = express.Router();

menuRouter.post('/', menuItemController.createMenuItem);
menuRouter.put('/', menuItemController.updateMenuItem);
menuRouter.get('/', menuItemController.getAllMenusOfRestaurant);
menuRouter.get('/categoriesCount', menuItemController.getCatgoryWiseMenuItemsCount);

module.exports = menuRouter;

